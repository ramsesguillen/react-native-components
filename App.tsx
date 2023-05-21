import 'react-native-gesture-handler';
import 'react-native-gesture-handler';

import * as React from 'react';

import { DarkTheme, NavigationContainer, Theme } from '@react-navigation/native';

import { Navigator } from './src/Navigation/Navigator';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    // primary: string;
    background: 'black'
    // card: string;
    // text: string;
    // border: string;
    // notification: string;
  }
}

export default function App() {
  return (
    <NavigationContainer
      theme={customTheme}
    >
      <Navigator />
    </NavigationContainer>
  );
}
