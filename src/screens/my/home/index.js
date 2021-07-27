import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView,RefreshControl } from 'react-native';
import { shezhi, kefu, museum, daifahuo, daifukuan, daipingjia, daishouhuo, xiaoxi, youhuiquan, jifen, gouwuche, shoucang, dizhi, fuwu, zuji } from "../../../assets/fonts/iconSvg"
import SvgUri from "react-native-svg-uri";
import { pxToDp } from "../../../utils/styleKits";


class MyPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <ScrollView 
            refreshControl={<RefreshControl/>}
            contentContainerStyle={{ backgroundColor: 'lightgrey' }}>
                {/*顶部 客服 设置 */}
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                    <SvgUri width="30" height='30' svgXmlData={kefu} />
                    <SvgUri width="30" height='30' svgXmlData={shezhi} />
                </View>
                {/*头像 用户名等 */}
                <View style={{ backgroundColor: 'white', borderRadius: pxToDp(10), marginLeft: pxToDp(5), marginRight: pxToDp(5) }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ margin: pxToDp(10), height: pxToDp(80), width: pxToDp(80), borderRadius: pxToDp(40) }} source={require('../../../assets/4.jpg')}>
                        </Image>
                        <View style={{ marginLeft: pxToDp(10), marginTop: pxToDp(15) }}>
                            <Text style={{ fontSize: pxToDp(20) }}>百越亭</Text>
                            <TouchableOpacity
                                style={{ borderWidth: pxToDp(1), borderColor: '#1874CD', backgroundColor: 'white', height: pxToDp(22), width: pxToDp(90), borderRadius: pxToDp(10),alignItems: 'center' }}>
                                <Text style={{ color: '#1874CD' }}>Lv1 九品主簿</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: pxToDp(13), color: 'grey' }}>穿越0天|看过0件文物</Text>
                        </View>
                        <TouchableOpacity
                                style={{  backgroundColor: '#1874CD', height: pxToDp(22), width: pxToDp(100),borderBottomLeftRadius:pxToDp(30),borderTopLeftRadius:pxToDp(30),alignItems:'center',alignSelf:'center',marginLeft:pxToDp(32) }}>
                                <Text style={{ color: 'white' }}>积分福利</Text>
                            </TouchableOpacity>
                    </View>
                    {/*收藏 圈子 关注 */}
                    <View style={{ justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'white', borderRadius: pxToDp(10) }}>
                        <Text style={{ fontSize: pxToDp(23) }}>0</Text>
                        <Text style={{ fontSize: pxToDp(23) }}>0</Text>
                        <Text style={{ fontSize: pxToDp(23) }}>0</Text>
                    </View>
                    <View style={{ justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'white', borderRadius: pxToDp(10) }}>
                        <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>收藏</Text>
                        <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>圈子</Text>
                        <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>关注</Text>
                    </View>
                </View>
                {/*私人博物馆 */}
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: pxToDp(10), marginTop: pxToDp(10), marginLeft: pxToDp(5), marginRight: pxToDp(5) }}>
                    <SvgUri width="30" height='30' svgXmlData={museum} />
                    <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold', color: '#1874CD', margin: pxToDp(10) }}>我的私人博物馆</Text>
                    <Text style={{ fontSize: pxToDp(13), color: '#1874CD', marginLeft: pxToDp(130) }}>查看</Text>
                </View>
                {/*我的订单 */}
                <View style={{ backgroundColor: 'white', borderRadius: pxToDp(10), marginTop: pxToDp(10), marginLeft: pxToDp(5), marginRight: pxToDp(5) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: pxToDp(10) }}>
                        <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold', color: 'black' }}>我的订单</Text>
                        <View>
                            <Text style={{ fontSize: pxToDp(13), color: 'black', alignItems: 'flex-end', marginLeft: pxToDp(180) }}>查看全部订单</Text>
                        </View>
                    </View>
                    {/*订单状态栏 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            <SvgUri width="40" height='40' svgXmlData={daifukuan} />
                            <Text style={{ fontSize: pxToDp(15) }}>待付款</Text>
                        </View>
                        <View>
                            <SvgUri width="40" height='40' svgXmlData={daifahuo} />
                            <Text style={{ fontSize: pxToDp(15) }}>待发货</Text>
                        </View>
                        <View>
                            <SvgUri width="40" height='40' svgXmlData={daishouhuo} />
                            <Text style={{ fontSize: pxToDp(15) }}>待收货</Text>
                        </View>
                        <View>
                            <SvgUri width="40" height='40' svgXmlData={daipingjia} />
                            <Text style={{ fontSize: pxToDp(15) }}>待评价</Text>
                        </View>
                    </View>
                    {/*最新物流 */}
                    <View style={{ height: pxToDp(100), borderRadius: pxToDp(10), margin: pxToDp(10), alignItems: 'center', backgroundColor: 'lightgrey' }}>
                        <Text>最新物流</Text>
                        <Text>物流信息空空空空空空空空空空啊</Text>
                    </View>
                </View>
                {/*我的服务 */}
                <View style={{ backgroundColor: 'white', borderRadius: pxToDp(10), marginTop: pxToDp(10), marginLeft: pxToDp(5), marginRight: pxToDp(5) }}>
                    <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold', color: 'black', margin: pxToDp(10) }}>我的服务</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: pxToDp(10) }}>
                        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                            <SvgUri width="30" height='30' svgXmlData={xiaoxi} />
                            <Text style={{ fontSize: pxToDp(15),color:'grey' }}>我的消息</Text>
                        </View>
                        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                            <SvgUri width="30" height='30' svgXmlData={youhuiquan} />
                            <Text style={{ fontSize: pxToDp(15),color:'grey' }}>优惠券</Text>
                        </View>
                        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                            <SvgUri width="30" height='30' svgXmlData={jifen} />
                            <Text style={{ fontSize: pxToDp(15),color:'grey' }}>积分兑换</Text>
                        </View>
                        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                            <SvgUri width="30" height='30' svgXmlData={gouwuche} />
                            <Text style={{ fontSize: pxToDp(15),color:'grey' }}>购物车</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: pxToDp(10) }}>
                        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                            <SvgUri width="30" height='30' svgXmlData={shoucang} />
                            <Text style={{ fontSize: pxToDp(15),color:'grey' }}>商品收藏</Text>
                        </View>
                        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                            <SvgUri width="30" height='30' svgXmlData={dizhi} />
                            <Text style={{ fontSize: pxToDp(15),color:'grey' }}>收货地址</Text>
                        </View>
                        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                            <SvgUri width="30" height='30' svgXmlData={fuwu} />
                            <Text style={{ fontSize: pxToDp(15),color:'grey' }}>定制服务</Text>
                        </View>
                        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                            <SvgUri width="30" height='30' svgXmlData={zuji} />
                            <Text style={{ fontSize: pxToDp(13),color:'grey' }}>浏览足迹</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default MyPage;