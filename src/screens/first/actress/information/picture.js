import React, { Component } from "react";
import { View, Text,Image,ScrollView } from "react-native";
import { pxToDp } from "../../../../utils/styleKits";

class Index extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{alignItems:'center',justifyContent:'center'}}>
               <Image style={{height:pxToDp(300),width:pxToDp(250),margin:pxToDp(10)}} source={require('../../../../res/performer/14.jpg')}/>
               <Image style={{height:pxToDp(300),width:pxToDp(250),margin:pxToDp(10)}} source={require('../../../../res/performer/15.jpg')}/>
               <Image style={{height:pxToDp(300),width:pxToDp(250),margin:pxToDp(10)}} source={require('../../../../res/performer/16.jpg')}/>
               <Image style={{height:pxToDp(300),width:pxToDp(250),margin:pxToDp(10)}} source={require('../../../../res/performer/17.jpg')}/>
               </View>
            </ScrollView>
        );
    }
}
export default Index;