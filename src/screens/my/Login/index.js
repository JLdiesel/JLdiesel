import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  ToastAndroid
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { NavigationContext } from '@react-navigation/native';

import { pxToDp } from '@utils/styleKits';
import requset from '../../../service';
import AsyncStorage from '@react-native-async-storage/async-storage';
class Login extends PureComponent {
  static contextType = NavigationContext;

  state = {
    opcitytext1: new Animated.Value(0),
    opcitytext2: new Animated.Value(0),
    opcitytext3: new Animated.Value(0),
    opcitytext4: new Animated.Value(0),
    loginbox: 0,
    regbox: 0,
    regusername: '',
    regpassword1: '',
    regpassword2: '',
    username: '',
    password: ''
  };

  SingUp = () => {
    LayoutAnimation.easeInEaseOut();
    Animated.timing(this.state.opcitytext1, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext2, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext3, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext4, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true // Add this
    }).start();
    this.setState({ loginbox: 350 });
    this.setState({ regbox: 0 });
    this.setState({ regusername: '' });
    this.setState({ regpassword1: '' });
    this.setState({ regpassword2: '' });
  };

  toRegister = () => {
    LayoutAnimation.easeInEaseOut();
    Animated.timing(this.state.opcitytext1, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext2, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext3, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true // Add this
    }).start();
    Animated.timing(this.state.opcitytext4, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true // Add this
    }).start();
    this.setState({ loginbox: 0 });
    this.setState({ regbox: 300 });
    this.setState({ username: '' });
    this.setState({ password: '' });
    this.setState({ password: '' });
  };
  registerSubimit = () => {
    if (this.state.regpassword1 != this.state.regpassword2) {
      ToastAndroid.show('???????????????????????????', ToastAndroid.SHORT);
    } else {
      requset
        .post({
          url: '/user/register',
          data: {
            name: this.state.regusername,
            password: this.state.regpassword1
          },
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(async (res) => {
          try {
            await AsyncStorage.setItem('token', res.token);
          } catch (e) {
            console.log(e);
          }
          this.context.navigate('Tabbar');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  Login = () => {
    requset
      .post({
        url: '/user/login',
        data: {
          name: this.state.username,
          password: this.state.password
        },
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(async (res) => {
        console.log(res);
        if (!res) {
          ToastAndroid.show('????????????????????????', ToastAndroid.SHORT);
        } else {
          await AsyncStorage.setItem('token', res.token);
          this.context.navigate('Tabbar');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    if (Platform.OS == 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
      return (
        <ImageBackground
          source={require('./11.jpg')}
          style={{ width: '100%', height: '100%' }}
        >
          <Image
            source={require('./111.png')}
            style={{
              width: pxToDp(150),
              height: pxToDp(150),
              position: 'absolute',
              left: pxToDp(120),
              top: pxToDp(30)
            }}
          />
          <Animated.Text
            style={[
              styles.opcity1,
              {
                opacity: this.state.opcitytext1, // Bind opacity to animated value
                left: pxToDp(50)
              }
            ]}
          >
            ???????????????
          </Animated.Text>
          <Animated.Text
            style={[
              styles.opcity1,
              {
                top: pxToDp(100),
                opacity: this.state.opcitytext2 // Bind opacity to animated value
              }
            ]}
          >
            ??????????????????
          </Animated.Text>
          <Animated.Text
            style={[
              styles.opcity2,
              {
                opacity: this.state.opcitytext3 // Bind opacity to animated value
              }
            ]}
          >
            ???????????????
          </Animated.Text>
          <Animated.Text
            style={[
              styles.opcity2,
              {
                right: pxToDp(50),
                top: pxToDp(100),
                opacity: this.state.opcitytext4 // Bind opacity to animated value
              }
            ]}
          >
            ??????????????????
          </Animated.Text>

          <View
            style={{
              borderRadius: 20,
              height: this.state.loginbox,
              width: pxToDp(250),
              position: 'absolute',
              top: pxToDp(300),
              left: pxToDp(60),
              overflow: 'hidden'
            }}
          >
            <View
              style={{
                width: '80%',
                marginLeft: pxToDp(20),
                marginTop: pxToDp(25)
              }}
            >
              <Input
                placeholder="??????????????????"
                leftIcon={<Icon name="user" size={24} />}
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}
              />
            </View>
            <View style={{ width: '80%', marginLeft: pxToDp(20) }}>
              <Input
                secureTextEntry={true}
                placeholder="???????????????"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />
              {/*????????????--------------------------------*/}
            </View>
            <TouchableOpacity style={styles.loginbtn} onPress={this.Login}>
              <Text>??????</Text>
            </TouchableOpacity>
            {/*???????????????--------------------------------*/}
            <View
              style={{
                position: 'absolute',
                bottom: pxToDp(20),
                left: pxToDp(30),
                borderTopWidth: 1,
                borderColor: '#b0bfc4',
                width: pxToDp(190),
                height: pxToDp(70),
                flexDirection: 'row'
              }}
            >
              <Image
                source={require('./bg.jpg')}
                style={{
                  width: pxToDp(50),
                  height: pxToDp(50),
                  borderRadius: pxToDp(60),
                  marginLeft: pxToDp(28),
                  marginTop: pxToDp(10)
                }}
              />
              <Image
                source={require('./bg.jpg')}
                style={{
                  width: pxToDp(50),
                  height: pxToDp(50),
                  borderRadius: pxToDp(60),
                  marginLeft: pxToDp(37),
                  marginTop: pxToDp(10)
                }}
              />
            </View>
          </View>
          <View
            style={{
              borderRadius: 20,
              height: this.state.regbox,
              width: pxToDp(250),
              position: 'absolute',
              top: pxToDp(300),
              left: pxToDp(60),
              overflow: 'hidden'
            }}
          >
            <View
              style={{
                width: '80%',
                marginLeft: pxToDp(20),
                marginTop: pxToDp(15)
              }}
            >
              <Input
                placeholder="????????????"
                leftIcon={<Icon name="user" size={24} />}
                onChangeText={(regusername) => this.setState({ regusername })}
                value={this.state.regusername}
              />
            </View>
            <View style={{ width: '80%', marginLeft: pxToDp(20) }}>
              <Input
                secureTextEntry={true}
                placeholder="????????????"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={(regpassword1) => this.setState({ regpassword1 })}
                value={this.state.regpassword1}
              />
            </View>
            <View style={{ width: '80%', marginLeft: pxToDp(20) }}>
              <Input
                secureTextEntry={true}
                placeholder="????????????"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={(regpassword2) => this.setState({ regpassword2 })}
                value={this.state.regpassword2}
              />
            </View>
            <TouchableOpacity
              style={styles.loginbtn}
              onPress={this.registerSubimit}
            >
              <Text>??????</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.login} onPress={this.SingUp}>
            <Text style={{ fontSize: 20, color: '#fff' }}>?????????</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.register} onPress={this.toRegister}>
            <Text style={{ fontSize: 20, color: '#fff' }}>?????????</Text>
          </TouchableOpacity>
        </ImageBackground>
      );
    }
  }
}
const styles = StyleSheet.create({
  opcity1: {
    position: 'absolute',
    width: pxToDp(20),
    top: pxToDp(20),
    left: pxToDp(20),
    fontSize: pxToDp(20),
    alignItems: 'center'
  },
  opcity2: {
    position: 'absolute',
    width: pxToDp(20),
    top: pxToDp(20),
    right: pxToDp(20),
    fontSize: pxToDp(20),
    alignItems: 'center'
  },
  login: {
    position: 'absolute',
    top: pxToDp(650),
    left: pxToDp(60),
    backgroundColor: '#ad0000',
    width: pxToDp(120),
    height: pxToDp(50),
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginbtn: {
    width: pxToDp(100),
    height: pxToDp(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    left: pxToDp(75),
    borderRadius: 20
  },
  register: {
    position: 'absolute',
    top: pxToDp(650),
    right: pxToDp(60),
    backgroundColor: '#00A4A6',
    width: pxToDp(120),
    height: pxToDp(50),
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Login;
