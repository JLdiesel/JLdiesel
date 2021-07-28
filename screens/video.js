import React, {Component,createRef } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList, TextInput, ScrollView} from 'react-native';
//导入Video组件
// 导入 Silder组件
import MyBtn from './mybtn'
import  ExpandableText1 from './expandable-text/';
import SvgUri from 'react-native-svg-uri'
import { comment, full, like, trans } from './iconfont';
import ListItem from "./listItem"
import { Video, AVPlaybackStatus } from 'expo-av';

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
    constructor(props){
        super(props);
        this.state = {          
            isShowInput:false,
            videoWidth: 300,
            videoHeight: 226,
            isFullScreen: false,
            isVisiblePausedSliderFullScreen: false,
            Listzzz:mockBooks,
            TextValue:'',
            isPlaying:false,
            status:{},
        }
    }
    setTextValue=(TextValue)=>{
        this.setState({TextValue})
        console.log(this.state.TextValue);
    }
    _renderItem = ({ item}) => {
        return (
          <ListItem
            coverURL={item.book_image}
            username={item.username}
            subs={item.subs}
          />)

    };
    sendComment=()=>{
        if(this.state.TextValue=='')
        alert('输入为空')
       this.setState({Listzzz:[{rank: 5,username: "GATHERING PREY",subs:this.state.TextValue,date:"2020-1-1"},...this.state.Listzzz]})
       this.setState({TextValue:''})
    }

    render(){
      const video=createRef()
        return (
            <View>
            <ScrollView>
                <View>
                <View style={{flex:1}}>

                <Video
                
                style={styles.video}
                source={require('./pubg.mp4')}
                useNativeControls
                resizeMode="contain"
        
                onPlaybackStatusUpdate={status => this.setState(status)}
            />
              
    </View>
                
                </View>
                     
                    <ExpandableText1/>
                        <View style={{backgroundColor:'#ECE4CE',height:43}}>
                            <View style={{flexDirection:'row',marginTop:7,height:30,backgroundColor:'#fff'}}>
                                <View style={{flexDirection:'row',position:'absolute',left:20}}>
                                    <TouchableOpacity>
                                        <SvgUri svgXmlData={like} width="30" height="30"/>
                                    </TouchableOpacity>
                                    <Text style={{fontSize:15}}>点赞:1111</Text>
                                </View>
                            <View style={{flexDirection:'row',position:'absolute',left:130}}>
                                <TouchableOpacity onPress={this.sendComment}>
                                    <SvgUri svgXmlData={comment} width="30" height="30" style={{bottom:5}}/>
                                </TouchableOpacity >
                                <Text style={{fontSize:15}}>评论:1111</Text>
                            </View>
                        <View style={{flexDirection:'row',position:'absolute',right:20}}>
                            <TouchableOpacity>
                            <SvgUri svgXmlData={trans} width="30" height="30"/>
                            </TouchableOpacity>
                            <Text style={{fontSize:15}}>收藏:1111</Text>
                        </View>
                        </View>  
                    </View> 
                        <View>
                            <View style={{borderBottomWidth:.2,borderBottomColor:'gray',flexDirection:'row'}}>
                            <Text style={{marginTop:10,marginLeft:15,marginBottom:10,fontSize:20}}>评论</Text>
                            <TextInput style={{width:200,height:40,borderWidth:2,borderRadius:10,fontSize:15,top:4,left:20}} onChangeText={this.setTextValue} value={this.state.TextValue}/>
                            <TouchableOpacity style={{backgroundColor:'skyblue',justifyContent:'center',alignItems:'center',height:30,borderRadius:20,position:'absolute',top:10,right:10}}
                              onPress={this.sendComment}
                            >
                                            
                              <Text>发表评论</Text>
                            </TouchableOpacity>
                            </View>
                            <View>
                            <FlatList
                             data={this.state.Listzzz} renderItem={this._renderItem}/></View>
                                    
                    </View>
                            
                    </ScrollView>
                    <View>
                            <TextInput placeholder='111111111111111' style={{width:1000,height:1000}}/>
                    </View>
            </View>

        )
    }
}
var styles = StyleSheet.create({
    myVideo:{
        width: 340,
        height: 240
    },
    playBtn:{
        width: 50,
        height: 50,
        backgroundColor:'#fff',
        borderRadius: 50,
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: -25,
        marginTop:-25,
        zIndex:999
    },
    sliderBox:{
        flex:0,
        flexDirection:'row',
        alignItems:'center'
    },
    expandableText:{
        backgroundColor:'#fff'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
      video: {
        alignSelf: 'center',
        width: 320,
        height: 300,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
  });