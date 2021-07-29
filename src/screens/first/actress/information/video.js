import React, { Component } from "react";
import { View, Text,Image,ScrollView } from "react-native";
import { pxToDp } from "../../../../utils/styleKits";

class Index extends Component {
    render() {
        return (
            <ScrollView>
            <View style={{margin:pxToDp(10)}}>
                <Image style={{height:pxToDp(170),width:pxToDp(355),borderRadius:pxToDp(10)}} source={require('../../../../res/performer/12.jpg')} />
                <Text style={{fontSize:pxToDp(18)}}>名家名段：越剧《山河恋·送信》现在我和你口信念-表演：王君安 方亚芬</Text>
            </View>
            <View style={{margin:pxToDp(10)}}>
                <Image style={{height:pxToDp(170),width:pxToDp(355),borderRadius:pxToDp(10)}} source={require('../../../../res/performer/13.jpg')} />
                <Text style={{fontSize:pxToDp(18)}}>越剧《白蛇传·断桥》-表演：方亚芬 张宇峰</Text>
            </View>
            </ScrollView>
        );
    }
}
export default Index;