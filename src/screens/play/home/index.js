import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { NavigationContext } from "@react-navigation/native";
import Top from '@components/common/top'
import { pxToDp } from '@utils/styleKits';
import Ionicons from 'react-native-vector-icons/Ionicons';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View >
                <Top title="越吟" />
                <ScrollView>
                    {/*戏服体验馆 */}
                    <View>
                        <TouchableOpacity onPress={() => this.context.navigate("Change")}>
                        <ImageBackground style={{ height: pxToDp(170), width: pxToDp(355), margin: pxToDp(10) }} source={require('../../../res/27.jpg')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: pxToDp(80) }}>
                                <Image style={{ height: pxToDp(60), width: pxToDp(60), borderRadius: pxToDp(30) }} source={require('../../../res/performer/1.jpg')} />
                                <Image style={{ height: pxToDp(60), width: pxToDp(60), borderRadius: pxToDp(30) }} source={require('../../../res/performer/2.jpg')} />
                                <Image style={{ height: pxToDp(60), width: pxToDp(60), borderRadius: pxToDp(30) }} source={require('../../../res/performer/3.jpg')} />
                                <Image style={{ height: pxToDp(60), width: pxToDp(60), borderRadius: pxToDp(30) }} source={require('../../../res/performer/4.jpg')} />
                            </View>
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: pxToDp(30), marginRight: pxToDp(30) }}>
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons name="today-sharp" size={28} color="grey" />
                            <Text>每日签到</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons name="layers-outline" size={28} color="grey" />
                            <Text>剧本库</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons name="md-logo-octocat" size={28} color="grey" />
                            <Text>教程</Text>
                        </View>
                    </View>
                    {/*单人练唱 */}
                    <View>
                        <Text style={{ fontSize: pxToDp(23), margin: pxToDp(10) }}>单人练唱</Text>
                        <TouchableOpacity onPress={() => this.context.navigate("Study")}>
                        <Image style={{ height: pxToDp(130), width: pxToDp(350), marginLeft: pxToDp(15) }} source={require('../../../res/26.jpg')} />
                        </TouchableOpacity>
                    </View>
                    {/*双人剧本 */}
                    <View>
                        <Text style={{ fontSize: pxToDp(23), margin: pxToDp(10) }}>双人剧本</Text>
                        <View style={{ flexDirection: 'row', marginLeft: pxToDp(10) }}>
                            <Image style={{ height: pxToDp(180), width: pxToDp(180), borderRadius: pxToDp(10) }} source={require('../../../res/23.jpg')} />
                            <View style={{ marginLeft: pxToDp(10) }}>
                                <Image style={{ height: pxToDp(85), width: pxToDp(165), borderRadius: pxToDp(10) }} source={require('../../../res/24.jpg')} />
                                <Image style={{ height: pxToDp(85), width: pxToDp(165), borderRadius: pxToDp(10), marginTop: pxToDp(10) }} source={require('../../../res/25.jpg')} />
                            </View>
                        </View>
                    </View>
                    {/*剧本推荐 */}
                    <View>
                        <Text style={{ fontSize: pxToDp(23), margin: pxToDp(10) }}>剧本推荐</Text>
                        <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: pxToDp(0.5), margin: pxToDp(10), height: pxToDp(130) }}>
                            <Image style={{ height: pxToDp(120), width: pxToDp(120), borderRadius: pxToDp(10) }} source={require('../../../res/play/1.jpg')} />
                            <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>追鱼 书馆</Text>
                                <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(15) }}>我张珍远道来投亲</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: pxToDp(0.5), margin: pxToDp(10), height: pxToDp(130) }}>
                            <Image style={{ height: pxToDp(120), width: pxToDp(120), borderRadius: pxToDp(10) }} source={require('../../../res/play/2.jpg')} />
                            <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>周仁哭坟</Text>
                                <Text style={{ fontSize: pxToDp(14), marginTop: pxToDp(15) }}>冷冷雨飕飕风</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: pxToDp(0.5), margin: pxToDp(10), height: pxToDp(130) }}>
                            <Image style={{ height: pxToDp(120), width: pxToDp(120), borderRadius: pxToDp(10) }} source={require('../../../res/play/3.jpg')} />
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