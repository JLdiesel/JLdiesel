import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './scorll/styles/SliderEntry.style';
import SliderEntry from './scorll/components/SliderEntry';
import styles, { colors } from './scorll/styles/index.style';
import { ENTRIES1, ENTRIES2 } from './scorll/static/entries';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Top from '@components/common/top';
import ImageFade from '../../../component/ImageFade/index';
import ActressView from '@components/common/actressview';
import GenerView from '@components/common/generview';
import { NavigationContext } from '@react-navigation/native';

const SLIDER_1_FIRST_ITEM = 1;

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }
  static contextType = NavigationContext;

  _renderItem({ item, index }) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }
  _renderLightItem({ item, index }) {
    return <SliderEntry data={item} even={false} />;
  }
  layoutExample(number, title, type) {
    const isTinder = type === 'tinder';
    return (
      <View style={{ marginBottom: pxToDp(-10), marginTop: pxToDp(-10) }}>
        <Carousel
          data={isTinder ? ENTRIES2 : ENTRIES1}
          renderItem={isTinder ? this._renderLightItem : this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layout={type}
          loop={true}
        />
      </View>
    );
  }
  render() {
    const example3 = this.layoutExample('', '', 'stack');
    return (
      <View>
        <Top title="百越台" icon2="search" />
        <ScrollView style={{ marginBottom: 60 }}>
          {/* 轮播图 */}
          <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20) }}>
            <ImageFade
              ref="ImageFade"
              duration={800}
              delay={3000}
              style={{ width: '100%', height: pxToDp(200) }}
            >
              <Image
                style={{
                  width: '100%',
                  height: pxToDp(200),
                  borderRadius: pxToDp(20)
                }}
                source={require('../../../res/12.jpg')}
              />
              <Image
                style={{
                  width: '100%',
                  height: pxToDp(200),
                  borderRadius: pxToDp(20)
                }}
                source={require('../../../res/19-2.jpg')}
              />
            </ImageFade>
          </View>
          {/*俯瞰百年 */}
          <View style={{ margin: pxToDp(10), marginTop: pxToDp(0) }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  color: '#468CD3',
                  fontWeight: 'bold'
                }}
              >
                精选唱段
              </Text>
              <TouchableOpacity
                onPress={() => this.context.navigate('PageFour')}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                    查看更多
                  </Text>
                  <Ionicons name="chevron-forward" size={20} color="grey" />
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
              <View style={{ flexDirection: 'row', marginTop: pxToDp(5) }}>
                <Image
                  style={{
                    height: pxToDp(130),
                    width: pxToDp(200),
                    borderRadius: pxToDp(10),
                    marginLeft: pxToDp(10)
                  }}
                  source={require('../../../res/13.jpg')}
                />
                <Image
                  style={{
                    height: pxToDp(130),
                    width: pxToDp(200),
                    borderRadius: pxToDp(10),
                    marginLeft: pxToDp(10)
                  }}
                  source={require('../../../res/14.jpg')}
                />
                <Image
                  style={{
                    height: pxToDp(130),
                    width: pxToDp(200),
                    borderRadius: pxToDp(10),
                    marginLeft: pxToDp(10)
                  }}
                  source={require('../../../res/15.jpg')}
                />
                <Image
                  style={{
                    height: pxToDp(130),
                    width: pxToDp(200),
                    borderRadius: pxToDp(10),
                    marginLeft: pxToDp(10)
                  }}
                  source={require('../../../res/16.jpg')}
                />
              </View>
            </ScrollView>
          </View>
          {/*俯瞰百年 */}
          <View style={{ margin: pxToDp(10), marginTop: pxToDp(0) }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  color: '#468CD3',
                  fontWeight: 'bold'
                }}
              >
                俯瞰百年
              </Text>
              <TouchableOpacity
                onPress={() => this.context.navigate('PageTwo')}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                    查看更多
                  </Text>
                  <Ionicons name="chevron-forward" size={20} color="grey" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
              {this.gradient}
              <ScrollView
                style={styles.scrollview}
                scrollEventThrottle={200}
                directionalLockEnabled={true}
              >
                {example3}
              </ScrollView>
            </View>
          </SafeAreaView>

          {/*名角风采 */}
          <View style={{
            marginTop: pxToDp(20),
            borderRadius: pxToDp(10),
            height: pxToDp(310),
            backgroundColor: 'rgba(255,255,255,0.5)',
            marginRight: pxToDp(10),
            marginLeft: pxToDp(10)
          }}>
            <ImageBackground style={{
              width: '100%',
              height: pxToDp(250)
            }} imageStyle={{ borderTopLeftRadius: pxToDp(10), borderTopRightRadius: pxToDp(10) }} source={{ uri: 'https://img0.baidu.com/it/u=2584689132,3841583287&fm=26&fmt=auto&gp=0.jpg' }}>
              <View style={{ margin: pxToDp(10) }}>
                <View style={{ marginTop: pxToDp(25) }}>
                  <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>梨园弟子</Text>
                  <Text style={{ fontSize: pxToDp(16), marginTop: pxToDp(5) }}>上下求索传承经典</Text>
                </View>
                <ScrollView horizontal={true} style={{ marginTop: pxToDp(45) }}>
                  <View style={{
                    width: pxToDp(100),
                    height: pxToDp(160),
                    borderRadius: pxToDp(10),
                    marginRight: pxToDp(20)
                  }}>
                    <Image style={{
                      width: pxToDp(100),
                      height: pxToDp(140),
                      borderTopLeftRadius: pxToDp(10),
                      borderTopRightRadius: pxToDp(10)
                    }} source={{ uri: 'https://pic1.zhimg.com/v2-932f9bb899443925a471296b7e7aa89d_r.jpg' }} />
                    <View style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                      backgroundColor: 'white'
                    }}>
                      <Text style={{ fontSize: pxToDp(15) }}>何赛飞</Text>
                    </View>
                  </View>
                  <View style={{
                    width: pxToDp(100),
                    height: pxToDp(160),
                    borderRadius: pxToDp(10),
                    marginRight: pxToDp(20)
                  }}>
                    <Image style={{
                      width: pxToDp(100),
                      height: pxToDp(140),
                      borderTopLeftRadius: pxToDp(10),
                      borderTopRightRadius: pxToDp(10)
                    }} source={{ uri: 'https://img2.baidu.com/it/u=1837369383,3244486584&fm=26&fmt=auto&gp=0.jpg' }} />
                    <View style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                      backgroundColor: 'white'
                    }}>
                      <Text style={{ fontSize: pxToDp(15) }}>王文娟</Text>
                    </View>
                  </View>
                  <View style={{
                    width: pxToDp(100),
                    height: pxToDp(160),
                    borderRadius: pxToDp(10),
                    marginRight: pxToDp(20)
                  }}>
                    <Image style={{
                      width: pxToDp(100),
                      height: pxToDp(140),
                      borderTopLeftRadius: pxToDp(10),
                      borderTopRightRadius: pxToDp(10)
                    }} source={{ uri: 'https://img0.baidu.com/it/u=2918427680,1568245037&fm=26&fmt=auto&gp=0.jpg' }} />
                    <View style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                      backgroundColor: 'white'
                    }}>
                      <Text style={{ fontSize: pxToDp(15) }}>方亚芬</Text>
                    </View>
                  </View>
                  <View style={{
                    width: pxToDp(100),
                    height: pxToDp(160),
                    borderRadius: pxToDp(10),
                    marginRight: pxToDp(20)
                  }}>
                    <Image style={{
                      width: pxToDp(100),
                      height: pxToDp(140),
                      borderTopLeftRadius: pxToDp(10),
                      borderTopRightRadius: pxToDp(10)
                    }} source={{ uri: 'http://i1.go2yd.com/image.php?url=0WB85K1RSk' }} />
                    <View style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                      backgroundColor: 'white'
                    }}>
                      <Text style={{ fontSize: pxToDp(15) }}>王志萍</Text>
                    </View>
                  </View>
                  <View  style={{
                    width: pxToDp(100),
                    height: pxToDp(160),
                    borderRadius: pxToDp(10),
                    marginRight: pxToDp(20)
                  }}>
                    <Image style={{
                      width: pxToDp(100),
                      height: pxToDp(140),
                      borderTopLeftRadius: pxToDp(10),
                      borderTopRightRadius: pxToDp(10)
                    }} source={{ uri: 'http://i1.go2yd.com/image.php?url=0WB85KhP83' }} />
                    <View style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                      backgroundColor: 'white'
                    }}>
                      <Text style={{ fontSize: pxToDp(15) }}>何英</Text>
                    </View>
                  </View>
                  <View style={{
                    width: pxToDp(100),
                    height: pxToDp(160),
                    borderRadius: pxToDp(10),
                    marginRight: pxToDp(20)
                  }}>
                    <Image style={{
                      width: pxToDp(100),
                      height: pxToDp(140),
                      borderTopLeftRadius: pxToDp(10),
                      borderTopRightRadius: pxToDp(10)
                    }} source={{ uri: 'https://img0.baidu.com/it/u=815941838,517847605&fm=15&fmt=auto&gp=0.jpg' }} />
                    <View style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                      backgroundColor: 'white'
                    }}>
                      <Text style={{ fontSize: pxToDp(15) }}>蔡浙飞</Text>
                    </View>
                  </View>
                  <View style={{
                    width: pxToDp(100),
                    height: pxToDp(160),
                    borderRadius: pxToDp(10),
                    marginRight: pxToDp(20)
                  }}>
                    <Image style={{
                      width: pxToDp(100),
                      height: pxToDp(140),
                      borderTopLeftRadius: pxToDp(10),
                      borderTopRightRadius: pxToDp(10)
                    }} source={{ uri: 'https://img1.baidu.com/it/u=469853929,4052640454&fm=26&fmt=auto&gp=0.jpg' }} />
                    <View style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                      backgroundColor: 'white'
                    }}>
                      <Text style={{ fontSize: pxToDp(15) }}>茅威涛</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </ImageBackground>
          </View>
          {/*流派故事 */}
          <View
            style={{
              margin: pxToDp(8)
              //    marginTop: pxToDp(0),
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  color: '#468CD3',
                  fontWeight: 'bold'
                }}
              >
                流派传奇
              </Text>
              <TouchableOpacity
                onPress={() => this.context.navigate('PageOne')}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
                    查看更多
                  </Text>
                  <Ionicons name="chevron-forward" size={20} color="grey" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.context.navigate('School')}>
            <GenerView
              picture={require('../../../res/genre/1.jpg')}
              name="袁派"
              special="质朴平易，委婉细腻，深沉含蓄，韵味醇厚"
            />
          </TouchableOpacity>
          <GenerView
            picture={require('../../../res/genre/2.jpg')}
            name="范派"
            special="曲调华彩而有气派，唱腔深情缠绵"
          />
          <GenerView
            picture={require('../../../res/genre/3.jpg')}
            name="尹派"
            special="委婉缠绵，洒脱深沉，纯朴隽永，清新舒展"
          />
        </ScrollView>
      </View>
    );
  }
}
export default Index;
