import {Navigation} from 'react-native-navigation';
import {startNetworkLogging} from 'react-native-network-logger';
import App from './App';
import NetworkLogger from 'react-native-network-logger';
import BasicAuthScreen from './src/screens/BasicAuthScreen';
import TrustedAuthScreen from './src/screens/TrustedAuthScreen';
import TrustedAuthCookielessScreen from './src/screens/TrustedAuthCookielessScreen';

startNetworkLogging();
Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('NetworkLoggerScreen', () => NetworkLogger);
Navigation.registerComponent('BasicAuthScreen', () => BasicAuthScreen);
Navigation.registerComponent('TrustedAuthScreen', () => TrustedAuthScreen);
Navigation.registerComponent(
  'TrustedAuthCookielessScreen',
  () => TrustedAuthCookielessScreen,
);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
