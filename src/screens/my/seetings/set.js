import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import List from '../../../component/common/list';
import Top from '../../../component/common/top';
import { NavigationContext } from "@react-navigation/native";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{backgroundColor:"#e2f4fe",flex:1}}>
                <Top icon1='arrow-back' title="设置" />
                <TouchableOpacity onPress={() => this.context.navigate("Tuisong")}>
                    <List title="消息与推送通知" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.context.navigate("Yinsi")}>
                    <List title="隐私设置" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.context.navigate("Yijian")}>
                    <List title="意见反馈" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.context.navigate("Women")}>
                    <List title="关于我们" />
                </TouchableOpacity>
            </View>
        );
    }
}
export default Index;