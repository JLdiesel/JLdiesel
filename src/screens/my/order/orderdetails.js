import React, { PureComponent } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Alert
} from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top';
import LinearGradient from 'expo-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContext } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
class orderdetails extends PureComponent {
  showAlert() {
    Alert.alert('是否确认收货？', '确认后就不可更改了哦', [
      { text: '取消', onPress: this.opntion1Selected },
      {
        text: '确认',

        onPress: () =>
          this.setState({
            colors: '#aaa',
            Application: '已收货',
            isshoushuo: true
          })
      }
    ]);
  }

  state = {
    way: '',
    Application: '确认收货',
    colors: '#ecf6fc',
    isshoushuo: false
  };
  static defaultProps = {
    style: {},
    textStyle: {},
    cisabled: false
  };
  static contextType = NavigationContext;
  render() {
    console.log('new', this.props.route.params);
    let invoice = [
      { id: 7, content: '已签收,签收人：门卫', ctime: '2021-9-1 16:00' },
      { id: 6, content: '派送中,您的快递即将送达', ctime: '2021-9-1 15:41' },
      {
        id: 5,
        content:
          '【杭州市】已离开浙江杭州分拨交付中心；发往 浙江省杭州拱墅区建华公司',
        ctime: '2021-9-1 7:17'
      },
      {
        id: 4,
        content: '【泉州市】 已到达福建晋江分拨交付中心',
        ctime: '2021-8-31 13:22'
      },
      { id: 3, content: '已揽件', ctime: '2021-8-31 8:06' },
      { id: 2, content: '已发货', ctime: '2021-8-30 14:10' },
      { id: 1, content: '已下单', ctime: '2021-8-30 12:59' }
    ];
    let items = [];
    invoice.map((el, index) => {
      let colorValue = index === 0 ? '#0b74c4' : '#888';
      let backgroundColor = index === 0 ? '#0b74c4' : '#e0e0e0';
      items.push(
        <View style={styles.expressItem} key={index}>
          <View style={styles.expressRightFirst}>
            <View style={styles.process}>
              <Text style={{ color: colorValue, fontSize: 14 }}>
                {el.content}
              </Text>
              <Text style={{ color: colorValue, fontSize: 12 }}>
                {el.ctime}
              </Text>
            </View>
          </View>
          <View
            style={[styles.expressLeft, { backgroundColor: backgroundColor }]}
          />
        </View>
      );
    });
    const {
      count,
      shopId,
      shopCarId,
      howPay,
      addressId,
      color,
      title,
      price,
      img,
      create_time
    } = this.props.route.params;
    const { name, address, phoneNum } = this.props.route.params.address;
    return (
      <View style={{ backgroundColor: '#e2f4fe', flex: 1 }}>
        <Top title="我的订单" icon1="arrow-back" />
        {/* 地址 */}
        <View
          style={{
            marginLeft: pxToDp(10),
            marginRight: pxToDp(10),
            justifyContent: 'center',
            backgroundColor: 'white',
            height: pxToDp(90),
            borderRadius: pxToDp(10)
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginLeft: pxToDp(20),
              marginBottom: pxToDp(2)
            }}
          >
            <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>
              {name}
            </Text>
            <Text
              style={{
                marginLeft: pxToDp(20),
                fontSize: pxToDp(15),
                fontWeight: 'bold'
              }}
            >
              {phoneNum}
            </Text>
          </View>
          <View style={{ marginLeft: pxToDp(20), marginTop: pxToDp(2) }}>
            <Text>{address}</Text>
          </View>
        </View>
        {/* 商品 */}
        <View
          style={{
            height: pxToDp(140),
            flexDirection: 'row',
            backgroundColor: 'white',
            marginLeft: pxToDp(10),
            marginRight: pxToDp(10),
            bottom: pxToDp(10),
            borderRadius: pxToDp(10)
          }}
        >
          <View style={{ justifyContent: 'center', marginLeft: pxToDp(15) }}>
            <Image
              style={{ width: pxToDp(110), height: pxToDp(110) }}
              source={{
                uri: img
              }}
            />
          </View>
          <View
            style={{
              marginLeft: pxToDp(8),
              marginTop: pxToDp(18),
              justifyContent: 'space-between'
            }}
          >
            <Text style={{ fontSize: pxToDp(17), fontWeight: 'bold' }}>
              {title}
            </Text>
            <View
              style={{
                marginBottom: pxToDp(30),
                width: pxToDp(220),
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ fontSize: pxToDp(14) }}>{color}</Text>
              <Text style={{ fontSize: pxToDp(14), marginRight: pxToDp(10) }}>
                X{count}
              </Text>
            </View>
            <View style={{ marginBottom: pxToDp(15) }}>
              <Text
                style={{
                  fontSize: pxToDp(18),
                  color: 'red',
                  fontWeight: 'bold'
                }}
              >
                ￥{price * count}
              </Text>
            </View>
          </View>
        </View>
        {/* 订单 */}
        <View
          style={{
            height: pxToDp(150),
            backgroundColor: 'white',
            marginLeft: pxToDp(10),
            marginRight: pxToDp(10)
          }}
        >
          <View
            style={{
              marginLeft: pxToDp(15),
              marginTop: pxToDp(15),
              height: pxToDp(80),
              justifyContent: 'space-around'
            }}
          >
            <Text>订单编号: 109878783472</Text>
            <Text>下单时间: {create_time}</Text>
            <Text>
              支付方式:{' '}
              {howPay === 0
                ? '微信支付'
                : howPay === 1
                ? '支付宝支付'
                : '银行卡支付'}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flex: 1
            }}
          >
            <TouchableOpacity style={styles.smallbox1}>
              <Image
                style={{ width: pxToDp(25), height: pxToDp(25) }}
                source={require('../../../res/客服.png')}
              />
              <Text>我的客服</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallbox2}>
              <Image
                style={{ width: pxToDp(25), height: pxToDp(25) }}
                source={require('../../../res/电话.png')}
              />
              <Text>拨打电话</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* 价格 */}
        <View
          style={{
            backgroundColor: 'white',
            height: pxToDp(120),
            margin: pxToDp(10)
          }}
        >
          <View style={styles.pricebox}>
            <Text style={{ fontSize: pxToDp(14) }}>商品金额</Text>
            <Text style={styles.textbox}>￥{price * count}</Text>
          </View>
          <View style={styles.pricebox}>
            <Text style={{ fontSize: pxToDp(14) }}>运费</Text>
            <Text style={styles.textbox}>包邮</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: pxToDp(10),
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
          >
            <TouchableOpacity
              onPress={() => this.Scrollable.open()}
              style={{
                left: pxToDp(10),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: pxToDp(25),
                marginRight: pxToDp(20),
                width: pxToDp(80),
                height: pxToDp(30)
              }}
            >
              <Text>查看物流</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.showAlert.bind(this)}
              disabled={this.state.isshoushuo}
              style={{
                borderRadius: pxToDp(35),
                marginRight: pxToDp(20),
                width: pxToDp(130),
                height: pxToDp(40),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: this.state.colors
              }}
            >
              <Text>{this.state.Application}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <RBSheet
          ref={(ref) => {
            this.Scrollable = ref;
          }}
          height={pxToDp(600)}
          closeOnDragDowncustomStyles={{
            container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 }
          }}
        >
          <ScrollView>
            <View style={{ backgroundColor: '#468cd3', height: pxToDp(150) }}>
              <View
                style={{
                  height: pxToDp(40),
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ fontSize: pxToDp(20), color: '#ecf6fc' }}>
                  已签收
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: pxToDp(10),
                  marginTop: 0,
                  height: pxToDp(100)
                }}
              >
                <Image
                  style={{
                    width: pxToDp(100)
                  }}
                  source={{ uri: img }}
                />
                <View
                  style={{
                    marginLeft: pxToDp(8),
                    marginRight: pxToDp(8),
                    width: pxToDp(220),
                    justifyContent: 'space-around'
                  }}
                >
                  <Text style={{ color: '#ecf6fc' }}>
                    {title} {color}
                  </Text>
                  <Text style={{ color: '#ecf6fc' }}>
                    中通快递:CC176548554455
                  </Text>
                  <Text style={{ fontSize: pxToDp(18), color: '#ecf6fc' }}>
                    已送达
                  </Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <AntDesign name="right" size={pxToDp(18)} color="#ecf6fc" />
                </View>
              </View>
            </View>
            <View
              style={{
                height: pxToDp(450),
                marginTop: pxToDp(20)
              }}
            >
              <View>{items}</View>
            </View>
          </ScrollView>
        </RBSheet>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: pxToDp(15),
    paddingRight: pxToDp(15),
    borderRadius: pxToDp(5),
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: pxToDp(15),
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
  smallbox1: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallbox2: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pricebox: {
    marginTop: pxToDp(10),
    flexDirection: 'row',
    marginLeft: pxToDp(15),
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  textbox: {
    fontSize: pxToDp(14),
    marginRight: pxToDp(10),
    fontWeight: 'bold',
    color: 'red'
  },
  process: {
    paddingVertical: pxToDp(10),
    flexDirection: 'column',
    paddingRight: pxToDp(20)
  },
  expressRightFirst: {
    width: Dimensions.get('window').width,
    paddingLeft: pxToDp(25),
    borderLeftWidth: pxToDp(1),
    borderLeftColor: '#e0e0e0',
    flexDirection: 'column'
  },
  expressItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: pxToDp(40),
    width: Dimensions.get('window').width
  },
  expressLeft: {
    width: pxToDp(10),
    height: pxToDp(10),
    borderRadius: pxToDp(5),
    backgroundColor: '#e0e0e0',
    position: 'relative',
    right: Dimensions.get('window').width + 4,
    top: pxToDp(20)
  }
});
export default orderdetails;
