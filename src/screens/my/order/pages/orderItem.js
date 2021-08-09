import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { pxToDp } from "../../../../utils/styleKits";

class Index extends Component {
    state={
        pageone:[{id:1,shopname:'百越庭售卖店',jiaoyi:'交易成功',goodimg:'',goodname:'戏服儿童小生衣',price:128,realprice:128,}]
    }
    render() {
        return (
            this.props.page.map((item,id)=>(
                    <View key={id} style={{ height: pxToDp(230), marginLeft: pxToDp(20), marginRight: pxToDp(20), borderBottomWidth: pxToDp(1), borderBottomColor: 'grey' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: pxToDp(20) }}>
                            <Text style={{ fontSize: pxToDp(17) }}>{item.shopname}</Text>
                            <Text style={{ fontSize: pxToDp(13) }}>交易成功</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: pxToDp(10) }}>
                            <Image style={{ height: pxToDp(110), width: pxToDp(110), borderRadius: pxToDp(10) }} source={require('../../../../res/18.jpg')} />
                            <Text style={{ fontSize: pxToDp(15), marginLeft: pxToDp(10) }}>{item.goodname}</Text>
                            <Text style={{ marginLeft: pxToDp(65), fontSize: pxToDp(15) }}>￥{item.price}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={{ fontSize: pxToDp(15) }}>总价￥128 </Text>
                            <Text style={{ fontSize: pxToDp(15), fontWeight: 'bold' }}> 实付款￥{item.realprice}</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: pxToDp(10) }}>
                        {this.props.btn.map((item,index)=>(
                            <TouchableOpacity style={{ borderColor: 'grey', borderWidth: pxToDp(1), height: pxToDp(23), width: pxToDp(70), borderRadius: pxToDp(10), alignItems: 'center', justifyContent: 'center', marginRight: pxToDp(10) }}>
                                <Text style={{ fontSize: pxToDp(15) }}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                        </View>
                    </View>))
                    
            
        );
    }
}
export default Index;