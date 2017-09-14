import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
export default class FirstScreen extends React.Component {
    static navigationOptions = {
        title: 'Zone',
    }
    render() {
        var {navigate} = this.props.navigation;
        let cities = ['City1', 'City2','City3'];
        let listdata = [
                  {key: 'Devin',},
                  {key: 'Jackson'},
                  {key: 'James'},
                  {key: 'Joel'},
                  {key: 'John'},
                  {key: 'Jillian'},
                  {key: 'Jimmy'},
                  {key: 'Julie'},
                ];
        return (
            
            <View style={styles.container}>
              <Image source={require('../images/logo.jpg')} style={styles.logo}/>
              <Text style={styles.welcome}>
                Welcome to Clean City!
              </Text>
              <Text style={styles.instructions}>
                     Aug- 28- 2017 14:27:00                     
              </Text>
              <Text style={styles.instructions}>
                    10 Results               
              </Text>
              <FlatList style={styles.listdata}
                data={listdata}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
              />
                         
              <Button title="Go" color="#841584"  onPress={() => navigate('FirstScreen')} accessibilityLabel="Learn more about this purple button" />
            </View>
      );
    }
}


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
    width: 100,
    height: 200,
    backgroundColor: '#FFFFFF',
    color: 'red' 
  },
  listdata: {
    backgroundColor: '#1e425c',
    borderColor: 'red',
    borderWidth: 1,
    height: 200,
    fontSize: 20,
    color: '#FFF',
    marginBottom: 10
    
  },
   item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
   citydropdown: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: 'red',
    borderWidth: 1,
    height: 40,
    fontSize: 20,
    color: '#000',
    marginBottom: 10
  },
  label_dropdown : {
    fontSize: 20,
    color: '#000'
  },
  dropdownstyle: {
    backgroundColor: '#FFFFFF',
    borderColor: 'red',
    borderWidth: 1,
    fontSize: 20,
    color: '#000',
    width: 200 
  }
});