import React, { Component } from 'react';
import { View, TouchableOpacity,Image,ImageBackground,Text} from 'react-native';



import Top from '../../../component/common/top';
import { NavigationContext } from "@react-navigation/native";
import { pxToDp } from '../../../utils/styleKits';

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
                <Top icon1='arrow-back' title="设置" />
                
                <ImageBackground style={{width:'100%',height:150}} source={{uri:'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'}} >
                    <View style={{marginTop:pxToDp(130)}}>
                    <TouchableOpacity onPress={() => this.context.navigate("Ziliao")}>
                    <Image source={{uri:'https://img0.baidu.com/it/u=3225163326,3627210682&fm=26&fmt=auto&gp=0.jpg'}} style={{width:pxToDp(90),height:pxToDp(90),borderRadius:pxToDp(50),margin:pxToDp(30)}}/>
                     </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row',position:'absolute',top:150,right:20}}>
                        <View style={{ justifyContent:'center',alignItems:'center',alignSelf:'center',marginRight:35}}>
                            <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold'}}>17</Text>
                            <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>动态</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center',marginRight:35}}>
                            <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>99</Text>
                            <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>点赞</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center',marginRight:35 }}>
                            <TouchableOpacity onPress={()=>{this.context.navigate('Shop')}}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>188</Text>
                            <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>关注</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{position:'absolute',top:50,backgroundColor:'red',borderRadius:20,width:170,height:40,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#fff',}}>编辑资料</Text>
                        </TouchableOpacity>
                        </View>
                </ImageBackground>
            </View>
        );
    }
}
export default Index;