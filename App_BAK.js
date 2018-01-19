import React, { Component } from "react";
//import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';  
//import HomeScreenRouter from './HomeScreen/index';  
//import MineScreen from './MinePage';  
import HomeScreen from "./HomeScreen/HomeScreen.js";
import MainScreenNavigator from "./ChatScreen/index.js";
import DrawNav from "./ProfileScreen/index.js";
import SideBar from "./SideBar/SideBar.js";
import DrawerNavigator  from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    Profile: { screen: DrawNav }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
); 
export default class App extends Component {  
  
  render() {  
        return (  
          <HomeScreenRouter />  
        );  
  }  
}  
  
/* const Navigator = DrawerNavigator({  
  
    Home:{screen:HomeScreen},  
    Mine:{screen:MineScreen},  
});   */
  
