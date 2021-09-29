/* eslint-disable prettier/prettier */
import React from 'react';
import { Navigation } from 'react-native-navigation';

/* import { 
  AndrewScreen, 
  StoriesScreen, 
  ToNightScreen, 
  SleepScapesScreen,
} from '@screens'; */

import AndrewScreen from '../screens/BottomTabScreen/AndrewScreen';
import StoriesScreen from '../screens/BottomTabScreen/StoriesScreen';
import ToNightScreen from '../screens/BottomTabScreen/ToNightScreen';
import SleepScapesScreen from '../screens/BottomTabScreen/SleepScapesScreen';
import SoundScapesScreen from '../screens/BottomTabScreen/SoundScapesScreen';

export function registerScreens() {
    Navigation.registerComponent('Andrew', () => AndrewScreen);   
    Navigation.registerComponent('Stories', () => StoriesScreen);   
    Navigation.registerComponent('ToNight', () => ToNightScreen);   
    Navigation.registerComponent('SleepScapes', () => SleepScapesScreen);   
    Navigation.registerComponent('SoundScapes', () => SoundScapesScreen);   
}
