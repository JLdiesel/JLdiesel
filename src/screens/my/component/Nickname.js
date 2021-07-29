/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Otherbanner from './Otherbanner';
import {pxToDp} from '../../../utils/styleKits';
import {NavigationContext} from '@react-navigation/native';
import {Input} from 'react-native-elements';
export default class Nickname extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',

    };
  }
  render() {
   
    return (
      <View>
        <Otherbanner
          back="arrow-back"
          title="昵称"
          share="确定"
          rightCallback={() => this.context.navigate('Ziliao', this.state)}
        />
        <View
          style={{
            marginLeft: pxToDp(15),
            marginRight: pxToDp(15),
          }}>
          <Input
            style={{height: pxToDp(60), fontSize: pxToDp(20)}}
            placeholder="请填写您的昵称"
            placeholderTextColor="gray"
            onChangeText={nickname => this.getNickName(nickname)}
            value={this.state.nickname}
            >
          </Input>
        </View>
      </View>
    );
  }
  getNickName(nickname) {
    this.setState({
      nickname: nickname,
    });
  }
}
