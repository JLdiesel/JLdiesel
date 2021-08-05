import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import Top from "../../component/common/top";
import Swiper from "react-native-swiper";
import { pxToDp } from "../../utils/styleKits";
import Feather from "react-native-vector-icons/Feather";
import { AlwaysOpen } from "../../component/common/hidemenu";

export default class index extends Component {
  render() {
    return (
      <View
        stickyHeaderIndices={[0]}
        style={{ backgroundColor: "green", width: "100%", height: "100%" }}
      >
        <Top icon1="arrow-back" title="时间轴" />
        <View
          style={{
            height: pxToDp(780),
            backgroundColor: "#7A575B",
          }}
        >
          <View style={{ height: pxToDp(250) }}>
            <Swiper
              removeClippedSubviews={false}
              showsButtons={true} //显示控制按钮
              showsPagination={true} //是否显示小圆点
              autoplayTimeout={3} //每隔3秒切换
            >
              <View style={styles.slide}>
                <ImageBackground
                  style={styles.image}
                  //   source={require("../../res/22.jpg")}
                ></ImageBackground>
              </View>
              <View style={styles.slide}>
                <ImageBackground
                  style={styles.image}
                  // source={require("../../res/8.jpg")}
                />
              </View>
              <View style={styles.slide}>
                <ImageBackground
                  style={styles.image}
                  //  source={require("../../res/performer/10.jpg")}
                />
              </View>
            </Swiper>
          </View>

          <AlwaysOpen />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    justifyContent: "center",
    alignItems: "center",
    height: pxToDp(230),
    borderRadius: pxToDp(10),
    margin: pxToDp(10),
  },
  image: {
    height: pxToDp(210),
    width: pxToDp(355),
    borderRadius: pxToDp(10),
    backgroundColor: "#666",
  },
});
