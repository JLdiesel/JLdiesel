import React, { Component,Provider } from "react";
import { View } from "react-native";
import Nav from "./src/nav";
import store from './src/store'
export default class App extends Component {
  render() {
    return (
    
      <View style={{ flex: 1 }}  store={store}>
       
          <Nav></Nav>
        
        </View>
    
    );
  }
}
