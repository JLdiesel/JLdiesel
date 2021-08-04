import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits';
import Swiper from 'react-native-swiper';
import { NavigationContext } from '@react-navigation/native';
class Index extends Component {
  state = {
    ocard: [
      {
        picture:
          'https://tse1-mm.cn.bing.net/th/id/R-C.ca4828003ac2f6ed7f8389ece8724e4f?rik=gg63zFCjkPGseA&riu=http%3a%2f%2fi0.hdslb.com%2fbfs%2farchive%2fca3b1eb680b8d5f300316e4201bddaaeeb0ce9ed.jpg&ehk=gRg2wLevOeMLqtyFFXB7lkiH0DFL7b5llgv6yLjdDZ0%3d&risl=&pid=ImgRaw&r=0',
        name: '《西厢记》戏服租赁1',
        price: '￥58.0',
        number: '8人购买'
      },
      {
        picture:
          'https://tse1-mm.cn.bing.net/th/id/R-C.ca4828003ac2f6ed7f8389ece8724e4f?rik=gg63zFCjkPGseA&riu=http%3a%2f%2fi0.hdslb.com%2fbfs%2farchive%2fca3b1eb680b8d5f300316e4201bddaaeeb0ce9ed.jpg&ehk=gRg2wLevOeMLqtyFFXB7lkiH0DFL7b5llgv6yLjdDZ0%3d&risl=&pid=ImgRaw&r=0',
        name: '《西厢记》戏服租赁2',
        price: '￥58.0',
        number: '8人购买'
      },
      {
        picture:
          'https://tse1-mm.cn.bing.net/th/id/R-C.ca4828003ac2f6ed7f8389ece8724e4f?rik=gg63zFCjkPGseA&riu=http%3a%2f%2fi0.hdslb.com%2fbfs%2farchive%2fca3b1eb680b8d5f300316e4201bddaaeeb0ce9ed.jpg&ehk=gRg2wLevOeMLqtyFFXB7lkiH0DFL7b5llgv6yLjdDZ0%3d&risl=&pid=ImgRaw&r=0',
        name: '《西厢记》戏服租赁3',
        price: '￥58.0',
        number: '8人购买'
      },
      {
        picture:
          'https://tse1-mm.cn.bing.net/th/id/R-C.ca4828003ac2f6ed7f8389ece8724e4f?rik=gg63zFCjkPGseA&riu=http%3a%2f%2fi0.hdslb.com%2fbfs%2farchive%2fca3b1eb680b8d5f300316e4201bddaaeeb0ce9ed.jpg&ehk=gRg2wLevOeMLqtyFFXB7lkiH0DFL7b5llgv6yLjdDZ0%3d&risl=&pid=ImgRaw&r=0',
        name: '《西厢记》戏服赁4',
        price: '￥58.0',
        number: '8人购买'
      }
    ]
  };
  static contextType = NavigationContext;
  render() {
    return (
      <View>
        <Top title="越市" />
        <ScrollView style={{ marginBottom: pxToDp(70) }}>
          {/*轮播 */}
          <View style={{ height: pxToDp(240) }}>
            <Swiper
              removeClippedSubviews={false}
              showsButtons={false}
              loop={true}
              autoplay={true}
              showsPagination={false}
              autoplayTimeout={3}
              style={{ marginTop: pxToDp(15) }}
            >
              <View style={styles.slide}>
                <Image
                  style={styles.lunboimage}
                  source={require('../../../res/19.jpg')}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  style={styles.lunboimage}
                  source={require('../../../res/19-1.jpg')}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  style={styles.lunboimage}
                  source={require('../../../res/19-2.jpg')}
                />
              </View>
            </Swiper>
          </View>
          {/*小推广 */}
          <View
            style={{
              height: pxToDp(20),
              marginLeft: pxToDp(10),
              marginBottom: pxToDp(15)
            }}
          >
            <Text
              style={{
                color: '#468CD3',
                fontSize: pxToDp(18),
                fontWeight: 'bold',
                position: 'absolute'
              }}
            >
              长袖轻舞，越音袅袅
            </Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <View style={styles.box}>
              <Image
                style={styles.image2}
                source={require('../../../res/7.jpg')}
              />
              <Text style={styles.text}>今日特惠</Text>
            </View>
            <View style={styles.box}>
              <Image
                style={styles.image2}
                source={require('../../../res/13.jpg')}
              />
              <Text style={styles.text}>更低价格</Text>
            </View>
            <View style={styles.box}>
              <Image
                style={styles.image2}
                source={require('../../../res/16.jpg')}
              />
              <Text style={styles.text}>当季新品</Text>
            </View>
          </View>
          {/*戏服租赁 */}
          <View style={{ margin: pxToDp(10) }}>
            <TouchableOpacity onPress={() => this.context.navigate('Zulin')}>
              <Image
                style={styles.image3}
                source={require('../../../res/30.jpg')}
              />
            </TouchableOpacity>
            {/*越剧周边 */}
            <TouchableOpacity onPress={() => this.context.navigate('Zhoubian')}>
              <Image
                style={styles.image4}
                source={require('../../../res/29.jpg')}
              />
            </TouchableOpacity>
          </View>
          {/*推荐模块 */}
          <Text style={styles.title}>你可能喜欢</Text>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row'
            }}
          >
            {this.state.ocard.map((item) => (
              <View key={item.name} style={styles.ocard}>
                <TouchableOpacity onPress={() => this.context.navigate('Good')}>
                  <Image
                    style={styles.image}
                    source={{ uri: item.picture }}
                  ></Image>
                  <View style={{ padding: pxToDp(4) }}>
                    <Text style={{ fontSize: pxToDp(15) }}>{item.name}</Text>
                    <View style={styles.bottext}>
                      <Text style={{ color: '#B22222' }}>{item.price}</Text>
                      <Text style={{ color: 'grey' }}>{item.number}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View style={styles.tcard}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToDp(200),
    margin: pxToDp(10),
    borderRadius: pxToDp(10)
  },
  tcard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: pxToDp(420)
  },
  ocard: {
    backgroundColor: 'white',
    width: pxToDp(170),
    borderRadius: pxToDp(8),
    margin: pxToDp(10),
    marginRight: pxToDp(5)
  },
  image: {
    height: pxToDp(170),
    width: pxToDp(170),
    borderTopLeftRadius: pxToDp(8),
    borderTopRightRadius: pxToDp(8)
  },
  lunboimage: {
    height: '100%',
    width: '100%',
    borderRadius: pxToDp(10),
    marginBottom: pxToDp(10)
  },
  title: {
    margin: pxToDp(10),
    marginTop: pxToDp(-4),
    color: '#468CD3',
    fontSize: pxToDp(18),
    fontWeight: 'bold'
  },
  image1: {
    height: pxToDp(100),
    width: pxToDp(355),
    borderRadius: pxToDp(10)
  },
  box: {
    height: pxToDp(115),
    width: pxToDp(105),
    backgroundColor: '#468cd3',
    alignItems: 'center',
    borderRadius: pxToDp(10)
  },
  image2: {
    height: pxToDp(90),
    width: pxToDp(105),
    borderTopLeftRadius: pxToDp(10),
    borderTopRightRadius: pxToDp(10)
  },
  text: {
    fontSize: pxToDp(15),
    color: 'white',
    fontWeight: 'bold'
  },
  image3: {
    height: pxToDp(150),
    width: pxToDp(355),
    borderRadius: pxToDp(10)
  },
  image4: {
    height: pxToDp(150),
    width: pxToDp(355),
    marginTop: pxToDp(10),
    borderRadius: pxToDp(10)
  }
});
export default Index;
