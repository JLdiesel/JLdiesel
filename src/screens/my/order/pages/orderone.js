import React, { PureComponent } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { pxToDp } from "../../../../utils/styleKits";

class Index extends PureComponent {
    render() {
        return (
            <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#E2F4FE',flex:1}}>
                <ScrollView>
                    <View style={{ height: pxToDp(230), marginLeft: pxToDp(20), marginRight: pxToDp(20), borderBottomWidth: pxToDp(1), borderBottomColor: 'grey' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: pxToDp(20) }}>
                            <Text style={{ fontSize: pxToDp(17) }}>百越庭售卖店</Text>
                            <Text style={{ fontSize: pxToDp(13) }}>交易成功</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: pxToDp(10) }}>
                            <Image style={{ height: pxToDp(110), width: pxToDp(110), borderRadius: pxToDp(10) }} source={require('../../../../res/18.jpg')} />
                            <Text style={{ fontSize: pxToDp(15), marginLeft: pxToDp(10) }}>戏服儿童小生衣</Text>
                            <Text style={{ marginLeft: pxToDp(65), fontSize: pxToDp(15) }}>￥128</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end',right:pxToDp(85) }}>
                            <Text style={{ fontSize: pxToDp(15) }}>总价￥128 </Text>
                            <Text style={{ fontSize: pxToDp(15), fontWeight: 'bold' }}> 实付款￥128</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: pxToDp(10) }}>
                            <TouchableOpacity style={{ borderColor: 'grey', borderWidth: pxToDp(1), height: pxToDp(23), width: pxToDp(70), borderRadius: pxToDp(10), alignItems: 'center', justifyContent: 'center', marginRight: pxToDp(10) }}>
                                <Text style={{ fontSize: pxToDp(15) }}>删除订单</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderColor: 'grey', borderWidth: pxToDp(1), height: pxToDp(23), width: pxToDp(70), borderRadius: pxToDp(10), alignItems: 'center', justifyContent: 'center', marginRight: pxToDp(10) }}>
                                <Text style={{ fontSize: pxToDp(15) }}>追加评价</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderColor: 'grey', borderWidth: pxToDp(1), height: pxToDp(23), width: pxToDp(70), borderRadius: pxToDp(10), alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: pxToDp(15) }}>查看物流</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: pxToDp(230), marginLeft: pxToDp(20), marginRight: pxToDp(20), borderBottomWidth: pxToDp(1), borderBottomColor: 'grey' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: pxToDp(20) }}>
                            <Text style={{ fontSize: pxToDp(17) }}>百越庭售卖店</Text>
                            <Text style={{ fontSize: pxToDp(13) }}>交易成功</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: pxToDp(10) }}>
                            <Image style={{ height: pxToDp(110), width: pxToDp(110), borderRadius: pxToDp(10) }} source={require('../../../../res/19.jpg')} />
                            <Text style={{ fontSize: pxToDp(15), marginLeft: pxToDp(10) }}>越剧周边 扇子</Text>
                            <Text style={{ marginLeft: pxToDp(65), fontSize: pxToDp(15) }}>￥45</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end',right:pxToDp(85) }}>
                            <Text style={{ fontSize: pxToDp(15) }}>总价￥45 </Text>
                            <Text style={{ fontSize: pxToDp(15), fontWeight: 'bold' }}> 实付款￥45</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: pxToDp(10) }}>
                            <TouchableOpacity style={{ borderColor: 'grey', borderWidth: pxToDp(1), height: pxToDp(23), width: pxToDp(70), borderRadius: pxToDp(10), alignItems: 'center', justifyContent: 'center', marginRight: pxToDp(10) }}>
                                <Text style={{ fontSize: pxToDp(15) }}>删除订单</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderColor: 'grey', borderWidth: pxToDp(1), height: pxToDp(23), width: pxToDp(70), borderRadius: pxToDp(10), alignItems: 'center', justifyContent: 'center', marginRight: pxToDp(10) }}>
                                <Text style={{ fontSize: pxToDp(15) }}>追加评价</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderColor: 'grey', borderWidth: pxToDp(1), height: pxToDp(23), width: pxToDp(70), borderRadius: pxToDp(10), alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: pxToDp(15) }}>查看物流</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: pxToDp(230), marginLeft: pxToDp(20), marginRight: pxToDp(20), borderBottomWidth: pxToDp(1), borderBottomColor: 'grey' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: pxToDp(20) }}>
                            <Text style={{ fontSize: pxToDp(17) }}>百越庭售卖店</Text>
                            <Text style={{ fontSize: pxToDp(13) }}>交易成功</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: pxToDp(10) }}>
                            <Image style={{ height: pxToDp(110), width: pxToDp(110), borderRadius: pxToDp(10) }} source={require('../../../../res/11.jpg')} />
                            <Text style={{ fontSize: pxToDp(15), marginLeft: pxToDp(10) }}>《梁祝》演出门票-杭州大剧院</Text>
                            <Text style={{ marginLeft: pxToDp(65), fontSize: pxToDp(15) }}>￥399</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' ,right:pxToDp(85)}}>
                            <Text style={{ fontSize: pxToDp(15) }}>总价￥399 </Text>
                            <Text style={{ fontSize: pxToDp(15), fontWeight: 'bold' }}> 实付款￥399</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: pxToDp(10) }}>
                            <TouchableOpacity style={{ borderColor: 'grey', borderWidth: pxToDp(1), height: pxToDp(23), width: pxToDp(70), borderRadius: pxToDp(10), alignItems: 'center', justifyContent: 'center', marginRight: pxToDp(10) }}>
                                <Text style={{ fontSize: pxToDp(15) }}>删除订单</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderColor: 'grey', borderWidth: pxToDp(1), height: pxToDp(23), width: pxToDp(70), borderRadius: pxToDp(10), alignItems: 'center', justifyContent: 'center', marginRight: pxToDp(10) }}>
                                <Text style={{ fontSize: pxToDp(15) }}>追加评价</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderColor: 'grey', borderWidth: pxToDp(1), height: pxToDp(23), width: pxToDp(70), borderRadius: pxToDp(10), alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: pxToDp(15) }}>查看物流</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default Index;