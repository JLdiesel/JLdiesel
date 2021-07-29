import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';
import Ionicons from 'react-native-vector-icons/Ionicons';
class Index extends Component {
    render() {
        return (
            <View>
                <Top icon1='arrow-back' title="个人资料" />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: pxToDp(15) }} >
                    <Text style={{ fontSize: pxToDp(20) }}>头像</Text>
                    <Ionicons name="chevron-forward" size={30} color="grey" />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: pxToDp(15) }} >
                    <Text style={{ fontSize: pxToDp(20) }}>昵称</Text>
                    <Text style={{ fontSize: pxToDp(18) }}>百越庭</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: pxToDp(15) }} >
                    <Text style={{ fontSize: pxToDp(20) }}>性别</Text>
                    <Ionicons name="chevron-forward" size={30} color="grey" />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: pxToDp(15) }} >
                    <Text style={{ fontSize: pxToDp(20) }}>生日</Text>
                    <Ionicons name="chevron-forward" size={30} color="grey" />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: pxToDp(15) }} >
                    <Text style={{ fontSize: pxToDp(20) }}>所在地</Text>
                    <Ionicons name="chevron-forward" size={30} color="grey" />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: pxToDp(15) }} >
                    <Text style={{ fontSize: pxToDp(20) }}>个性签名</Text>
                    <TextInput placeholder="未填写" />
                </View>
            </View>
        );
    }
}
export default Index;