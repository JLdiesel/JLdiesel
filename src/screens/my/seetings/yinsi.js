import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Switch } from 'react-native-elements';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top'
class Index extends Component {
    render() {
        return (
            <View>
                <Top icon1='arrow-back' title="隐私设置" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: pxToDp(15) }}>
                    <Text style={{ fontSize: pxToDp(20) }}>公开我的关注</Text>
                    <Switch value={true} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: pxToDp(15) }}>
                    <Text style={{ fontSize: pxToDp(20) }}>公开我的粉丝</Text>
                    <Switch value={true} />
                </View>
            </View>
        );
    }
}
export default Index;