import React, { Component } from "react";
import { View, Text, Image,TouchableOpacity,ScrollView } from "react-native";
import Top from '../../../component/common/top';
import {pxToDp} from '@utils//styleKits'
class Index extends Component {
    render() {
        return (
            <ScrollView>
                <Top icon1="arrow-back" title="剧本" />
                <View>
                    <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: pxToDp(0.5), margin: pxToDp(10), height: pxToDp(110) }}>
                        <TouchableOpacity onPress={() => this.context.navigate("Drama")}>
                            <Image style={{ height: pxToDp(100), width: pxToDp(100), borderRadius: pxToDp(10) }} source={require('../../../res/play/1.jpg')} />
                        </TouchableOpacity>
                        <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>追鱼</Text>
                            <Text style={{ fontSize: pxToDp(14) }} numberOfLines={4}>且把真身暂隐藏{"\n"}你是谁家窈窕娘{"\n"}我张珍远道来投亲{"\n"}夫妻携手往前行{"\n"}有一书生名张珍{"\n"}张郎听我从实讲{"\n"}求娘娘发慈心</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: pxToDp(0.5), margin: pxToDp(10), height: pxToDp(110) }}>
                        <Image style={{ height: pxToDp(100), width: pxToDp(100), borderRadius: pxToDp(10) }} source={require('../../../res/play/2.jpg')} />
                        <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>周仁哭坟</Text>
                            <Text style={{ fontSize: pxToDp(14) }}>冷冷雨飕飕风</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: pxToDp(0.5), margin: pxToDp(10), height: pxToDp(110) }}>
                        <Image style={{ height: pxToDp(100), width: pxToDp(100), borderRadius: pxToDp(10) }} source={require('../../../res/play/3.jpg')} />
                        <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>梁山伯与祝英台</Text>
                            <Text style={{ fontSize: pxToDp(14)}} numberOfLines={4}>十八相送{"\n"}下山访友{"\n"}楼台相会{"\n"}梁山伯·回书{"\n"}英台哭灵{"\n"}读祭文</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: pxToDp(0.5), margin: pxToDp(10), height: pxToDp(110) }}>
                        <Image style={{ height: pxToDp(100), width: pxToDp(100), borderRadius: pxToDp(10) }} source={require('../../../res/play/5.jpg')} />
                        <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>五女拜寿</Text>
                            <Text style={{ fontSize: pxToDp(14)}} numberOfLines={4}>请姑娘放心喝下这暖肚汤{"\n"}哪个不是爹娘养{"\n"}小婿我登门虽把相国拜</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: pxToDp(0.5), margin: pxToDp(10), height: pxToDp(110) }}>
                        <Image style={{ height: pxToDp(100), width: pxToDp(100), borderRadius: pxToDp(10) }} source={require('../../../res/article/2.jpg')} />
                        <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>红楼梦</Text>
                            <Text style={{ fontSize: pxToDp(14)}} numberOfLines={4}>金玉良缘{"\n"}洞房{"\n"}焚稿{"\n"}共读西厢{"\n"}葬花</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
export default Index;