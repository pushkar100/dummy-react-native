import React from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text, StyleSheet, Button} from 'react-native';

const App = ({componentId}: any) => {
  const onPressTestBasicAuth = () => {
    Navigation.push(componentId, {
      component: {
        name: 'BasicAuthScreen',
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.helperText}>Select authentication type</Text>
      <View>
        <Button
          onPress={onPressTestBasicAuth}
          title="Test Basic Auth"
          color="#841584"
          accessibilityLabel="Test Basic Auth"
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
});

export default App;
