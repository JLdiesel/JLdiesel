import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Top from '@components/common/top';
import { CheckBox, Button } from 'react-native-elements'
import { pxToDp } from '@utils/styleKits';

class Index extends Component {
    state={
        checked:false
    }
    render() {
        return (
            <View>
                <Top icon1="arrow-back" title="申请直播权限" />
                <Text style={{fontSize:pxToDp(18)}}>请输入相应的文字资料</Text>
                <TextInput style={{ margin: pxToDp(20), height: pxToDp(200), borderRadius: pxToDp(20), backgroundColor: '#F5F5F5' }} placeholder="申请成为主播的原因" textAlign='center' />
                <CheckBox
                    center
                    title='我已阅读并接受主播协议'
                    checked={this.state.checked}
                />
                <Button
                    title="提交申请"
                />
            </View>
        );
    }
}
export default Index;