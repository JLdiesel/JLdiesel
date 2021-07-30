import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';
import Top from '../../../../component/common/top'
class Index extends Component {
    render() {
        const { goToPage, tabs, activeTab } = this.props;
        return (
            <View style={{backgroundColor:'#E2F4FE'}}>
                <Top icon1="arrow-back" />
                 <View style={{ marginLeft: pxToDp(20), marginRight: pxToDp(20) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image style={{ height: pxToDp(240), width: pxToDp(150), marginTop: pxToDp(20) }} source={require('../../../../res/performer/11.jpg')} />
                    <View style={{width:pxToDp(180),alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:pxToDp(20),fontWeight:'bold'}}>方亚芬 上海越剧院</Text>
                        <Text style={{fontSize:pxToDp(15)}}>       方亚芬，女，1965年2月生。浙江宁波人。袁派花旦，上海越剧院一团团长。2007年凭《玉卿嫂》获得第二十三届梅花奖。</Text>
                    </View>
                </View>
            </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: pxToDp(20) }}>
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
            </View>
        );
    }
}
export default Index;