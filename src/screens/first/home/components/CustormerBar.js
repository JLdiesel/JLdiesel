import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { pxToDp } from "../../../../utils/styleKits";
class Index extends Component {
    render() {
        //console.log(this.props);
        const { goToPage, tabs, activeTab } = this.props;
        //goToPag 函数 负责跳转页面
        //tabs 标题数组
        //activeTab 当前激活索引
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {tabs.map((v, i) => <TouchableOpacity
                    key={i}
                    onPress={() => goToPage(i)}
                    style={{
                        justifyContent: 'center',
                        borderBottomColor: "#1874CD",
                        borderBottomWidth: activeTab === i ? pxToDp(3) : 0
                    }}
                >
                    <Text
                        style={{ color: activeTab === i ? "black" : "grey", fontSize: activeTab === i ? pxToDp(20) : pxToDp(15) }}
                    >{v}</Text>
                </TouchableOpacity>)}
            </View>
        );
    }
}
export default Index;