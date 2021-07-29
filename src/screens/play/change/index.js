import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits'

class Index extends Component {
    render() {
        return (
            <View>
                <Top icon1="arrow-back" title="戏服体验馆" />
                <View style={{ alignItems: 'center', alignSelf: 'center', marginTop: pxToDp(30) }}>
                    <Text style={{ fontSize: pxToDp(20) }}>想知道自己穿上戏服是什么样吗？{"\n"}
                        来试试看吧!
                    </Text>
                 <Image style={{height:pxToDp(200),width:pxToDp(200)}} source={require('../../../res/1.jpg')} />
                    <TouchableOpacity style={{ marginTop: pxToDp(20), backgroundColor: '#008080', alignItems: 'center', alignSelf: 'center', height: pxToDp(50), width: pxToDp(200), justifyContent: 'center' }}>
                        <Text style={{ fontSize: pxToDp(25), color: 'white' }}>+导入</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Index;