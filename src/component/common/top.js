{/**
icon1 2 是给顶部设置的返回和分享按钮 需要在引用的页面按需求给名字
*/}
'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from "@react-navigation/native";
export default class HeaderHaveBack extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
}

static contextType = NavigationContext;
  render() {
    return (
      <View style={styles.box}>
        <View style={styles.icon1}>
          <TouchableOpacity onPress={() => this.context.goBack()}>
            {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
            <Ionicons name={this.props.icon1} size={25} color="#468CD3" />
          </TouchableOpacity>
        </View>

        <View style={styles.textview}>
          {/* 标题名 */}
          <Text style={styles.textstyle}>{this.props.title}</Text>
        </View>

        <View style={styles.icon2}>
          <TouchableOpacity>
            {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
            <Ionicons name={this.props.icon2} size={25} color="#468CD3" />
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    alignSelf: 'center',    
    flexDirection:'row',
    backgroundColor:'white'
  },
  icon1: {
    flexDirection: 'row',
    height: 60,
    width:40,
    alignItems: "center",
    marginLeft:10,
    color:'#468CD3'
  },
  icon2: {
    flexDirection: 'row',
    height: 60,
    width:40,
    alignItems: "center",
    marginRight:10,
    color:'#468CD3'
  },
  textview: {
    flex:1,
    alignItems:'center'
  },
  textstyle: {
    fontSize: 22,
    color:'#468CD3'
  },
});

