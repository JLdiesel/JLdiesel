import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { pxToDp } from "@utils/styleKits";
import { NavigationContext } from "@react-navigation/native";
import Top from "@components/common/top";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View>
        <Top icon1="arrow-back" title="周边商城" />
        <ScrollView style={styles.scrollview}>
          <View style={styles.tcard}>
            <View style={styles.ocard}>
              <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                <Image
                  style={styles.image}
                  source={require("../../../../res/shop/8.jpg")}
                ></Image>
                <Text style={{ fontSize: pxToDp(15) }}>《柳毅传书》笔记本</Text>
                <View style={styles.bottext}>
                  <Text style={{ color: "#B22222" }}>￥58.0</Text>
                  <Text style={{ color: "grey" }}>8人购买</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.ocard}>
              <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                <Image
                  style={styles.image}
                  source={require("../../../../res/shop/9.jpg")}
                ></Image>
                <Text style={{ fontSize: pxToDp(15) }}>卷尺</Text>
                <View style={styles.bottext}>
                  <Text style={{ color: "#B22222" }}>￥28.0</Text>
                  <Text style={{ color: "grey" }}>5人购买</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.ocard}>
              <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                <Image
                  style={styles.image}
                  source={require("../../../../res/shop/10.jpg")}
                ></Image>
                <Text style={{ fontSize: pxToDp(15) }}>
                  《柳毅传书》立体插画
                </Text>
                <View style={styles.bottext}>
                  <Text style={{ color: "#B22222" }}>￥58.0</Text>
                  <Text style={{ color: "grey" }}>20人购买</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.ocard}>
              <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                <Image
                  style={styles.image}
                  source={require("../../../../res/shop/11.jpg")}
                ></Image>
                <Text style={{ fontSize: pxToDp(15) }}>越剧戏服手提袋</Text>
                <View style={styles.bottext}>
                  <Text style={{ color: "#B22222" }}>￥68.0</Text>
                  <Text style={{ color: "grey" }}>101人购买</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.ocard}>
              <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                <Image
                  style={styles.image}
                  source={require("../../../../res/shop/12.jpg")}
                ></Image>
                <Text style={{ fontSize: pxToDp(15) }}>越剧人物鼠标垫</Text>
                <View style={styles.bottext}>
                  <Text style={{ color: "#B22222" }}>￥39.9</Text>
                  <Text style={{ color: "grey" }}>11人购买</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.ocard}>
              <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                <Image
                  style={styles.image}
                  source={require("../../../../res/shop/13.jpg")}
                ></Image>
                <Text style={{ fontSize: pxToDp(15) }}>越剧人物折扇</Text>
                <View style={styles.bottext}>
                  <Text style={{ color: "#B22222" }}>￥59.9</Text>
                  <Text style={{ color: "grey" }}>11人购买</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.ocard}>
              <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                <Image
                  style={styles.image}
                  source={require("../../../../res/shop/14.jpg")}
                ></Image>
                <Text style={{ fontSize: pxToDp(15) }}>越剧书签</Text>
                <View style={styles.bottext}>
                  <Text style={{ color: "#B22222" }}>￥9.9</Text>
                  <Text style={{ color: "grey" }}>11人购买</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.ocard}>
              <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                <Image
                  style={styles.image}
                  source={require("../../../../res/shop/15.jpg")}
                ></Image>
                <Text style={{ fontSize: pxToDp(15) }}>越剧唱片</Text>
                <View style={styles.bottext}>
                  <Text style={{ color: "#B22222" }}>￥129</Text>
                  <Text style={{ color: "grey" }}>11人购买</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "#E2F4FE",
    marginBottom: pxToDp(70),
  },
  tcard: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: pxToDp(420),
  },
  ocard: {
    backgroundColor: "white",
    width: pxToDp(170),
    borderRadius: pxToDp(10),
    margin: pxToDp(10),
    marginRight: pxToDp(5),
  },
  image: {
    height: pxToDp(170),
    width: pxToDp(170),
    borderTopLeftRadius: pxToDp(10),
    borderTopRightRadius: pxToDp(10),
  },
  bottext: {
    flexDirection: "row",
    margin: pxToDp(5),
    justifyContent: "space-between",
  },
});
export default Index;
