import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const BasicAuthScreen = () => {
  const [username, onChangeUsername] = useState();

  return (
    <View style={styles.container}>
      <Text>Test Basic Auth</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Username"
      />
    </View>
  );
};

BasicAuthScreen.options = {
  topBar: {
    title: {
      text: 'Basic Auth',
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
});

export default BasicAuthScreen;
