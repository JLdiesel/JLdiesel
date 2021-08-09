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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Top from '@components/common/top';
import ImageFade from '@components/ImageFade/index';
import ActressView from '@components/common/actressview';
import { NavigationContext } from '@react-navigation/native';
import { getUserInfoAction, getUserOriderListAction } from './store/actions';
import { connect } from 'react-redux';
import Legend from '@components/first/legend';
import Hy from '@components/first/hy';
const SLIDER_1_FIRST_ITEM = 1;

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }
  componentDidMount() {
    this.props.getUserInfoAction();
    this.props.getUserOriderListAction();
  }

  static contextType = NavigationContext;

  render() {
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
            <Hy />
          </View>

          {/*名角风采 */}
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
                名角风采
              </Text>
              <TouchableOpacity
                onPress={() => this.context.navigate('PageThree')}
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
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}
            >
              <TouchableOpacity
                onPress={() => this.context.navigate('Actress')}
              >
                <ActressView
                  picture={require('../../../res/performer/1.jpg')}
                  name="方亚芬"
                />
              </TouchableOpacity>
              <ActressView
                picture={require('../../../res/performer/2.jpg')}
                name="王文娟"
              />
              <ActressView
                picture={require('../../../res/performer/3.jpg')}
                name="王君安"
              />
              <ActressView
                picture={require('../../../res/performer/4.jpg')}
                name="茅威涛"
              />
              <ActressView
                picture={require('../../../res/performer/7.jpg')}
                name="蔡浙飞"
              />
              <ActressView
                picture={require('../../../res/performer/9.jpg')}
                name="何赛飞"
              />
              <ActressView
                picture={require('../../../res/performer/10.jpg')}
                name="陈丽君"
              />
            </View>
          </ScrollView>
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
                onPress={() => this.context.navigate('PageOne', 2)}
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
          <Legend />
        </ScrollView>
      </View>
    );
  }
}
export default connect((state) => ({}), {
  getUserInfoAction,
  getUserOriderListAction
})(Index);
