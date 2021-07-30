import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { pxToDp } from "../../../../utils/styleKits";

class Index extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#E2F4FE'}}>
                <View style={{margin:pxToDp(10),flexDirection:'row',borderBottomColor:'grey',borderBottomWidth:pxToDp(1),height:pxToDp(110)}}>
                    <View style={{ width: pxToDp(220) }}>
                        <Text style={{ fontSize: pxToDp(17),marginTop:pxToDp(5) }}>全国越剧汇演之上海越剧院《双珠凤》，方亚芬徐标新主演</Text>
                    </View>
                    <Image style={{width:pxToDp(135),height:pxToDp(90)}} source={require('../../../../res/15.jpg')} />
                </View>
                <View style={{margin:pxToDp(10),flexDirection:'row',borderBottomColor:'grey',borderBottomWidth:pxToDp(1),height:pxToDp(110)}}>
                    <View style={{ width: pxToDp(220) }}>
                        <Text style={{ fontSize: pxToDp(17),marginTop:pxToDp(5) }}>方亚芬将领衔上海越剧院全本大戏《红楼梦》《梁祝》来京演出</Text>
                    </View>
                    <Image style={{width:pxToDp(135),height:pxToDp(90)}} source={require('../../../../res/11.jpg')} />
                </View>
                <View style={{margin:pxToDp(10),flexDirection:'row',borderBottomColor:'grey',borderBottomWidth:pxToDp(1),height:pxToDp(110)}}>
                    <View style={{ width: pxToDp(220) }}>
                        <Text style={{ fontSize: pxToDp(17),marginTop:pxToDp(5) }}>越剧《早春二月》下周全新亮相，许杰方亚芬借排练带新人</Text>
                    </View>
                    <Image style={{width:pxToDp(135),height:pxToDp(90)}} source={require('../../../../res/14.jpg')} />
                </View>
            </ScrollView>
        );
    }
}
export default Index;