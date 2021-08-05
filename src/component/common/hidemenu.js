import React, { PureComponent, createRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { pxToDp } from "../../utils/styleKits";
import { NavigationContext } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import SvgUri from "react-native-svg-uri";
import { map, timeline, img, book } from "./iconSvg";
import Accordion from "./accordion";
const height = Dimensions.get("screen").height;
export class AlwaysOpen extends PureComponent {
  modalizeRef = createRef(null);
  renderContent = () => (
    <View
      style={{
        padding: 20,
        flex: 1,
        backgroundColor: "#62649f",
        borderRadius: pxToDp(12),
      }}
    >
      {/*  */}
      <View style={{ backgroundColor: "#92d5dd" }}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            height: pxToDp(40),
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: pxToDp(18),
              color: "#fff",
              fontWeight: "bold",
              margin: pxToDp(10),
            }}
          >
            越剧
          </Text>
        </View>

        {/* 时空地图、时间线、相关图片 */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {/* 时空地图 */}
          <TouchableOpacity>
            <View
              style={{
                justifyContent: "center",
                height: pxToDp(60),
              }}
            >
              <SvgUri svgXmlData={map} width="30" height="30" />
              <Text style={{ left: pxToDp(-12), marginTop: pxToDp(4) }}>
                时空地图
              </Text>
            </View>
          </TouchableOpacity>
          {/* 时间线 */}
          <TouchableOpacity>
            <View style={{ justifyContent: "center", height: pxToDp(60) }}>
              <SvgUri svgXmlData={timeline} width="30" height="30" />
              <Text style={{ left: pxToDp(-6), marginTop: pxToDp(4) }}>
                时间线
              </Text>
            </View>
          </TouchableOpacity>
          {/* 相关图片 */}
          <TouchableOpacity>
            <View style={{ justifyContent: "center", height: pxToDp(60) }}>
              <SvgUri svgXmlData={img} width="30" height="30" />
              <Text style={{ left: pxToDp(-12), marginTop: pxToDp(4) }}>
                相关图片
              </Text>
            </View>
          </TouchableOpacity>
          {/* 相关书籍 */}
          <TouchableOpacity>
            <View style={{ justifyContent: "center", height: pxToDp(60) }}>
              <SvgUri svgXmlData={book} width="30" height="30" />
              <Text style={{ left: pxToDp(-12), marginTop: pxToDp(4) }}>
                相关书籍
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={s.bigbox}>
        <View
          style={{
            borderBottomColor: "#666",
            borderBottomWidth: pxToDp(1.1),
            margin: pxToDp(10),
          }}
        >
          <Text
            style={{
              fontSize: pxToDp(18),
              color: "#fff",
              marginBottom: pxToDp(5),
            }}
          >
            概述
          </Text>
        </View>

        <Accordion />
      </View>
    </View>
  );
  render() {
    return (
      <Modalize
        ref={this.modalizeRef}
        modalStyle={s.content__modal}
        alwaysOpen={500}
        handlePosition="inside"
      >
        {this.renderContent()}
      </Modalize>
    );
  }
}

const s = StyleSheet.create({
  content__modal: {
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 16,
  },

  content__subheading: {
    marginBottom: 2,

    fontSize: 16,
    fontWeight: "600",
    color: "#ccc",
  },

  content__heading: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },

  content__description: {
    paddingTop: 10,
    paddingBottom: 10,

    fontSize: 15,
    fontWeight: "200",
    lineHeight: 22,
    color: "#666",
  },
  bigbox: {
    height: 560,
    backgroundColor: "#13a284",
    marginTop: pxToDp(20),
  },
});
