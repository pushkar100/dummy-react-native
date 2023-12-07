import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {fetchSessionInfo} from '../utils';

const TrustedAuthScreen = ({tsHost}: any) => {
  const [username, onChangeUsername] = useState();
  const [password, onChangePassword] = useState();
  const [authSuccess, setAuthSuccess] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [infoCallSuccess, setInfoCallSuccess] = useState(false);
  const [infoCallError, setInfoCallError] = useState(false);

  const onPressTrustedAuthLogin = () => {
    console.log('onPressTrustedAuthLogin');
  };

  const onPressMakeInfoCall = () => {
    fetchSessionInfo({tsHost})
      .then(res => setInfoCallSuccess(true))
      .catch(err => {
        console.log('error', err);
        setInfoCallError(true);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Test Trusted Auth</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
      />
      <Button
        onPress={onPressTrustedAuthLogin}
        title="Trusted Auth Login"
        color="#841584"
        accessibilityLabel="Trusted Auth Login"
      />
      {authSuccess && (
        <View style={styles.authResult}>
          <Text>✅︎ Auth success</Text>
        </View>
      )}
      {authError && (
        <View style={styles.authResult}>
          <Text>❌ Auth error</Text>
        </View>
      )}
      <View style={styles.testInfoCall}>
        <Text style={styles.testInfoDescription}>
          Test login by making an info call
        </Text>
        <Button
          onPress={onPressMakeInfoCall}
          title="Make info call"
          color="#841584"
          accessibilityLabel="Make info call"
        />
        {infoCallSuccess && (
          <View style={styles.infoCallResult}>
            <Text>✅︎ Info call success</Text>
          </View>
        )}
        {infoCallError && (
          <View style={styles.infoCallResult}>
            <Text>❌ Info call error</Text>
          </View>
        )}
      </View>
    </View>
  );
};

TrustedAuthScreen.options = {
  topBar: {
    title: {
      text: 'Trusted Auth',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  authResult: {
    margin: 12,
    padding: 10,
  },
  testInfoCall: {
    margin: 12,
  },
  testInfoDescription: {
    margin: 12,
  },
  infoCallResult: {
    margin: 12,
    padding: 10,
  },
});

export default TrustedAuthScreen;
