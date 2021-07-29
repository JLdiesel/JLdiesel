import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { pxToDp } from "@utils/styleKits";
import Top from '@components/common/top';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
                <Top title="戏痴"/>
                <ScrollView
                    refreshControl={<RefreshControl />}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                        <Image style={{ height: pxToDp(60), width: pxToDp(60), borderRadius: pxToDp(30), margin: pxToDp(10) }} source={require('../../../res/4.jpg')}></Image>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '70%' }}>
                            <View>
                                <Text style={{ margin: pxToDp(10), fontSize: pxToDp(20), fontWeight: 'bold' }}>百越庭</Text>

                            </View>
                            <TouchableOpacity onPress={() => this.context.navigate("Setting")}>
                                <Ionicons name="chevron-forward" size={25} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>17</Text>
                            <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>动态</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>99</Text>
                            <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>点赞</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>188</Text>
                            <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>关注</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>49</Text>
                            <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>粉丝</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:pxToDp(20)}}>
                        <View>
                            <Text style={{ fontSize: pxToDp(18), margin: pxToDp(10) }}>我的订单</Text>
                        </View>
                        <View style={{ flexDirection: 'row', fontSize: pxToDp(15), margin: pxToDp(10) }}>
                            <TouchableOpacity onPress={()=>{this.context.navigate('Order')}}>
                            <Text>全部订单</Text>
                            <Ionicons name="chevron-forward" size={17} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: pxToDp(10) }}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>{this.context.navigate('Pay')}}>
                            <Ionicons name="card-outline" size={30} color="#000000" />
                            <Text style={{ fontSize: pxToDp(15) }}>待支付</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}>
                            <Ionicons name="alarm-outline" size={30} color="#000000" />
                            <Text style={{ fontSize: pxToDp(15) }}>待使用</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>{this.context.navigate('Waitcomment')}}>
                            <Ionicons name="chatbox-outline" size={30} color="#000000" />
                            <Text style={{ fontSize: pxToDp(15) }}>待评价</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}>
                            <Ionicons name="refresh-circle-outline" size={30} color="#000000" />
                            <Text style={{ fontSize: pxToDp(15) }}>售后/退款</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: pxToDp(30) }}>
                       
                        <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}><List icon='md-cart-outline' title="商城" /></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}><List icon='md-videocam-outline' title="视频" /></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}><List icon='md-star-outline' title="收藏" /></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}><List icon='cafe-outline' title="话题" /></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}><List icon='md-chatbubble-ellipses-outline' title="评论" /></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}><List icon='time-outline' title="浏览" /></TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        );
    }
}
export default Index;