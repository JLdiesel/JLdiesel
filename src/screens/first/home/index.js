import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './scorll/styles/SliderEntry.style';
import SliderEntry from './scorll/components/SliderEntry';
import styles, { colors } from './scorll/styles/index.style';
import { ENTRIES1, ENTRIES2 } from './scorll/static/entries';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Top from '@components/common/top';
import ImageFade from '../../../component/ImageFade/index'
import ActressView from '@components/common/actressview';
import GenerView from '@components/common/generview';
import { NavigationContext } from "@react-navigation/native";

const SLIDER_1_FIRST_ITEM = 1;

class Index extends Component {
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
      <View style={{ marginBottom: pxToDp(-10), marginTop: pxToDp(-10), }}>
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
<<<<<<< HEAD
          {/*轮播图 */}
          <View style={{ height: pxToDp(160) }}>
            <Swiper
              style={styles.wrapper}
              removeClippedSubviews={false}
              showsButtons={false} //显示控制按钮
              loop={true} //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
              autoplay={true} //自动轮播
              showsPagination={false} //是否显示小圆点
              autoplayTimeout={3} //每隔3秒切换
            >
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: pxToDp(150),
                borderRadius: pxToDp(10),
                margin: pxToDp(10)
              }}>
                <Image
                  style={{
                    height: pxToDp(150),
                    width: pxToDp(355),
                    borderRadius: pxToDp(10),
                    margin: pxToDp(10)
                  }}
                  source={require("../../../res/22.jpg")}
                />
              </View>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: pxToDp(150),
                borderRadius: pxToDp(10),
                margin: pxToDp(10)
              }}>
                <Image
                  style={{
                    height: pxToDp(150),
                    width: pxToDp(355),
                    borderRadius: pxToDp(10),
                    margin: pxToDp(10)
                  }}
                  source={require("../../../res/8.jpg")}
                />
              </View>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: pxToDp(150),
                borderRadius: pxToDp(10),
                margin: pxToDp(10)
              }}>
                <Image
                  style={{
                    height: pxToDp(150),
                    width: pxToDp(355),
                    borderRadius: pxToDp(10),
                    margin: pxToDp(10)
                  }}
                  source={require("../../../res/performer/10.jpg")}
                />
              </View>
            </Swiper>
=======
          {/* 轮播图 */}
          <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20) }}>
            <ImageFade
              ref="ImageFade"
              duration={800}
              delay={3000}
              style={{ width: "100%", height: pxToDp(200) }}>
              <Image style={{ width: "100%", height: pxToDp(200), borderRadius: pxToDp(20) }} source={require("../../../res/12.jpg")} />
              <Image style={{ width: "100%", height: pxToDp(200), borderRadius: pxToDp(20) }} source={require("../../../res/19-2.jpg")} />
            </ImageFade>
>>>>>>> 31a400942bff7127102d269d2baa88c7e9d92d1d
          </View>
          {/*俯瞰百年 */}
          <View style={{ margin: pxToDp(10), marginTop: pxToDp(0) }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  color: "#468CD3",
                  fontWeight: "bold",
                }}
              >
                精选唱段
              </Text>
              <TouchableOpacity
                onPress={() => this.context.navigate("PageFour")}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: pxToDp(15), color: "grey" }}>
                    查看更多
                  </Text>
                  <Ionicons name="chevron-forward" size={20} color="grey" />
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
              <View style={{ flexDirection: "row", marginTop: pxToDp(5) }}>
                <Image
                  style={{
                    height: pxToDp(130),
                    width: pxToDp(200),
                    borderRadius: pxToDp(10),
                  }}
                  source={require("../../../res/13.jpg")}
                />
                <Image
                  style={{
                    height: pxToDp(130),
                    width: pxToDp(200),
                    borderRadius: pxToDp(10),
                    marginLeft: pxToDp(10),
                  }}
                  source={require("../../../res/14.jpg")}
                />
                <Image
                  style={{
                    height: pxToDp(130),
                    width: pxToDp(200),
                    borderRadius: pxToDp(10),
                    marginLeft: pxToDp(10),
                  }}
                  source={require("../../../res/15.jpg")}
                />
                <Image
                  style={{
                    height: pxToDp(130),
                    width: pxToDp(200),
                    borderRadius: pxToDp(10),
                    marginLeft: pxToDp(10),
                  }}
                  source={require("../../../res/16.jpg")}
                />
              </View>
            </ScrollView>
          </View>
          {/*俯瞰百年 */}
          <View style={{ margin: pxToDp(10), marginTop: pxToDp(0) }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  color: "#468CD3",
                  fontWeight: "bold",
                }}
              >
                俯瞰百年
              </Text>
              <TouchableOpacity
                onPress={() => this.context.navigate("PageTwo")}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: pxToDp(15), color: "grey" }}>
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
          <View style={{ margin: pxToDp(10), marginTop: pxToDp(0) }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  color: "#468CD3",
                  fontWeight: "bold",
                }}
              >
                名角风采
              </Text>
              <TouchableOpacity
                onPress={() => this.context.navigate("PageThree")}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: pxToDp(15), color: "grey" }}>
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
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => this.context.navigate("Actress")}
              >
                <ActressView
                  picture={require("../../../res/performer/1.jpg")}
                  name="方亚芬"
                />
              </TouchableOpacity>
              <ActressView
                picture={require("../../../res/performer/2.jpg")}
                name="王文娟"
              />
              <ActressView
                picture={require("../../../res/performer/3.jpg")}
                name="王君安"
              />
              <ActressView
                picture={require("../../../res/performer/4.jpg")}
                name="茅威涛"
              />
              <ActressView
                picture={require("../../../res/performer/7.jpg")}
                name="蔡浙飞"
              />
              <ActressView
                picture={require("../../../res/performer/9.jpg")}
                name="何赛飞"
              />
              <ActressView
                picture={require("../../../res/performer/10.jpg")}
                name="陈丽君"
              />
            </View>
          </ScrollView>
          {/*流派故事 */}
          <View
            style={{
              margin: pxToDp(8),
              //    marginTop: pxToDp(0),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(18),
                  color: "#468CD3",
                  fontWeight: "bold",
                }}
              >
                流派传奇
              </Text>
              <TouchableOpacity
                onPress={() => this.context.navigate("PageOne")}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: pxToDp(15), color: "grey" }}>
                    查看更多
                  </Text>
                  <Ionicons name="chevron-forward" size={20} color="grey" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.context.navigate("School")}>
            <GenerView
              picture={require("../../../res/genre/1.jpg")}
              name="袁派"
              special="质朴平易，委婉细腻，深沉含蓄，韵味醇厚"
            />
          </TouchableOpacity>
          <GenerView
            picture={require("../../../res/genre/2.jpg")}
            name="范派"
            special="曲调华彩而有气派，唱腔深情缠绵"
          />
          <GenerView
            picture={require("../../../res/genre/3.jpg")}
            name="尹派"
            special="委婉缠绵，洒脱深沉，纯朴隽永，清新舒展"
          />
        </ScrollView>
      </View>
    );
  }
}
export default Index;