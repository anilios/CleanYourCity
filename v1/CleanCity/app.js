import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text,View,Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './home';
const Navigation = StackNavigator({
  Home: {screen:HomeScreen}
});
export default CleanCity;