/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Otherbanner from './Otherbanner'
import { Input } from 'react-native-elements';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '@components/common/top'
export default class Signature extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      signature: '',
    };
  }
  render() {
  
    return (
      <View style={{flex:1,backgroundColor:'#e2f4fe'}}>
        <Top
          icon1="arrow-back"
          title="个性签名"
         
          rightCallback={() => this.context.navigate('Ziliao',this.state)}
        />
        <View>
          <Input
            style={{
              height: pxToDp(100),
              width: pxToDp(412),
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              borderColor: '#666',
              textAlign: 'left',
              textAlignVertical: 'top',
              textShadowColor: '#000',
            }}
            multiline={true}
            onChangeText={signature => this.getNickName(signature)}
            value={this.state}
          />
        </View>
      </View>
    );
  }
  getNickName(signature) {
    this.setState({
      signature: signature,
    });
  }
}
