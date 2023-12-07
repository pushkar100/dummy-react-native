import React, {useState} from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const App = ({componentId}: any) => {
  const [tsHost, onTSHostChange] = useState('');

  const onPressTestBasicAuth = () => {
    Navigation.push(componentId, {
      component: {
        name: 'BasicAuthScreen',
        passProps: {
          tsHost,
        },
      },
    });
  };

  const onPressTestTrustedAuth = () => {
    Navigation.push(componentId, {
      component: {
        name: 'TrustedAuthScreen',
        passProps: {
          tsHost,
        },
      },
    });
  };

  const onPressTestTrustedAuthCookieless = () => {
    Navigation.push(componentId, {
      component: {
        name: 'TrustedAuthCookielessScreen',
        passProps: {
          tsHost,
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.helperText}>Select authentication type</Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onTSHostChange}
          value={tsHost}
          placeholder="TS host"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onPressTestBasicAuth}
          title="Test Basic Auth"
          color="#841584"
          accessibilityLabel="Test Basic Auth"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onPressTestTrustedAuth}
          title="Test Trusted Auth"
          color="#841584"
          accessibilityLabel="Test Trusted Auth"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onPressTestTrustedAuthCookieless}
          title="Test Trusted Auth Cookieless"
          color="#841584"
          accessibilityLabel="Test Trusted Auth Cookieless"
        />
      </View>
    </View>
  );
};

App.options = {
  topBar: {
    title: {
      text: 'Home',
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
  helperText: {
    marginBottom: 20,
    fontSize: 20,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    marginBottom: 20,
    fontSize: 20,
  },
});

export default App;
