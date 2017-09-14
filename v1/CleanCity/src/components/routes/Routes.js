import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../home/Home.js'
import About from '../home/About.js'
import Zones from '../zones/Zones.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "about" component = {About} title = "About" />
         <Scene key = "zones" component = {Zones} title = "Zones" />
      </Scene>
   </Router>
)
export default Routes