import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity,Dimensions } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import SvgUri from 'react-native-svg-uri';
import Top from '@components/common/top';
import { dianzan, pinglun, sandian } from '../../../../component/common/iconSvg';
import RBSheet from 'react-native-raw-bottom-sheet';
import { ScrollView, TextInput } from 'react-native-gesture-handler';



class Index extends PureComponent {
  state = {
    isvisible: false,
    text: [1, 2, 3, 4, 5]
  }


  render() {


    return (
      <View style={{marginBottom:pxToDp(40)}}>
   <View>
        {this.props.comments.map((item, commentid) => (
          <View key={commentid}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={{ uri: item.plimg }} style={{ width: pxToDp(50), height: pxToDp(50), margin: pxToDp(15), borderRadius: pxToDp(40) }} />
              <Text style={{ marginTop: pxToDp(20),fontSize:pxToDp(20),fontWeight:'bold' }}>{item.plname}</Text>
              <TouchableOpacity style={{ position: 'absolute', right: pxToDp(20), top: pxToDp(20) }} onPress={() => { this.setState({ isvisible: true }) }}>
                <SvgUri svgXmlData={sandian} width='20' height='20' />
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: pxToDp(80) }}>
              <Text style={{ marginBottom: pxToDp(10), bottom: pxToDp(20), fontSize: pxToDp(16), width: '90%' }}>{item.pl}</Text>
              <Text style={{ marginBottom: pxToDp(10), color: 'gray', fontSize: pxToDp(13), marginTop: pxToDp(-15) }}>{item.commetdate}</Text>
              <View style={{ flexDirection: 'row', position: 'absolute', right: pxToDp(20), bottom: pxToDp(10) }}>
  
                <TouchableOpacity>
                  <SvgUri svgXmlData={dianzan} width='20' height='20' style={{ marginRight: pxToDp(20) }} />
                </TouchableOpacity>
                <TouchableOpacity >
                  <SvgUri svgXmlData={pinglun} width='20' height='20' />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{backgroundColor:'#ddd',width:'80%',height:100,alignSelf:'center',borderRadius:15}}>
                <View >
                  <View style={{ flexDirection: 'row', marginLeft: pxToDp(5) }}>
                    <Image source={{ uri: item.reply[0].rpimg }} style={{ width: pxToDp(40), height: pxToDp(40), margin: pxToDp(15), borderRadius: pxToDp(40) }} />
                    <Text style={{ marginTop: pxToDp(15),fontSize:pxToDp(20) }}  numberOfLines={1}>{item.reply[0].rpname}</Text>
                  </View >
                  <View style={{ marginLeft: (80) }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ bottom:pxToDp(20), fontSize: pxToDp(15) }}>回复{item.reply[0].rpto}:</Text>
                      <Text style={{ bottom:pxToDp(20), fontSize: pxToDp(15), width: '90%' }} numberOfLines={1}>{item.reply[0].rptext}</Text>
                    </View>
                    <Text style={{ marginBottom: pxToDp(10), color: 'gray', fontSize: pxToDp(11), marginTop: pxToDp(-15) }}>{item.reply[0].rpdate}</Text>
                  
                  </View>
                  <TouchableOpacity style={{position:'absolute',right:pxToDp(10),bottom:pxToDp(20)}} onPress={() => { this[RBSheet + commentid].open() }}>
                        <Text>全部评论</Text>
                     </TouchableOpacity>
                </View>
            </View>
            <RBSheet
              ref={ref => {
                this[RBSheet + commentid]=ref}
              }
              height={600}
              openDuration={0}>
              <ScrollView>
              {item.reply.map((item, rpid) => (
                <View key={rpid}>
                  <View style={{ flexDirection: 'row', marginLeft: pxToDp(10) }}>
                    <Image source={{ uri: item.rpimg }} style={{ width: pxToDp(40), height: pxToDp(40), margin: pxToDp(15), borderRadius: pxToDp(40) }} />
                    <Text style={{ marginTop: pxToDp(20) }}>{item.rpname}</Text>
                  </View >
                  <View style={{ marginLeft: (80) }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ marginBottom: pxToDp(10), bottom: pxToDp(20), fontSize: pxToDp(16) }}>回复{item.rpto}:</Text>
                      <Text style={{ marginBottom: pxToDp(10), bottom: pxToDp(20), fontSize: pxToDp(16), width: '90%' }}>{item.rptext}</Text>
                    </View>
                    <Text style={{ marginBottom: pxToDp(10), color: 'gray', fontSize: pxToDp(13), marginTop: pxToDp(-15) }}>{item.rpdate}</Text>
                    <View style={{ flexDirection: 'row', position: 'absolute', right: pxToDp(20), bottom: pxToDp(10), backgroundColor: '#fff' }}>
                      <SvgUri svgXmlData={dianzan} width='20' height='20' style={{ marginRight: pxToDp(20) }} />
                      <SvgUri svgXmlData={pinglun} width='20' height='20' />
                    </View>
                  </View>
                </View>))}
                </ScrollView>
            </RBSheet>
            
          </View>
        ))}
   
      </View>
    
      </View>
    );
  }
}



export default Index;
