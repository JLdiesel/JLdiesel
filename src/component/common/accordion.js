import React, { Component } from "react";
import Collapsible from "react-native-collapsible";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { pxToDp } from "../../utils/styleKits";

export default class Acordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
      touch: true,
      collapsed: true,
      point: require("../../res/箭头上.png"),
      pointlater: require("../../res/箭头下.png"),
      data: [
        {
          id: "1",
          title: "创作时间",
          message: "",
        },
        {
          id: "2",
          title: "尺寸",
          message: "",
        },
        {
          id: "3",
          title: "提出者",
          message: "",
        },
        {
          id: "4",
          title: "时期/流派",
          message: "",
        },
        {
          id: "5",
          title: "构成要素",
          message: "",
        },
        {
          id: "6",
          title: "简称",
          message: "",
        },
        {
          id: "7",
          title: "创作者",
          message: "",
        },
        {
          id: "8",
          title: "表演形式",
          message: "",
        },
        {
          id: "9",
          title: "题材",
          message: "",
        },
        {
          id: "10",
          title: "主要流派",
          message: "袁雪芬派、范瑞娟派、尹桂芳派",
        },
        {
          id: "11",
          title: "形成时间",
          message: "清末",
        },
        {
          id: "12",
          title: "国家/地域",
          message: "苏浙沪",
        },
        {
          id: "13",
          title: "别称",
          message: "女子科班、绍兴女子文戏",
        },
      ],
    };
  }
  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
    const { touch } = this.state;
    this.setState({ touch: !touch });
  };
  render() {
    const { point, pointlater, touch } = this.state;
    return (
      <ScrollView>
        <View>
          <Text style={{ fontSize: pxToDp(16) }}>
            越剧，中国主要戏曲剧种之一，起源于浙江嵊州，兴盛于上海，主要流行于苏浙沪等地区，目前为
            中国第二大戏曲剧种。越剧曲调婉转柔美，小提琴协奏曲《梁祝》的主旋律就采用了越剧的曲调。
            越剧在早期只有男演员，进入上海发展后因女班演出广受欢迎，发展为各角色均有女演员扮演的女子越剧。1949年后，开始
          </Text>
        </View>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <View>
            <Text style={{ fontSize: pxToDp(16) }}>
              招收部分男演员，但现在仍以女子越剧为主。越剧原来流行于苏
              浙沪一带，后在中国广受欢迎。越剧舞台语音的基础语音是嵊县方言音。在越剧发展过程中，越剧
              语音在嵊州方言的基础上，吸收了中州音韵和官话的语音，这初始越剧扩大了观众范围。
              {"\n"}
              南方的新生剧种也不乏枚举，如丹剧、杭剧、海门山歌剧、黄戏、坐子戏淮剧、甬剧、湖剧等等。
              越剧是其中最具南方地域特色--阴柔之美的典型。
            </Text>
            <Text style={{ color: "#666", fontSize: pxToDp(14) }}>
              本站的全部概述文字在知识共享
              署名-相同方式共享3.0协议之条款下提供，附加条款亦可能应用。
              （请参阅使用条款）
            </Text>
          </View>
        </Collapsible>
        <TouchableOpacity onPress={this.toggleExpanded}>
          <Image
            style={{
              width: pxToDp(20),
              height: pxToDp(20),
              marginLeft: pxToDp(160),
            }}
            source={touch ? pointlater : point}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginLeft: pxToDp(20) }}>
            {this.state.data.map((item, index) => (
              <Text>{item.title}</Text>
            ))}
          </View>
          <View
            style={{
              marginLeft: pxToDp(30),
              width: pxToDp(220),
            }}
          >
            {this.state.data.map((item, index) => (
              <Text numberOfLines={1}>{item.message}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
});
