import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top'

class Index extends Component {
    render() {
        return (
            <View>
                <Top icon1='arrow-back' title="意见反馈" />
                <TextInput style={{margin:pxToDp(20), height:pxToDp(200),borderRadius:pxToDp(20),backgroundColor:'lightgrey',textAlign:'center'}} placeholder="留下你宝贵的意见或建议..."/>
            </View>
        );
    }
}
export default Index;