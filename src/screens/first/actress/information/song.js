import React, { Component } from "react";
import { View, Text, Image,ScrollView } from "react-native";
import { pxToDp } from "../../../../utils/styleKits";

class Index extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#E2F4FE'}}>
                <View style={{ margin: pxToDp(10), flexDirection: 'row', borderBottomWidth: pxToDp(1), borderBottomColor: 'grey', height: pxToDp(90) }}>
                    <Image style={{ height: pxToDp(80), width: pxToDp(80), borderRadius: pxToDp(40) }} source={require('../../../../res/performer/16.jpg')} />
                    <View style={{ marginLeft: pxToDp(10), marginTop: pxToDp(8) }}>
                        <Text style={{ fontSize: pxToDp(18) }}>婆婆说话你可听到</Text>
                        <Text style={{ fontSize: pxToDp(18), marginTop: pxToDp(10) }}>方亚芬</Text>
                    </View>
                </View>
                <View style={{ margin: pxToDp(10), flexDirection: 'row', borderBottomWidth: pxToDp(1), borderBottomColor: 'grey', height: pxToDp(90) }}>
                    <Image style={{ height: pxToDp(80), width: pxToDp(80), borderRadius: pxToDp(40) }} source={require('../../../../res/performer/17.jpg')} />
                    <View style={{ marginLeft: pxToDp(10), marginTop: pxToDp(8) }}>
                        <Text style={{ fontSize: pxToDp(18) }}>托坠</Text>
                        <Text style={{ fontSize: pxToDp(18), marginTop: pxToDp(10) }}>方亚芬</Text>
                    </View>
                </View>
                <View style={{ margin: pxToDp(10), flexDirection: 'row', borderBottomWidth: pxToDp(1), borderBottomColor: 'grey', height: pxToDp(90) }}>
                    <Image style={{ height: pxToDp(80), width: pxToDp(80), borderRadius: pxToDp(40) }} source={require('../../../../res/performer/15.jpg')} />
                    <View style={{ marginLeft: pxToDp(10), marginTop: pxToDp(8) }}>
                        <Text style={{ fontSize: pxToDp(18) }}>云烟烟烟云笼绣房</Text>
                        <Text style={{ fontSize: pxToDp(18), marginTop: pxToDp(10) }}>方亚芬</Text>
                    </View>
                </View>
            </ScrollView>

        );
    }
}
export default Index;