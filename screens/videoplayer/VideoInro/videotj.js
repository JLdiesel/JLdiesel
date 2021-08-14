import React, { PureComponent } from 'react';
<<<<<<< HEAD
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  Image,
  textarea,
  Button,
  TextInput
} from 'react-native';
=======
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Image, textarea, Button, TextInput, } from 'react-native';
>>>>>>> 231f8c2b5ea169bec901ce33d8777af401dc7a35
import { pxToDp } from '@utils/styleKits';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
<<<<<<< HEAD
import Vtitle from './videotitle';
class index extends PureComponent {
  state = {};
  render() {
    const { videoJS } = this.state;
    return (
      <ScrollView>
        <View style={{ marginVertical: 2, padding: 10 }}>
          <View>
            <View>
              <Text style={{ fontSize: pxToDp(22), fontWeight: 'bold' }}>
                为你推荐
              </Text>
            </View>
            {/* <TouchableOpacity onPress={() => { this.switchVideo("http://124.129.157.208:8810/SD/zhishidian/grade_8_1/wuli_shu/01.mp4", 0) }}> */}
            {this.props.tjvideo.map((item, id) => (
              <TouchableOpacity key={id}>
                <View
                  style={{
                    width: '100%',
                    height: pxToDp(110),
                    borderRadius: pxToDp(10),
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: 'gray'
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: pxToDp(5),
                      marginTop: pxToDp(5)
                    }}
                  >
                    <Image
                      style={{
                        width: '40%',
                        height: pxToDp(90),
                        borderRadius: pxToDp(10)
                      }}
                      source={{ uri: item.imguri }}
                    ></Image>
                    <View
                      style={{
                        width: '60%',
                        height: pxToDp(90),
                        padding: pxToDp(8)
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}
                      >
                        {item.imgtitle}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{
                          marginTop: pxToDp(5),
                          marginBottom: pxToDp(5)
                        }}
                      >
                        {item.intr}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          flex: 1
                        }}
                      >
                        <Icon name="control-play" size={12} color={'black'} />
                        <Text>{item.playnum}</Text>
                      </View>
=======
import Vtitle from './videotitle'
class index extends PureComponent {
    state={
       
    }
    render() {
        const{videoJS}=this.state
        return (
            <ScrollView>
                <View style={{ marginVertical: 2, padding: 10, }}>
                        <View>
                            <View><Text style={{ fontSize: pxToDp(22), fontWeight: "bold" }}>为你推荐</Text></View>
                            {/* <TouchableOpacity onPress={() => { this.switchVideo("http://124.129.157.208:8810/SD/zhishidian/grade_8_1/wuli_shu/01.mp4", 0) }}> */}
                            {this.props.tjvideo.map((item,id)=>(
                          
                            <TouchableOpacity key={id}>
                                <View style={{ width: "100%", height: pxToDp(110), borderRadius: pxToDp(10), justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'gray' }} >
                                    <View style={{ flexDirection: 'row', marginBottom: pxToDp(5), marginTop: pxToDp(5) }}>
                                        <Image style={{ width: '40%', height: pxToDp(90), borderRadius: pxToDp(10) }} source={{uri:item.imguri}}></Image>
                                        <View style={{ width: '60%', height: pxToDp(90), padding: pxToDp(8), }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>{item.imgtitle}</Text>
                                            <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>{item.intr}</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                                <Icon name="control-play" size={12} color={'black'} />
                                                <Text>{item.playnum}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity> ) )}
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: pxToDp(16) }}>
                            <Text style={{ fontSize: pxToDp(16) }}>暂无更多</Text>
                        </View>
>>>>>>> 231f8c2b5ea169bec901ce33d8777af401dc7a35
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: pxToDp(16)
            }}
          >
            <Text style={{ fontSize: pxToDp(16) }}>暂无更多</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default index;
