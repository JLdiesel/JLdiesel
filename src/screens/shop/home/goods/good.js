import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import Top from "../../../../component/common/top";
import { pxToDp } from "../../../../utils/styleKits";
import { NavigationContext } from "@react-navigation/native";
import Lightbox from "react-native-lightbox";
import Carousel from "react-native-looped-carousel";
import RBSheet from "react-native-raw-bottom-sheet";

const WINDOW_WIDTH = Dimensions.get("window").width;
const BASE_PADDING = 10;



class shopdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      products: [
        {
          id: 1,
          text: "红色aaaaaaa",
          weight: "全套",
          imgUri:
            "https://img20.360buyimg.com/imgzone/jfs/t1/190571/34/12335/52311/60e68717E0199cac9/1492d2c4b569dd1a.jpg",
        },
        {
          id: 2,
          text: "粉色",
          weight: "全套",
          imgUri:
            "https://img30.360buyimg.com/imgzone/jfs/t1/185921/14/13299/64961/60e68717E994b4e11/f4293d93cc127341.jpg",
        },
        {
          id: 3,
          text: "绿色",
          weight: "全套",
          imgUri:
            "https://img11.360buyimg.com/imgzone/jfs/t1/178143/10/13271/54708/60e68718E2e4aa44c/792cfcbe006f8bf4.jpg",
        },
        {
          id: 4,
          text: "黄色",
          weight: "全套",
          imgUri:
            "https://img12.360buyimg.com/imgzone/jfs/t1/186471/16/12270/114029/60e6871aE7719a6fe/8a034db53107b527.jpg",
        },
      ],

      shop:{id:1,record: "花旦戏服", nowprice: "166.90", beforeprice: "199.99",comment: 
        "花旦戏服戏剧服装越剧小姐戏服装女新款 白色 女披+水袖+裙子(+护领) ",
        imgURL:"https://img20.360buyimg.com/imgzone/jfs/t1/172012/34/18776/85309/60e68716E853b5d5d/f061df06cb1786b6.jpg",
   
      },
      Select: false,
      activeTab: 1,
      guanbi: false,
      shopimg:[{id:1,imguri:"https://img20.360buyimg.com/imgzone/jfs/t1/190571/34/12335/52311/60e68717E0199cac9/1492d2c4b569dd1a.jpg",},
              {id:1,imguri:"https://img20.360buyimg.com/imgzone/jfs/t1/190571/34/12335/52311/60e68717E0199cac9/1492d2c4b569dd1a.jpg",},
              {id:1,imguri:"https://img20.360buyimg.com/imgzone/jfs/t1/190571/34/12335/52311/60e68717E0199cac9/1492d2c4b569dd1a.jpg",},
              {id:1,imguri:"https://img20.360buyimg.com/imgzone/jfs/t1/190571/34/12335/52311/60e68717E0199cac9/1492d2c4b569dd1a.jpg",},]
    };
  }
  renderCarousel = () => (
    <Carousel style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
      {this.state.shopimg.map((item,id)=>(
      <Image
        key={id}
        style={{ flex: 1 }}
        resizeMode="contain"
        source={{
          uri:item.imguri,
        }}
      />))}
    </Carousel>
  );

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
    if (this.state.count > 1) {
      this.setState({
        guanbi: false,
      });
    } else {
      this.setState({
        guanbi: true,
      });
    }
  };

  onIt = () => {
    this.setState({
      count: this.state.count - 1,
    });
    if (this.state.count > 2) {
      this.setState({
        guanbi: false,
      });
    } else {
      this.setState({
        guanbi: true,
      });
    }
  };

  changeTab = (index) => {
    this.setState({ activeTab: index });
  };
  static contextType = NavigationContext;

  render() {
    const { count, tabs, activeTab } = this.state;
    console.log(activeTab);
    return (
      <View style={{ flex: 1 }}>
        {/* 顶部导航 */}
        <Top icon1="arrow-back" title="猜你喜欢" />

        <ScrollView
          style={{
            flex: 1,
            paddingBottom: pxToDp(40),
          }}
        >
          {/* 商品图片 */}

          <View style={{ alignItems: "center", marginTop: pxToDp(20) }}>
            <Lightbox
              springConfig={{ tension: 15, friction: 7 }}
              swipeToDismiss={true}
              renderContent={this.renderCarousel}
            >
              <Image
                style={{
                  width: pxToDp(230),
                  height: pxToDp(200),
                  borderRadius: pxToDp(5),
                }}
                source={{
                  uri: this.state.shop.imgURL,
                }}
              />
            </Lightbox>
          </View>

          {/* 品名 价格 */}
          <View style={{ alignItems: "center", marginTop: pxToDp(20) }}>
            <Text style={{ fontSize: pxToDp(22), fontWeight: "bold" }}>
              {this.state.shop.record}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Text style={{ fontSize: pxToDp(20), fontWeight: "bold" }}>
                ￥{this.state.shop.nowprice}
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(12),
                  textDecorationLine: "line-through",
                  marginLeft: pxToDp(10),
                }}
              >
                ￥{this.state.shop.beforeprice}
              </Text>
            </View>
          </View>

          {/* 商品详情 */}

          <View
            style={{
              marginLeft: pxToDp(15),
              marginRight: pxToDp(15),
              marginTop: pxToDp(15),
            }}
          >
            <Text>{this.state.shop.comment}</Text>
          </View>

          {/* 购买规格 */}
          {/* <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            {this.state.products.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => this.changeTab(index)}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      index === activeTab ? "#468cd3" : "#ecf6fc",
                  },
                ]}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontWeight: index === activeTab ? "bold" : "normal",
                    }}
                  >
                    {item.text}
                  </Text>
                  <Text>{item.weight}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View> */}
          <View style={{ marginTop: pxToDp(20) }}>
            <View>
              <Image
                style={{
                  resizeMode: "cover",
                  height: pxToDp(500),
                  marginLeft: pxToDp(15),
                  marginRight: pxToDp(15),
                }}
                source={{
                  uri: "https://img20.360buyimg.com/imgzone/jfs/t1/190571/34/12335/52311/60e68717E0199cac9/1492d2c4b569dd1a.jpg",
                }}
              />
            </View>
          </View>
        </ScrollView>
        {/* 颜色分类弹窗 */}
        <RBSheet
          ref={(ref) => {
            this.Scrollable = ref;
          }}
          height={400}
          closeOnDragDowncustomStyles={{
            container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
          }}
        >
          <View>
            <View style={{ borderBottomWidth: pxToDp(1.1) }}>
              <Text
                style={{
                  marginLeft: pxToDp(25),
                  fontSize: pxToDp(20),
                  marginTop: pxToDp(10),
                }}
              >
                颜色分类
              </Text>
            </View>
            <View>
              {this.state.products.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => this.changeTab(index)}
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: pxToDp(20),
                    marginLeft: pxToDp(20),
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      backgroundColor: "#aaa",
                      height: pxToDp(50),
                    }}
                  >
                    <Image
                      style={{
                        width: pxToDp(30),
                        height: pxToDp(30),
                        borderRadius: pxToDp(5),
                        margin: pxToDp(10),
                      }}
                      source={{ uri: item.imgUri }}
                    />
                    <Text
                      style={{
                        marginLeft: pxToDp(5),
                        alignSelf: "center",
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </RBSheet>
        {/* 购买数量 */}
        <View style={{ height: pxToDp(40) }}>
          {/*  <View
            style={{
              margin: pxToDp(13),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>数量</Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D3D3D3",
                width: pxToDp(100),
                height: pxToDp(30),
                flexDirection: "row",
                justifyContent: "space-between",
                borderRadius: pxToDp(8),
              }}
            >
              <TouchableOpacity
                onPress={this.onIt}
                disabled={this.state.guanbi}
                style={{ marginLeft: pxToDp(10) }}
              >
                <Text style={{ fontWeight: "bold", fontSize: pxToDp(20) }}>
                  -
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: pxToDp(15) }}>{count}</Text>
              <TouchableOpacity
                onPress={this.onPress}
                style={{ marginRight: pxToDp(10) }}
              >
                <Text style={{ fontWeight: "bold", fontSize: pxToDp(20) }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View> */}

          {/* 购买按钮 */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              onPress={() => this.Scrollable.open()}
              style={{
                borderRadius: pxToDp(20),
                justifyContent: "center",
                alignItems: "center",
                width: pxToDp(160),
                height: pxToDp(40),
                backgroundColor: "#D3D3D3",
              }}
            >
              <Text>加入购物车</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('orders')} style={{ borderRadius: pxToDp(20), justifyContent: "center", alignItems: "center", width: pxToDp(160), backgroundColor: "orange" }}> */}
            <TouchableOpacity
              onPress={() => this.context.navigate("Myorder")}
              style={{
                borderRadius: pxToDp(20),
                justifyContent: "center",
                alignItems: "center",
                width: pxToDp(160),
                backgroundColor: "orange",
              }}
            >
              <Text>立即购买</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  decrease() {
    // 单击减少
    let newValue = this.props.defaultValue - this.props.step;
    if (newValue < this.props.min) {
      newValue = this.props.min;
    }
    this.setState(
      {
        currentNumber: newValue,
      },
      () => {
        this.onChange(newValue);
      }
    );
  }

  increase() {
    // 单击增加
    let newValue = this.props.defaultValue + this.props.step;

    if (newValue > this.props.max) {
      newValue = this.props.max;
    }
    this.setState(
      {
        currentNumber: newValue,
      },
      () => {
        this.onChange(newValue);
      }
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: pxToDp(80),
    height: pxToDp(70),
    borderRadius: pxToDp(5),
    marginTop: pxToDp(15),
    borderRadius: pxToDp(5),
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    padding: 8,
    borderRadius: 3,
    textAlign: "center",
    margin: 10,
    alignSelf: "flex-end",
  },
});
export default shopdetails;
