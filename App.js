import React from 'react';
import ScreenNavigation from './ScreenNavigation';
import { enableScreens } from 'react-native-screens';
import WelcomeScreen from './app/screens/WelcomeScreen';

enableScreens();

export default function App() {
  return <ScreenNavigation/>;
  }
