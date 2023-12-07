const removeTrailingSlash = (str: string) => str.replace(/\/$/, '');

const SET_COOKIES_MAP = new Map();

export const doBasicAuthLogin = async ({tsHost, username, password}: any) => {
  const basicAuthApi = '/callosum/v1/session/login';
  const apiEndpoint = `${removeTrailingSlash(tsHost)}${basicAuthApi}`;

  const urlencoded = new URLSearchParams();
  urlencoded.append('username', username);
  urlencoded.append('password', password);

  const credentials: RequestCredentials_ = 'include';

  const requestOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'x-requested-by': 'ThoughtSpot',
    },
    body: `username=${encodeURIComponent(
      username,
    )}&password=${encodeURIComponent(password)}`,
    credentials,
  };

  return fetch(apiEndpoint, requestOptions)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(`Response status is not OK: ${response.status}`);
      }
      return response;
    })
    .then(response => {
      const setCookieHeader = response.headers.get('set-cookie');
      if (setCookieHeader) {
        const jsessionIdMatch = response.headers
          .get('set-cookie')
          ?.match(/JSESSIONID=([^;]+)/);
        const clientIdMatch = response.headers
          .get('set-cookie')
          ?.match(/clientId=([^;]+)/);

        if (jsessionIdMatch) {
          SET_COOKIES_MAP.set('JSESSIONID', jsessionIdMatch[1]);
        }

        if (clientIdMatch) {
          SET_COOKIES_MAP.set('clientId', clientIdMatch[1]);
        }

        console.log('SET_COOKIES_MAP', SET_COOKIES_MAP);
      }
      return response;
    })
    .then(response => ({
      text: response.text(),
      headers: response.headers,
    }));
};

export const fetchSessionInfo = async ({tsHost}: any) => {
  const sessionInfoApi = '/callosum/v1/session/info';
  const apiEndpoint = `${removeTrailingSlash(tsHost)}${sessionInfoApi}`;

  const credentials: RequestCredentials_ = 'include';

  const requestOptions = {
    method: 'GET',
    headers: {
      Cookie: `JSESSIONID=${SET_COOKIES_MAP.get(
        'JSESSIONID',
      )};clientId=${SET_COOKIES_MAP.get('clientId')}`,
    },
    credentials,
  };

  return fetch(apiEndpoint, requestOptions).then(response => {
    if (response.status !== 200) {
      throw new Error(`Response status is not OK: ${response.status}`);
    }

    return {
      text: response.text(),
      headers: response.headers,
    };
  });
};
