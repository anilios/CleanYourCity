import React from 'react';
import { AppRegistry,StyleSheet,Text,View,Image} from 'react-native';
export default class FirstScreen extends React.Component {
    static navigationOptions = {
        title: 'FirstScreen',
    }
    render() {
        var {navigate} = this.props.navigation;
        return (
            <View>
              <Text>First Screen</Text>
                <Buttton onPress={
                        ()=> navigate("Second",{name:"Vivek",email:"vivek@inv8.com"})
                    }
                title="Go to Second"/>
            </View>      
      );
    }
}
AppRegistry.registerComponent('CleanCity', () => CleanCity);