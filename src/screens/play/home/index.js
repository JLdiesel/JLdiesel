import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { NavigationContext } from "@react-navigation/native";
import Top from '@components/common/top'
import { pxToDp } from '@utils/styleKits';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Model from '@components/common/pop';


class Index extends Component {
    state = {
        arr: [{ uriFace: 'https://uploadfile.huiyi8.com/2017/0408/20170408024019384.jpg', id: 1, name1: '创建公开房间', name2: '创建私人房间', teaname: '创建房间' },
        { uriFace: 'https://tse1-mm.cn.bing.net/th/id/R-C.de0043b7a1faf51c27853b88491afe52?rik=GyaQsnc%2bKpIJYA&riu=http%3a%2f%2f2d.zol-img.com.cn%2fproduct%2f68_940x705%2f905%2fcejzRDmJlDim2.jpg&ehk=%2b6RuYv4vbBDuJ0l5jbhhYobdEX2fGGGlCKvV5AF6qBw%3d&risl=&pid=ImgRaw', id: 2, name1: '热门剧本', name2: '最新剧本', teaname: '快速匹配' },
        { uriFace: 'https://bpic.588ku.com/back_origin_min_pic/19/04/12/0babf93d5bfa2099ef03cec7fe344efc.jpg!/fw/750/quality/99/unsharp/true/compress/true', id: 3, name1: '', name2: '加入房间', teaname: '查找房间' }]
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View >
                <Top title="越吟" />
                <ScrollView style={{ marginBottom: pxToDp(60) }}>
                    {/*戏服体验馆 */}
                    <View style={{ borderRadius: pxToDp(10) }}>
                        <TouchableOpacity onPress={() => this.context.navigate("Change")}>
                            <View style={{ borderRadius: pxToDp(10), height: pxToDp(170), width: pxToDp(355), borderRadius: pxToDp(10), margin: pxToDp(10), backgroundColor: '#A7BAC4' }}>
                                <Text style={{fontSize:pxToDp(25),marginTop:pxToDp(20),alignSelf:'center'}}>戏服体验馆</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: pxToDp(30) }}>
                                    <Image style={{ height: pxToDp(60), width: pxToDp(60), borderRadius: pxToDp(30) }} source={require('../../../res/performer/1.jpg')} />
                                    <Image style={{ height: pxToDp(60), width: pxToDp(60), borderRadius: pxToDp(30) }} source={require('../../../res/performer/2.jpg')} />
                                    <Image style={{ height: pxToDp(60), width: pxToDp(60), borderRadius: pxToDp(30) }} source={require('../../../res/performer/3.jpg')} />
                                    <Image style={{ height: pxToDp(60), width: pxToDp(60), borderRadius: pxToDp(30) }} source={require('../../../res/performer/4.jpg')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: pxToDp(30), marginRight: pxToDp(30) }}>
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons name="today-sharp" size={28} color="grey" />
                            <Text>签到</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons name="layers-outline" size={28} color="grey" />
                            <Text>剧本</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons name="md-logo-octocat" size={28} color="grey" />
                            <Text>教程</Text>
                        </View>
                    </View>
                    {/*单人练唱 */}
                    <View style={{ marginLeft: pxToDp(10), marginRight: pxToDp(10) }}>
                        <Text style={{ fontSize: pxToDp(18), margin: pxToDp(10), marginLeft: pxToDp(0) }}>单人练唱</Text>
                        <TouchableOpacity onPress={() => this.context.navigate("Study")}>
                            <Image style={{ height: pxToDp(130), width: pxToDp(355), borderRadius: pxToDp(10) }} source={require('../../../res/26.jpg')} />
                        </TouchableOpacity>
                    </View>
                    {/*双人剧本 */}
                    <View style={{ marginRight: pxToDp(10) }}>
                        <Text style={{ fontSize: pxToDp(18), margin: pxToDp(10) }}>双人剧本</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {this.state.arr.map((item) =>
                                <Model key={item.id} item={item} />
                            )}
                        </View>
                    </View>
                    {/*剧本推荐 */}
                    <View>
                        <Text style={{ fontSize: pxToDp(18), margin: pxToDp(10) }}>剧本推荐</Text>
                        <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: pxToDp(0.5), margin: pxToDp(10), height: pxToDp(110) }}>
                            <TouchableOpacity onPress={() => this.context.navigate("Drama")}>
                                <Image style={{ height: pxToDp(100), width: pxToDp(100), borderRadius: pxToDp(10) }} source={require('../../../res/play/1.jpg')} />
                            </TouchableOpacity>
                            <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>追鱼 书馆</Text>
                                <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(15) }}>我张珍远道来投亲</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: pxToDp(0.5), margin: pxToDp(10), height: pxToDp(110) }}>
                            <Image style={{ height: pxToDp(100), width: pxToDp(100), borderRadius: pxToDp(10) }} source={require('../../../res/play/2.jpg')} />
                            <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>周仁哭坟</Text>
                                <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(15) }}>冷冷雨飕飕风</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: pxToDp(0.5), margin: pxToDp(10), height: pxToDp(110) }}>
                            <Image style={{ height: pxToDp(100), width: pxToDp(100), borderRadius: pxToDp(10) }} source={require('../../../res/play/3.jpg')} />
                            <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>梁祝 十八相送</Text>
                                <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(15) }}>书房门前一枝梅</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
export default Index;