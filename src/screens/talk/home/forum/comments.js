import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import {
  dianzan,
  pinglun,
  sandian
} from '../../../../component/common/iconSvg';
import RBSheet from 'react-native-raw-bottom-sheet';
import {getCommentInnerById } from '@service/moment'
class Index extends PureComponent {
  state = {
    isvisible: false,
    reply:[]
  };
  showRBsheet=async(id)=>{
    await getCommentInnerById(id).then(res=>this.setState({reply:[...res[0].recomment]},()=>{console.log(this.state.reply)})).then(()=>  this[`RBSheet${id}`].open())
  }
  render() {
    const { comments } = this.props;
    const newComments = [];
    comments.forEach((element) => {
      if (!newComments.some((item) => item.id === element.id)) {
        newComments.push(element);
      }
    });

    return (
      <View>
        {newComments.length ? (
          newComments.map((item) => (
            <View key={item.id}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={{ uri: item.user.avatarUrl }}
                  style={{
                    width: pxToDp(50),
                    height: pxToDp(50),
                    margin: pxToDp(15),
                    borderRadius: pxToDp(40)
                  }}
                />
                <Text style={{ marginTop: pxToDp(20) }}>
                  {item.user.nickName}
                </Text>
                <TouchableOpacity
                  style={{ position: 'absolute', right: 20, top: 20 }}
                  onPress={() => {
                    this.setState({ isvisible: true });
                  }}
                >
                  <SvgUri svgXmlData={sandian} width="20" height="20" />
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: 80 }}>
                <Text
                  style={{
                    marginBottom: pxToDp(10),
                    bottom: pxToDp(20),
                    fontSize: pxToDp(16),
                    width: '90%'
                  }}
                >
                  {item.content}
                </Text>
                <Text
                  style={{
                    marginBottom: pxToDp(10),
                    color: 'gray',
                    fontSize: pxToDp(13),
                    marginTop: pxToDp(-15)
                  }}
                >
                  {item.createTime}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    right: 20,
                    bottom: 10
                  }}
                >
                  <TouchableOpacity>
                    <SvgUri
                      svgXmlData={dianzan}
                      width="20"
                      height="20"
                      style={{ marginRight: 20 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <SvgUri svgXmlData={pinglun} width="20" height="20" />
                  </TouchableOpacity>
                </View>
              </View>
              {/* {item.reply.map((reply) => ( */}
              <View>
                <View style={{ flexDirection: 'row', marginLeft: pxToDp(35) }}>
                  <Image
                    source={{ uri: item.reply.avatar }}
                    style={{
                      width: pxToDp(40),
                      height: pxToDp(40),
                      margin: pxToDp(15),
                      borderRadius: pxToDp(40)
                    }}
                  />
                  <Text style={{ marginTop: pxToDp(20) }}>
                    {item.reply.nickName}
                  </Text>
                </View>
                <View style={{ marginLeft: 100 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={{
                        marginBottom: pxToDp(10),
                        bottom: pxToDp(20),
                        fontSize: pxToDp(16)
                      }}
                    >
                      回复{item.user.nickName}:
                    </Text>
                    <Text
                      style={{
                        marginBottom: pxToDp(10),
                        bottom: pxToDp(20),
                        fontSize: pxToDp(16),
                        width: '90%'
                      }}
                    >
                      {item.reply.content}
                    </Text>
                  </View>
                  <Text
                    style={{
                      marginBottom: pxToDp(10),
                      color: 'gray',
                      fontSize: pxToDp(13),
                      marginTop: pxToDp(-15)
                    }}
                  >
                    {item.reply.createAt}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      position: 'absolute',
                      right: 20,
                      bottom: 10,
                      backgroundColor: '#fff'
                    }}
                  >
                    <SvgUri
                      svgXmlData={dianzan}
                      width="20"
                      height="20"
                      style={{ marginRight: 20 }}
                    />
                    <TouchableOpacity  onPress={()=>this.showRBsheet(item.id)}> 
                    <SvgUri svgXmlData={pinglun} width="20" height="20" />
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
              <View>
            <RBSheet
                ref={ref => {
                  this[`RBSheet${item.id}`] = ref
                }
                }
                height={600}
                openDuration={0}>
                <ScrollView style={{flex:1}}>
              {this.state.reply?.map((item)=>(
                <View key={item.id}> 
                  <View style={{ flexDirection: 'row', marginLeft: pxToDp(10) }}>
                    <Image source={{ uri: item.avatar}} style={{ width: pxToDp(40), height: pxToDp(40), margin: pxToDp(15), borderRadius: pxToDp(40) }} />
                    <Text style={{ marginTop: pxToDp(20) }}>{item.nickName}</Text>
                  </View >
                  <View style={{ marginLeft: (80) }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ marginBottom: pxToDp(10), bottom: pxToDp(20), fontSize: pxToDp(16) }}>回复{item.nickName}:</Text>
                      <Text style={{ marginBottom: pxToDp(10), bottom: pxToDp(20), fontSize: pxToDp(16), width: '90%' }}>{item.content}</Text>
                    </View>
                    <Text style={{ marginBottom: pxToDp(10), color: 'gray', fontSize: pxToDp(13), marginTop: pxToDp(-15) }}>{item.createAt}</Text>
                    <View style={{ flexDirection: 'row', position: 'absolute', right: pxToDp(20), bottom: pxToDp(10), backgroundColor: '#fff' }}>
                      <SvgUri svgXmlData={dianzan} width='20' height='20' style={{ marginRight: pxToDp(20) }} />
                      <SvgUri svgXmlData={pinglun} width='20' height='20' />
                    </View>
                  </View>
                </View>))}
                </ScrollView>
              </RBSheet>
            </View>
            </View>
            
          ))
      
        ) : (
          <View>
            <Text>暂无评论</Text>
          </View>
        )}
           
      </View>
    );
  }
}

export default Index;
