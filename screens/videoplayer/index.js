import React, { Component } from 'react';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import VideoHead from './VideoHead.js';
// 引入子页面
import VideoInro from './VideoInro';
import VideoCom from './VideoCom';
import { View } from 'react-native';
import VideoPlayScreen from '../videoplayer/VideoPlayScreen.js';
import { pxToDp } from '@utils/styleKits.js';
export default class Index extends Component {


   state = {
        videoHeight:pxToDp(220),
        video:{
          id:1,
          videouri:'"https://vd3.bdstatic.com/mda-jmr9nwe0scccdqs8/sc/mda-jmr9nwe0scccdqs8.mp4?playlist=%5B%22hd%22%2C%22sc%22%5D&v_from_s=hkapp-haokan-suzhou&auth_key=1626854002-0-0-c5ad25f8f12dd38fec769c93fc6d4a61&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=",',
          title:'孟丽君-见书房寂寂无声好清净',play:'1687',like:'321',dz:'2.1w',sc:'2.1w',

          tjvideo:[{id:1,imguri:'',imgtitle:'许大家境虽不好1',intr:'《王老虎抢亲》，越剧传统剧目。',playnum:'96.7万'},
        {id:2, imguri:'',imgtitle:'许大家境虽不好2',intr:'《王老虎抢亲》，越剧传统剧目。',playnum:'96.7万'},
        {id:3, imguri:'',imgtitle:'许大家境虽不好3',intr:'《王老虎抢亲》，越剧传统剧目。',playnum:'96.7万'},],

          plvideo:[
            {id:1,userimg:'',username:'可畏的男人1',date:'2021-8-6',comdz:'101',usercom:'山东话版的林妹妹。有几分林黛玉倒把垂杨柳的风味了1',userscom:'海十七侠：河南话的李师师，陕西话的貂蝉，山西话的杨玉环1'},
            {id:2,userimg:'',username:'可畏的男人2',date:'2021-8-6',comdz:'112',usercom:'山东话版的林妹妹。有几分林黛玉倒把垂杨柳的风味了2',userscom:'海十七侠：河南话的李师师，陕西话的貂蝉，山西话的杨玉环2'},
            {id:3,userimg:'',username:'可畏的男人3',date:'2021-8-6',comdz:'123',usercom:'山东话版的林妹妹。有几分林黛玉倒把垂杨柳的风味了3',userscom:'海十七侠：河南话的李师师，陕西话的貂蝉，山西话的杨玉环3'},
          ]
          
        }
  }
  onIt = () => {
    this.setState({
        videoHeight: this.state.videoHeight = '100%',
    });
};
  render(){
    const {video}=this.state
    return (
    <View style={{flex:1}}>
        <View style={{ height:this.state.videoHeight, width: '100%', backgroundColor: 'red' }}>
                    <VideoPlayScreen onIt={this.onIt} videouri={this.state.video.videouri} />
                    {/* <Button onPress={()=>this.onIt()} title='111'></Button> */}
                </View>
    <ScrollableTabView
      style={{}}
      initialPage={0}
      renderTabBar={() => <VideoHead />}
    >
      <VideoInro 
       tabLabel='简介'
       all={{...this.state.video}}

      ></VideoInro>
      <VideoCom
      tabLabel='评论'
      comment={this.state.video.plvideo}
      >
      </VideoCom>
    </ScrollableTabView>
    </View>
    );
  }
}