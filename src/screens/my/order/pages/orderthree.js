import React,{ Component } from "react";
import { View,Text } from "react-native";
import { pxToDp } from "../../../../utils/styleKits";

class Index extends Component{
    render(){
        return(
            <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#E2F4FE',flex:1}}>
                <Text style={{fontSize:pxToDp(15)}}>您还没有相关的订单</Text>
                <Text style={{fontSize:pxToDp(15),color:'grey'}}>可以去看看有哪些想买的</Text>
            </View>
        );
    }
}
export default Index;