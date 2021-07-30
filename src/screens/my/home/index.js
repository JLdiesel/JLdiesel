import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { pxToDp } from "@utils/styleKits";
import Top from '@components/common/top';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import List from '@components/common/list';
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
            <View>
                <Top title="戏痴" />
                <ScrollView
                    refreshControl={<RefreshControl />}>
                    <View style={{ borderRadius: pxToDp(10), backgroundColor: 'rgba(255,255,255,0.5)', margin: pxToDp(10) }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.context.navigate("Setting")}>
                                <Image style={{ height: pxToDp(60), width: pxToDp(60), borderRadius: pxToDp(30), margin: pxToDp(10) }} source={require('../../../res/4.jpg')}></Image>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '70%' }}>
                                <View>
                                    <Text style={{ margin: pxToDp(10), fontSize: pxToDp(20), fontWeight: 'bold' }}>百越庭</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { this.context.navigate('Shop') }}>
                                    <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>17</Text>
                                    <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>点赞</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { this.context.navigate('Shop') }}>
                                    <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>99</Text>
                                    <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>收藏</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { this.context.navigate('Shop') }}>
                                    <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>188</Text>
                                    <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>关注</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { this.context.navigate('Shop') }}>
                                    <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>49</Text>
                                    <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>粉丝</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderRadius: pxToDp(10), backgroundColor: 'rgba(255,255,255,0.5)', margin: pxToDp(10) }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: pxToDp(10), marginTop: pxToDp(20) }}>
                            <View>
                                <Text style={{ fontSize: pxToDp(18) }}>我的订单</Text>
                            </View>
                            <TouchableOpacity onPress={() => this.context.navigate("Order")}>
                                <View style={{ flexDirection: 'row', fontSize: pxToDp(15), marginRight: pxToDp(8) }}>
                                    <Text>查看全部订单 </Text>
                                    <Ionicons name="angle-right" size={17} color="#000000" />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: pxToDp(10) }}>
                            <TouchableOpacity onPress={() => this.context.navigate("Order", 1)}>
                                <View style={{ alignItems: 'center' }}>
                                    <Ionicons name="credit-card" size={30} color="#468CD3" />
                                    <Text style={{ fontSize: pxToDp(15), marginTop: pxToDp(8) }}>待支付</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.context.navigate("Order", 2)}>
                                <View style={{ alignItems: 'center' }}>
                                    <Ionicons name="truck" size={30} color="#468CD3" />
                                    <Text style={{ fontSize: pxToDp(15), marginTop: pxToDp(8) }}>待收货</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.context.navigate("Order", 3)}>
                                <View style={{ alignItems: 'center' }}>
                                    <Ionicons name="commenting-o" size={30} color="#468CD3" />
                                    <Text style={{ fontSize: pxToDp(15), marginTop: pxToDp(8) }}>待评价</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.context.navigate("Refund")}>
                                <View style={{ alignItems: 'center' }}>
                                    <Ionicons name="handshake-o" size={30} color="#468CD3" />
                                    <Text style={{ fontSize: pxToDp(15), marginTop: pxToDp(8) }}>售后/退款</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: pxToDp(20) }}>
                        <TouchableOpacity onPress={() => this.context.navigate("Jifenshop")} >
                            <List icon='server-outline' title="积分商城" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.context.navigate("History")} >
                            <List icon='time-outline' title="历史浏览" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.context.navigate("Apply")} >
                            <List icon='videocam-outline' title="直播申请" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.context.navigate("Set")} >
                            <List icon='settings-outline' title="设置" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        );
    }
}
export default Index;