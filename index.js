/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import BasicAuthScreen from './src/screens/BasicAuthScreen';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('BasicAuthScreen', () => BasicAuthScreen);

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
