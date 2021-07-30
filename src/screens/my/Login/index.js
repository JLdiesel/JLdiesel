import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, Animated, StyleSheet, LayoutAnimation, UIManager,ToastAndroid } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import {connect} from 'react-redux'
import { ACCOUNT_LOGIN, ACCOUNT_REGISTER } from './pathMap'
import { NavigationContext } from "@react-navigation/native";
import {changeToken} from '../store/actions'
 class Login extends Component {
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
  }


  SingUp = () => {
    LayoutAnimation.easeInEaseOut();
    Animated.timing(this.state.opcitytext1, {
      toValue: 1,
      duration: 2000,
        useNativeDriver: true, // Add this
    }).start();
    Animated.timing(this.state.opcitytext2, {
      toValue: 1,
      duration: 3000,
        useNativeDriver: true, // Add this
    }).start();
    Animated.timing(this.state.opcitytext3, {
      toValue: 0,
      duration: 2000,
        useNativeDriver: true, // Add this
    }).start();
    Animated.timing(this.state.opcitytext4, {
      toValue: 0,
      duration: 3000,
        useNativeDriver: true, // Add this
    }).start();
    this.setState({ loginbox: 350 })
    this.setState({ regbox: 0 })
    this.setState({ regusername: '' })
    this.setState({ regpassword1: '' })
    this.setState({ regpassword2: '' })
  }

  toRegister = () => {
    LayoutAnimation.easeInEaseOut()
    Animated.timing(this.state.opcitytext1, {
      toValue: 0,
      duration: 2000,
        useNativeDriver: true, // Add this
    }).start();
    Animated.timing(this.state.opcitytext2, {
      toValue: 0,
      duration: 3000,
        useNativeDriver: true, // Add this
    }).start();
    Animated.timing(this.state.opcitytext3, {
      toValue: 1,
      duration: 2000,
        useNativeDriver: true, // Add this
    }).start();
    Animated.timing(this.state.opcitytext4, {
      toValue: 1,
      duration: 3000,
        useNativeDriver: true, // Add this
    }).start();
    this.setState({ loginbox: 0 })
    this.setState({ regbox: 300 })
    this.setState({ username: '' })
    this.setState({ password: '' })
    this.setState({ password: '' })
  }
  registerSubimit = () => {
    if (this.state.regpassword1 != this.state.regpassword2) {
      alert('两次密码输入不一样')
    }
    else {
      fetch(ACCOUNT_REGISTER, {

        method: "POST",
        body: JSON.stringify({
          "name": this.state.regusername,
          "password": this.state.regpassword1
        }),
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => res.json()
      )
        .then(ress => {
          console.log(ress);

        })
        .catch(err => {
          console.log(this.state.regpassword2);
          console.log(err);
        })

    }
  }
  Login = () => {
    fetch(ACCOUNT_LOGIN, {

      method: "post",
      body: JSON.stringify({
        "name": this.state.username,
        "password": this.state.password
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => {
      return res.json()
    })
      .then(ress => {
        console.log(ress.errCode);
        if (ress.errCode===400) {
          ToastAndroid.show(ress.errMessage, ToastAndroid.SHORT);
        } else {
          console.log(ress);
          this.props.changeToken(ress.token)
             this.context.navigate('Tabbar')
        }
    
      })
      .catch(err => {
        console.log(123);
        console.log(err);
      })
  }
  render() {
    if (Platform.OS == 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
      return (


        <ImageBackground source={require('./11.jpg')} style={{ width: '100%', height: '100%' }}>
          <Image source={require('./111.png')} style={{ width: 150, height: 150, position: 'absolute', left: 120, top: 20 }} />
          <Animated.Text
            style={[
              styles.opcity1,
              {
                opacity: this.state.opcitytext1, // Bind opacity to animated value
                left: 50,
              }
            ]}>
            至死不负情
          </Animated.Text>
          <Animated.Text
            style={[
              styles.opcity1,
              {
                top: 100,
                opacity: this.state.opcitytext2 // Bind opacity to animated value
              }
            ]}>
            留得千秋载。
          </Animated.Text>
          <Animated.Text
            style={[
              styles.opcity2,
              {
                opacity: this.state.opcitytext3, // Bind opacity to animated value

              }
            ]}>
            至死不负情
          </Animated.Text>
          <Animated.Text
            style={[
              styles.opcity2,
              {
                right: 50, top: 100,
                opacity: this.state.opcitytext4 // Bind opacity to animated value
              }
            ]}>
            留得千秋载。
          </Animated.Text>




          <View style={{ borderRadius: 20, height: this.state.loginbox, width: 250, position: 'absolute', top: 300, left: 75, overflow: 'hidden' }}>
            <View style={{ width: '80%', marginLeft: 20, marginTop: 25 }}>
              <Input
                placeholder='我是恁爹'
                leftIcon={
                  <Icon
                    name='user'
                    size={24}
                  />
                }
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
              />
            </View>
            <View style={{ width: '80%', marginLeft: 20 }}>
              <Input
                secureTextEntry={true}
                placeholder="我是恁爹"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}

              />
              {/*登录按钮--------------------------------*/}
            </View>
            <TouchableOpacity style={styles.loginbtn} onPress={this.Login}>
              <Text>登录</Text>
            </TouchableOpacity>
            {/*第三方登录--------------------------------*/}
            <View style={{ position: 'absolute', bottom: 20, left: 30, borderTopWidth: 1, borderColor: '#b0bfc4', width: 190, height: 70, flexDirection: 'row' }} >
              <Image source={require('./bg.jpg')} style={{ width: 50, height: 50, borderRadius: 60, marginLeft: 28, marginTop: 10 }} />
              <Image source={require('./bg.jpg')} style={{ width: 50, height: 50, borderRadius: 60, marginLeft: 37, marginTop: 10 }} />
            </View>
          </View>
          <View style={{ borderRadius: 20, height: this.state.regbox, width: 250, position: 'absolute', top: 300, left: 75, overflow: 'hidden' }}>
            <View style={{ width: '80%', marginLeft: 20, marginTop: 15 }}>
              <Input
                placeholder='恁是我爹'
                leftIcon={
                  <Icon
                    name='user'
                    size={24}
                  />
                }
                onChangeText={regusername => this.setState({ regusername })}
                value={this.state.regusername}
              />
            </View>
            <View style={{ width: '80%', marginLeft: 20 }}>
              <Input
                secureTextEntry={true}
                placeholder="我是恁爹"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={regpassword1 => this.setState({ regpassword1 })}
                value={this.state.regpassword1}
              />
            </View>
            <View style={{ width: '80%', marginLeft: 20 }}>
              <Input
                secureTextEntry={true}
                placeholder="我是恁爹"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={regpassword2 => this.setState({ regpassword2 })}
                value={this.state.regpassword2}
              />
            </View>
            <TouchableOpacity style={styles.loginbtn} onPress={this.registerSubimit}>
              <Text>登录</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.login} onPress={this.SingUp}>
            <Text style={{ fontSize: 20, color: '#fff' }}>老戏迷</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.register} onPress={this.toRegister}>
            <Text style={{ fontSize: 20, color: '#fff' }}>新戏迷</Text>
          </TouchableOpacity>
        </ImageBackground>

      )
    }
  }
}
const styles = StyleSheet.create({
  opcity1: {
    position: 'absolute', width: 20, top: 20, left: 20, fontSize: 20, alignItems: 'center'
  },
  opcity2: {
    position: 'absolute', width: 20, top: 20, right: 20, fontSize: 20, alignItems: 'center'
  },
  login: { position: 'absolute', top: 650, left: 60, backgroundColor: '#ad0000', width: 120, height: 50, alignItems: 'center', justifyContent: 'center' },
  loginbtn: { width: 100, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue', left: 75, borderRadius: 20 }
  , register: { position: 'absolute', top: 650, right: 60, backgroundColor: '#00A4A6', width: 120, height: 50, alignItems: 'center', justifyContent: 'center' }
})

export default connect(state => ({token:state.getIn(['LoginReducer','token'])}), {
  changeToken
})(Login)