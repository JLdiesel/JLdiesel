import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Top from '@components/common/top';
import ImageFade from '../../../component/ImageFade/index'
import ActressView from '@components/common/actressview';
import GenerView from '@components/common/generview';
import { NavigationContext } from "@react-navigation/native";
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
        <Top title="百越台" icon2="search" />
        <ScrollView style={{ marginBottom: 60 }}>
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
          </View>
          {/*精选唱段 */}
          <View style={{ margin: pxToDp(10) }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>精选唱段</Text>
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
                  style={styles.image2}
                  source={require("../../../res/13.jpg")}
                />
                <Image
                  style={styles.image2}
                  source={require("../../../res/14.jpg")}
                />
                <Image
                  style={styles.image2}
                  source={require("../../../res/15.jpg")}
                />
                <Image
                  style={styles.image2}
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
              <Text style={styles.title}>俯瞰百年</Text>
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
          <TouchableOpacity
            onPress={() => this.context.navigate("Article")}
          >
            <View
              style={styles.articlebox}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  width: pxToDp(220),
                }}
              >
                <Text style={{ fontSize: pxToDp(17) }}>
                  嵊州：越剧的起源地
                </Text>
                <Text
                  style={{
                    fontSize: pxToDp(13),
                    color: "grey",
                    marginTop: pxToDp(10),
                  }}
                >
                  名家名篇
                </Text>
              </View>
              <Image
                style={styles.image3}
                source={require("../../../res/history/1.jpg")}
              />
            </View>
          </TouchableOpacity>
          <View
            style={styles.articlebox}
          >
            <View
              style={{
                justifyContent: "space-between",
                width: pxToDp(220),
              }}
            >
              <Text style={{ fontSize: pxToDp(17) }} numberOfLines={2}>
                越剧十姐妹同台演出轰动上海
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(13),
                  color: "grey",
                  marginTop: pxToDp(10),
                }}
              >
                书摘
              </Text>
            </View>
            <Image
              style={styles.image3}
              source={require("../../../res/history/2.jpg")}
            />
          </View>
          <View
            style={styles.articlebox}
          >
            <View
              style={{
                justifyContent: "space-between",
                width: pxToDp(220),
              }}
            >
              <Text style={{ fontSize: pxToDp(17) }} numberOfLines={2}>
                新中国的第一部彩色戏曲艺术片越剧电影
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(13),
                  color: "grey",
                  marginTop: pxToDp(10),
                }}
              >
                拓跋云
              </Text>
            </View>
            <Image
              style={styles.image3}
              source={require("../../../res/history/3.jpg")}
            />
          </View>
          {/*名角风采 */}
          <View style={{ margin: pxToDp(10), marginTop: pxToDp(0) }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>名角风采</Text>
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
              <Text style={styles.title}>流派传奇</Text>
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
const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToDp(150),
    borderRadius: pxToDp(10),
    margin: pxToDp(10)
  },
  image1: {
    height: pxToDp(150),
    width: pxToDp(355),
    borderRadius: pxToDp(10),
    margin: pxToDp(10)
  },
  title: {
    fontSize: pxToDp(18),
    color: "#468CD3",
    fontWeight: "bold",
  },
  image2: {
    height: pxToDp(130),
    width: pxToDp(200),
    borderRadius: pxToDp(10),
    marginLeft: pxToDp(10)
  },
  articlebox: {
    margin: pxToDp(15),
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: pxToDp(0.5),
    borderBottomColor: "grey",
    marginTop: pxToDp(0),
    height: pxToDp(100),
    alignItems: "center",
  },
  image3: {
    height: pxToDp(80),
    width: pxToDp(100),
    margin: pxToDp(10),
    borderRadius: pxToDp(10),
  }
})
export default Index;