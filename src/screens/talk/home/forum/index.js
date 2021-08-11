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
import RBSheet from 'react-native-raw-bottom-sheet';
import { pxToDp } from '../../../../utils/styleKits';
import Icon from 'react-native-vector-icons/AntDesign';
import Tiebar from './luntan'
import { NavigationContext } from '@react-navigation/native';

class Index extends PureComponent {
  state = {
    field: ['活动精选', '附近茶馆', '旅游路线', '热门话题'],
    showSharePop: false,//分享弹窗，默认不显示,
    dongtai: [{
      dtid: 1, dtimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
      name: 'wulawulaaaa', date: '2020年03月20日', dt: '乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉', dz: 123,
      dtimg2: ['https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'
      ]
    },
    {
      dtid: 1, dtimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
      name: 'wulawulaaaa', date: '2020年03月20日', dt: '乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉', dz: 123,
      dtimg2: ['https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'
      ]
    }, {
      dtid: 1, dtimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
      name: 'wulawulaaaa', date: '2020年03月20日', dt: '乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉', dz: 123,
      dtimg2: ['https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'
      ]
    }


    ],


  }
  static contextType = NavigationContext;
  render() {

    return (
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
