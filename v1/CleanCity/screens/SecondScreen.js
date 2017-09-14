import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
export default class SecondScreen extends React.Component {
    static navigationOptions = {
        title: 'SecondScreen',
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
              <Text>Second Screen</Text>
                <Button
                    onPress={
                        ()=> navigate("First")
                    }
                    title="Go to First"
                />
            </View>      
      );
    }
}