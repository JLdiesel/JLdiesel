{/**
icon1 2 是给顶部设置的返回和分享按钮 需要在引用的页面按需求给名字
*/}
'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity ,BVLinearGradient} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from "@react-navigation/native";
import { pxToDp } from '../../utils/styleKits';
import {LinearGradient} from 'expo-linear-gradient';
export default class HeaderHaveBack extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
}

static contextType = NavigationContext;
  render() {
    return (
      
 


         <LinearGradient colors={['#468cd3', '#fff']} style={styles.box} start={{x: 0, y: 0}} end={{x: 0 ,y: 0.3}}>
        <View style={styles.icon1}>
          <TouchableOpacity onPress={() => this.context.goBack()}>
            {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
            <Ionicons name={this.props.icon1} size={25} color="#FFFFCC" />
          </TouchableOpacity>
        </View>

        <View style={styles.textview}>
          {/* 标题名 */}
          <Text style={styles.textstyle}>{this.props.title}</Text>
        </View>

        <View style={styles.icon2}>
          <TouchableOpacity>
            {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
            <Ionicons name={this.props.icon2} size={25} color="#FFFFCC" />
          </TouchableOpacity>
        </View>
      </LinearGradient> 

    );
  }
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    alignSelf: 'center',    
    flexDirection:'row',
    height:70
  },
  icon1: {
    flexDirection: 'row',
    height: 18,
    width:30,
    alignItems: "center",
    marginLeft:10,
    marginTop:30
  },
  icon2: {
    flexDirection: 'row',
    height: 0,
    width:pxToDp(40),
    alignItems: "center",

    marginTop:30
  },
  textview: {
    flex:1,
    alignItems:'center'
    ,marginTop:30
  },
  textstyle: {
    fontSize: pxToDp(18),
    color: '#FFFFCC'
  },
});

