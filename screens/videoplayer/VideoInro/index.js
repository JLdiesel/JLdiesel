import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Image, textarea, Button, TextInput, } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
class index extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ marginVertical: 2, padding: 10, }}>
                    <View style={{ marginVertical: 2, padding: 10, }}>
                        <View>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>孟丽君-见书房寂寂无声好清净</Text>
                            <Text style={{ fontSize: pxToDp(14), color: 'gray' }}>1687播放&emsp;321喜欢</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: pxToDp(16), marginBottom: pxToDp(16) }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icon1 name="thumb-up" size={26} color={'gray'} />
                                <Text>2.1w</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icon1 name="grade" size={32} color={'gray'} />
                                <Text>2.1w</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icon1 name="get-app" size={32} color={'gray'} />
                                <Text>缓存</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icon1 name="share" size={30} color={'gray'} />
                                <Text>分享</Text>
                            </View>
                        </View>
                        <View>
                            <View><Text style={{ fontSize: pxToDp(22), fontWeight: "bold" }}>为你推荐</Text></View>
                            {/* <TouchableOpacity onPress={() => { this.switchVideo("http://124.129.157.208:8810/SD/zhishidian/grade_8_1/wuli_shu/01.mp4", 0) }}> */}
                            <TouchableOpacity>
                                <View style={{ width: "100%", height: pxToDp(110), borderRadius: pxToDp(10), justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'gray' }} >
                                    <View style={{ flexDirection: 'row', marginBottom: pxToDp(5), marginTop: pxToDp(5) }}>
                                        <Image style={{ width: '40%', height: pxToDp(90), borderRadius: pxToDp(10) }} source={require("../../../src/res/12.jpg")}></Image>
                                        <View style={{ width: '60%', height: pxToDp(90), padding: pxToDp(8), }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>许大家境虽不好</Text>
                                            <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>《王老虎抢亲》，越剧传统剧目。</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                                <Icon name="control-play" size={12} color={'black'} />
                                                <Text>96.7万</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ width: "100%", height: pxToDp(110), borderRadius: pxToDp(10), justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'gray' }} >
                                    <View style={{ flexDirection: 'row', marginBottom: pxToDp(5), marginTop: pxToDp(5) }}>
                                        <Image style={{ width: '40%', height: pxToDp(90), borderRadius: pxToDp(10) }} source={require("../../../src/res/13.jpg")}></Image>
                                        <View style={{ width: '60%', height: pxToDp(90), padding: pxToDp(8), }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>游园初遇</Text>
                                            <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>官家子弟王景隆与名妓苏三誓偕白首，因金尽被逐，潦倒关王庙。</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                                <Icon name="control-play" size={12} color={'black'} />
                                                <Text>24.7万</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ width: "100%", height: pxToDp(110), borderRadius: pxToDp(10), justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'gray' }} >
                                    <View style={{ flexDirection: 'row', marginBottom: pxToDp(5), marginTop: pxToDp(5) }}>
                                        <Image style={{ width: '40%', height: pxToDp(90), borderRadius: pxToDp(10) }} source={require("../../../src/res/14.jpg")}></Image>
                                        <View style={{ width: '60%', height: pxToDp(90), padding: pxToDp(8), }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>笙箫管笛耳边绕</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                                <Icon name="control-play" size={12} color={'black'} />
                                                <Text>24.7万</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ width: "100%", height: pxToDp(110), borderRadius: pxToDp(10), justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'gray' }} >
                                    <View style={{ flexDirection: 'row', marginBottom: pxToDp(5), marginTop: pxToDp(5) }}>
                                        <Image style={{ width: '40%', height: pxToDp(90), borderRadius: pxToDp(10) }} source={require("../../../src/res/15.jpg")}></Image>
                                        <View style={{ width: '60%', height: pxToDp(90), padding: pxToDp(8), }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>观灯</Text>
                                            <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>《追鱼》·杨婷娜-盛舒扬</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                                <Icon name="control-play" size={12} color={'black'} />
                                                <Text>24.7万</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: pxToDp(16) }}>
                            <Text style={{ fontSize: pxToDp(16) }}>暂无更多</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

export default index;