import React, { PureComponent } from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native';
import Swiper from 'react-native-swiper';
import Svg from 'react-native-svg-uri';
import { next } from '../component/common/iconSvg';
import { pxToDp } from '../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window'); //获取手机的宽和高

export default class WelcomPage extends PureComponent {
  static contextType = NavigationContext;
  state = {
    index: 0
  };
  check = () => {
    this.setState({ index: this.state.index + 1 });
  };
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          paginationStyle={{
            //小圆点位置
            bottom: 70
          }}
          showsButtons={true}
          prevButton={<View></View>}
          index={this.state.index}
          loop={false}
          nextButton={
            <View
              style={{
                alignItems: 'flex-end',
                marginTop: pxToDp(500),
                marginRight: pxToDp(40)
              }}
            >
              <LottieView
                style={{ width: pxToDp(70) }}
                source={require('../../lottie/next.json')}
                autoPlay
                loop
              />
            </View>
          } //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
        >
          <ImageBackground
            style={styles.image}
            source={require('../res/welcome1.png')}
          >
            {/*  <TouchableOpacity>
              <View
                style={{
                  alignItems: 'flex-end',
                  marginTop: pxToDp(650),
                  marginRight: pxToDp(50)
                }}
              >
                <LottieView
                  style={{ width: pxToDp(70) }}
                  source={require('../../lottie/next.json')}
                  autoPlay
                  loop
                />
              </View>
            </TouchableOpacity> */}
          </ImageBackground>
          <ImageBackground
            style={styles.image}
            source={require('../res/welcome2.png')}
          ></ImageBackground>
          <ImageBackground
            style={styles.image}
            source={require('../res/welcome3.png')}
          ></ImageBackground>
          <ImageBackground
            style={styles.image}
            source={require('../res/welcome4.png')}
          >
            <TouchableOpacity onPress={() => this.context.navigate('Login')}>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: pxToDp(600)
                }}
              >
                <LottieView
                  style={{ width: pxToDp(80) }}
                  source={require('../../lottie/check.json')}
                  autoPlay
                  loop
                />
                <View
                  style={{
                    borderWidth: pxToDp(1.1),
                    height: pxToDp(40),
                    width: pxToDp(90),
                    borderRadius: pxToDp(40),
                    justifyContent: 'center'
                  }}
                >
                  <Text style={{ fontSize: pxToDp(20) }}>开始体验</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {},
  container: {
    flex: 1 //必写
  },
  image: {
    width: '100%', //等于width:width
    height: '100%'
  }
});
