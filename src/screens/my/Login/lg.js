import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { Input } from 'react-native-elements';
import SvgUri from "react-native-svg-uri";
import { qq, weixin, weibo } from "@assets/fonts/iconSvg"
import { ACCOUNT_LOGIN } from '@utils/pathMap';
import Top from '@components/common/top'
class Login extends Component {
  state = {
    //用户名
    userName: "",
    password: ""
  }
  //登录用户名输入
  userNameChangeText = (userName) => {
    this.setState({ userName });
  }
  //用户名点击完成触发
  userNameSubmitEditing = (userName) => {
    this.setState({ userName })
  }

  onChangePassword = (password) => {
    this.setState({ password })
  }
  Login = () => {
    fetch(ACCOUNT_LOGIN, {

      method: "post",
      body: JSON.stringify({
        "name": this.state.userName,
        "password": this.state.password
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      res.json()
    )
      .then(ress => {
        console.log(ress);

      })
      .catch(err => {
        console.log(123);
        console.log(err);
      })
  }
  render() {
    const { userName, password } = this.state;
    return (
      <View style={{ height: '100%', backgroundColor: 'white' }}>
        <Top icon1='arrow-back' title='登录' />
        {/*顶部图片 */}
        <Image style={{ width: pxToDp(180), height: pxToDp(150), marginLeft: pxToDp(100), marginTop: pxToDp(70) }} source={require('../../../assets/4.jpg')} />

        {/*手机号码 密码输入框*/}
        <View style={{ marginTop: pxToDp(30), marginLeft: pxToDp(20), marginRight: pxToDp(30) }}>
          <Input
            placeholder='请输入手机号码'
            maxLength={11}
            keyboardType="phone-pad"
            inputStyle={{ color: "#333" }}
            value={userName}
            onChangeText={this.userNameChangeText}
            onSubmitEditing={this.userNameSubmitEditing}
            leftIcon={{ type: 'font-awesome', name: 'phone', color: "#ccc", size: pxToDp(20) }}
          />
          <Input
            onChangeText={this.onChangePassword}
            value={password}
            placeholder='请输入密码'
            inputStyle={{ color: "#333" }}
            leftIcon={{ type: 'font-awesome', name: 'lock', color: "#ccc", size: pxToDp(20) }}
          />
        </View>
        {/*忘记密码 用户注册  */}
        <View style={{ flexDirection: 'row', marginTop: pxToDp(1) }}>
          <TouchableOpacity>
            <Text style={{ color: '#1874CD', marginLeft: pxToDp(40) }}>忘记密码</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('register')}>
            <Text style={{ color: '#1874CD', marginLeft: pxToDp(170) }}>新用户注册</Text>
          </TouchableOpacity>
        </View>
        {/*登录按钮 */}
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            onPress={this.Login}
            style={{ marginTop: pxToDp(30), width: pxToDp(300), height: pxToDp(40), borderRadius: pxToDp(40), backgroundColor: '#1874CD', justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 22, textAlign: 'center', color: 'white', }}>登 录</Text>
          </TouchableOpacity>
        </View>
        {/*第三方登录 */}
        <View style={{ alignItems: 'center', marginTop: pxToDp(80) }}>
          <Text style={{ fontSize: pxToDp(20), color: 'gray' }}>第三方登录</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity activeOpacity={0.5}>
              <SvgUri svgXmlData={qq} style={{ margin: pxToDp(10) }} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <SvgUri svgXmlData={weixin} style={{ margin: pxToDp(10) }} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <SvgUri svgXmlData={weibo} style={{ margin: pxToDp(10) }} />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}
export default Login;