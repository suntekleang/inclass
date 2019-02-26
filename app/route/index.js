import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './../screen/Home';
import SettingScreen from '../screen/Settings';
import LoginScreen from '../screen/login';
import HomeWorkScreen from '../screen/HomeWork';

const TabNavigator = createBottomTabNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  Settings: SettingScreen,
  HomeWork: HomeWorkScreen,
});

export default createAppContainer(TabNavigator);