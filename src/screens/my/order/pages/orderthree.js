import React,{ PureComponent } from "react";
import { View,Text } from "react-native";
import { pxToDp } from "../../../../utils/styleKits";
import Orderitem from "./orderItem";

class Index extends PureComponent{

    state={
        pagetwo:[{id:1,shopname:'百越庭售卖店',jiaoyi:'交易成功',goodimg:'',goodname:'戏服儿童小生衣',price:128,realprice:128,},
        {id:1,shopname:'百越庭售卖店',jiaoyi:'交易成功',goodimg:'',goodname:'戏服儿童小生衣',price:128,realprice:128,},],
        btn:['确认收货','查看物流']
    
    }
isGoodNull=()=>{
    if(this.state.pagetwo.length==0)
     return(
            <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#E2F4FE',flex:1}}>
                <Text style={{fontSize:pxToDp(15)}}>您还没有相关的订单</Text>
                <Text style={{fontSize:pxToDp(15),color:'grey'}}>可以去看看有哪些想买的</Text>
            </View>)
    else{
        return (
            <ScrollView style={{backgroundColor:'#E2F4FE',flex:1,height:'100%',}}>
           <Orderitem 
             page={this.state.pagetwo}
             btn={this.state.btn}
           />
            </ScrollView>)
}}

    render(){
        return(<View style={{flex:1}}>
            {this.isGoodNull()}
            </View>
        )
       
        }
}
export default Index;

