import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = ()=> {
   const goToAbout = () =>{
      Actions.about()
   }
   const goToZones = () =>{
      Actions.zones() 
   }
   return (     
      <TouchableOpacity style = {{ margin: 8 }} onPress = {goToZones}>
         <Text>Zones</Text>
      </TouchableOpacity>
   )
}
export default Home