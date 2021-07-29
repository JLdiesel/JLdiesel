import React, {Component,createRef } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList, TextInput, ScrollView} from 'react-native';

import VideoPlayer from 'react-native-rn-videoplayer'
// import { Video, AVPlaybackStatus } from 'expo-av';

const mockBooks = [
    {
      rank: 5,
      username: "GATHERING PREY",
      subs: "啊啊实打实大苏打实",
      date:"2020-1-1",
    },  {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date:"2020-1-1",
      },  {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date:"2020-1-1",
      },
      {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date:"2020-1-1",
      },
      {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date:"2020-1-1",
      }, {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date:"2020-1-1",
      }, {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date:"2020-1-1",
      }, {
        rank: 5,
        username: "GATHERING PREY",
        subs: "啊啊实打实大苏打实",
        date:"2020-1-1",
      },

]

export default class App extends Component{
   

    render(){

        return (
            <View>
          
             
              <VideoPlayer
              url={ 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}
              autoPlay={false}//是否自动播放，默认为true v2.2.5增加
              poster={"../src/res/7.jpg"}//视频封面
              ref={(ref)=>this.player=ref}
              lockControl={true}//控件锁定功能 v2.0.6增加
              moreSetting={() => null}//右上角更多按钮 输出null则不显示
              onSmallBack={()=>{this.props.navigation.goBack()}}
              />

                
             
            </View>

        )
    }
}
