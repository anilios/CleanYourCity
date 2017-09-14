/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import FirstScreen from './screens/FirstScreen';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import ModalDropdown from 'react-native-modal-dropdown';
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    let data = [{ 
      value: 'City1',
      key:1
    }, {
      value: 'City2',
       key:2
    }, {
      value: 'City3',
       key:3
    }, {
      value: 'City4',
       key:4
    }, {
      value: 'City5',
       key:5
    }];
    let cities = ['City1', 'City2','City3'];
    return (
      <View style={styles.container}>
        <Image source={require('./images/logo.jpg')} style={styles.logo}/>
        <Text style={styles.welcome}>
          Welcome to Clean City!
        </Text>
        <Text style={styles.instructions}>
               Select City 
        </Text>
          <ModalDropdown options={cities} style={styles.citydropdown}
                  defaultValue="Please Select"
                  textStyle={styles.label_dropdown}
                  dropdownStyle={styles.dropdownstyle}
          />
          <Button title="Go" color="#841584"  onPress={() => navigate('FirstScreen')} accessibilityLabel="Learn more about this purple button" />
      </View>
      
    );
  }
} 
const CleanCity = StackNavigator({
  Home: { screen: HomeScreen },
  FirstScreen: { screen: FirstScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181830',
    alignContent:'center'
  },
  logo: {
    width:200,
    marginLeft: 100,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    backgroundColor: '#111e2e'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: '#fff'
  },
   zonedropdown: {
    textAlign: 'center',
    width: 100,
    height: 200,
    backgroundColor: '#FFFFFF',
    color: 'red' 
  },
   citydropdown: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: 'red',
    borderWidth: 1,
    height: 40,
    color: '#000',
    marginBottom: 10
  },
  label_dropdown : {
    color: '#000'
  },
  dropdownstyle: {
    backgroundColor: '#FFFFFF',
    borderColor: 'red',
    borderWidth: 1,
    color: '#000',
    width: 200 
  }
});

AppRegistry.registerComponent('CleanCity', () => CleanCity);
