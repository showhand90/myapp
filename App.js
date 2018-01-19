import React, { Component } from "react";
import HomeScreenRouter from "./HomeScreen/index.js";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  
  render() {
    
    return <HomeScreenRouter />;
  }
}
