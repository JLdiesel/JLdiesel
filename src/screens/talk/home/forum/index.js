import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';
import Tiebar from './luntan'
import { NavigationContext } from '@react-navigation/native';
import { SpeedDial } from 'react-native-elements';
class Index extends PureComponent {
  state = {
    field: ['活动精选', '附近茶馆', '旅游路线', '热门话题'],
    showSharePop: false,//分享弹窗，默认不显示,
    dongtai: [{
      dtid: 1, dtimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
      name: 'wulawulaaaa', date: '2020年03月20日', dt: '乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉', dz: 123,
      dtimg2: ['https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'
      ],
      label:true,
      musicimg:''
    },
    {
      dtid: 1, dtimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
      name: 'wulawulaaaa', date: '2020年03月20日', dt: '乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉', dz: 123,
      dtimg2: ['https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'
      ],
      label:false,
      musicimg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.huabanimg.com%2Fb938a249e90cc213eace683c024068eaad6f171c5aef6-L9fYnM_fw658&refer=http%3A%2F%2Fhbimg.huabanimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631325139&t=28f3af07dc2b0db4cb477d3bf7f7e21f'
    }, {
      dtid: 1, dtimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
      name: 'wulawulaaaa', date: '2020年03月20日', dt: '乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉', dz: 123,
      dtimg2: ['https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'
      ],
      label:true,
      musicurl: ''
    },
    ],
    isopen: false


  }
  static contextType = NavigationContext;
  render() {

    return (
      <View>
        <ScrollView>
          <View>

          </View>
          <View>


            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ height: 150 }}
            >
              {this.state.field.map((item, index) => (
                <TouchableOpacity
                  style={{
                    marginLeft: pxToDp(10),
                    marginTop: pxToDp(30),
                    width: pxToDp(200),
                    height: pxToDp(90),
                    borderRadius: pxToDp(10)
                  }}
                >
                  <ImageBackground
                    source={require('../../../../res/play/1.jpg')}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: "100%",
                      opacity: 0.6,
                      backgroundColor: 'black',
                      borderRadius: pxToDp(10),

                    }}
                    imageStyle={{ borderRadius: pxToDp(10) }}
                  >
                    <Text style={{ color: 'white', fontSize: pxToDp(20) }}>
                      {item}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>

              ))}

            </ScrollView>
            <View style={{ marginLeft: pxToDp(10) }}>
              <Text style={{ fontSize: pxToDp(25), fontWeight: 'bold' }}>小NGA奥</Text>
            </View>

            <Tiebar dongtai={this.state.dongtai} />

          </View>
        </ScrollView>
        <SpeedDial
          isOpen={this.state.isopen}
          icon={{ name: 'edit', color: '#fff' }}
          openIcon={{ name: 'close', color: '#fff' }}
          onOpen={() => this.setState({ isopen: true })}
          onClose={() => this.setState({ isopen: false })}
          Number={50}
        >
          <SpeedDial.Action
            icon={{ name: 'add', color: '#fff' }}
            title="Add"
            onPress={() => console.log('Add Something')}
          />
          <SpeedDial.Action
            icon={{ name: 'delete', color: '#fff' }}
            title="Delete"
            onPress={() => console.log('Delete Something')}
          />
        </SpeedDial>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: pxToDp(130),
    backgroundColor: 'transparent'
  },

});
export default Index;
