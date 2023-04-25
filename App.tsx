/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainTabNavigator from './navigators/MainTabNavigator';
import { COLORS } from './utils/theme';

const Theme = {
  dark:false,
  colors:{
    ...DefaultTheme.colors,
    background:COLORS.white,
  }
}

function App(): JSX.Element {
  return (
    <SafeAreaProvider style={{flex:1}}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='#FFFFFF'
      />
      <NavigationContainer theme={Theme}>
        <MainTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
