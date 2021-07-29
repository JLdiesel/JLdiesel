import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground,Image,ScrollView} from 'react-native';
import { pxToDp } from "@utils/styleKits";
import Top from '@components/common/top';


class Index extends Component {
    render() {
        //console.log(this.props);
        const { goToPage, tabs, activeTab } = this.props;
        //goToPag 函数 负责跳转页面
        //tabs 标题数组
        //activeTab 当前激活索引
        return (
           
            <View style={{flexDirection:'column'}}>
            
            <Top icon1='arrow-back' title="设置" />
        
            <View style={{height:300}}>
            <ImageBackground style={{width:'100%',height:150}} source={{uri:'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'}} >
                <View style={{marginTop:pxToDp(130)}}>
                <TouchableOpacity onPress={() => this.context.navigate("Ziliao")}>
                <Image source={{uri:'https://img0.baidu.com/it/u=3225163326,3627210682&fm=26&fmt=auto&gp=0.jpg'}} style={{width:pxToDp(90),height:pxToDp(90),borderRadius:pxToDp(50),margin:pxToDp(10),marginTop:pxToDp(30)}}/>
                 </TouchableOpacity>
                 <Text style={{fontSize:20,top:0,left:10,width:150}}numberOfLines={1}>啊啊啊啊aaaaaaaaa</Text>
                </View>
                <View style={{ flexDirection: 'row',position:'absolute',top:160,right:0}}>
                    <View style={{marginRight:55}}>
                        
                    <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}} style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold'}}>17</Text>
                        <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>动态</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginRight:55}}>
                        <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}} style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>99</Text>
                        <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>点赞</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginRight:10}}>
                       
                    <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}} style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>188</Text>
                        <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>关注</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{position:'absolute',top:50,borderRadius:5,right:10,width:200,height:40,justifyContent:'center',alignItems:'center',borderWidth:2,borderColor:'pink'}}>
                        <Text style={{color:'pink',fontSize:15}}>编辑资料</Text>
                    </TouchableOpacity>
                    </View>
            </ImageBackground>
            </View>
            <View
                style={{
                    height: pxToDp(60), flexDirection: "row", paddingLeft: pxToDp(16),
                    justifyContent:"space-around"
                }}
                source={require('./2.png')}
            >
                {tabs.map((v, i) => <TouchableOpacity
                    key={i}
                    onPress={() => goToPage(i)}
                    style={{
                        justifyContent: 'center',
                        borderBottomColor: "#003C66",
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