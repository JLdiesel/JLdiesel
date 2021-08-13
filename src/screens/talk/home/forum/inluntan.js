import React, { PureComponent } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity ,Dimensions,} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import SvgUri from 'react-native-svg-uri';
import Top from '@components/common/top';
import Comments from './comments'

class Index extends PureComponent {
    state = {
        louzhu: { lzimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', lzname: '🐷杯', dt: '是云在想你呀', date: '2021-08-03', dtimg: ['https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'] },
        comments: [
            {
                commentid: 1, plimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                pl: '别狗叫1', plname: '啊啊啊', pldate: '2021-08-03', commetdate: '2021-08-03',
                reply: [{
                    rpid: 1, rpname: 'sb1111111', rpimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                    rptext: '3', rpdate: '1999-07-15', rpto: 'sb3'
                }, {
                    rpid: 2, rpname: 'sb2', rpimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                    rptext: '2', rpdate: '1999-07-15', rpto: 'sb2'
                },
                {
                    rpid: 3, rpname: 'sb3', rpimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                    rptext: '1', rpdate: '1999-07-15', rpto: 'sb1'
                }
                ],
            },
            {
                commentid: 2, plimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                pl: '别狗叫2', plname: '啊啊啊', pldate: '2021-08-03', commetdate: '2021-08-03',
                reply: [{
                    rpid: 1, rpname: 'snb', rpimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                    rptext: '1', rpdate: '1999-07-15', rpto: '啊啊啊'
                },
                {
                    rpid: 2, rpname: 'snb', rpimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                    rptext: '2', rpdate: '1999-07-15', rpto: '啊啊啊'
                },
                {
                    rpid: 3, rpname: 'snb', rpimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                    rptext: '3', rpdate: '1999-07-15', rpto: '啊啊啊'
                },
                {
                    rpid: 4, rpname: 'snb', rpimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                    rptext: '4', rpdate: '1999-07-15', rpto: '啊啊啊'
                }
                ],
            },
        ]
    }
    render() {
        return (
            <View>
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <Top icon1='arrow-back' title="设置" on />
                <View style={{ width: '100%', height: pxToDp(100), marginTop: pxToDp(20), flexDirection: 'row' }}>
                    <Image source={{ uri: this.state.louzhu.lzimg }} style={{ height: pxToDp(60), width: pxToDp(60), borderRadius: pxToDp(60), margin: pxToDp(15) }} />
                    <View style={{ marginTop: pxToDp(20), paddingLeft: pxToDp(5) }}>
                        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>{this.state.louzhu.lzname}</Text>
                    </View>
                </View>
                <View style={{ margin: pxToDp(15) }}>
                    <Text style={{ fontSize: pxToDp(18) }}>{this.state.louzhu.dt}</Text>
                </View>
                <ScrollView style={{ height: pxToDp(150), marginTop: pxToDp(10), marginLeft: pxToDp(10), width: '95%' }}
                    showsHorizontalScrollIndicator={false} horizontal={true}>
                    {this.state.louzhu.dtimg.map((item, index) => (
                        <View key={index} style={{ marginBottom: pxToDp(10) }}>
                            <Image
                                style={{ width: pxToDp(155), height: pxToDp(150), borderRadius: pxToDp(15), marginLeft: pxToDp(10) }}
                                source={{ uri: item }} />
                        </View>
                    ))}
                </ScrollView>
                {/* <Text style={{paddingLeft:pxToDp(15),color:'gray'}}>{this.state.louzhu.date}</Text> */}
                <View style={{ backgroundColor: '#fff', marginTop: pxToDp(30) }}>
                    <Text style={{ fontSize: pxToDp(18), margin: pxToDp(15), }}>全部</Text>

                    <Comments
                        comments={this.state.comments}
                        reply={this.state.comments.reply} />



                </View>
               
            </ScrollView >
            <View style={{ backgroundColor: '#e2f4fe', height: 40,width:Dimensions.get('window').width ,alignItems: 'center', flexDirection: 'row', position: 'absolute', bottom: 0}}>
                    <TextInput
                        placeholder='发一条友善的评论'

                        style={{ height: '80%', backgroundColor: '#fcfcfc', width: '75%', marginLeft: pxToDp(20), borderRadius: pxToDp(20), }} />
                    <TouchableOpacity>
                        <Text style={{ marginLeft: pxToDp(20) }}>发布</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}



export default Index;
