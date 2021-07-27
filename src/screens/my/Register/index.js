import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import CommonInput from "@components/common/commonInput";
import { pxToDp } from "@utils/styleKits";
import { eye } from "@assets/fonts/iconSvg"
import SvgUri from "react-native-svg-uri";
import { ACCOUNT_REGISTER } from '@utils/pathMap';


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPassword: false,
            name: '',
            password: '',
            errMessage: ''
        }
    }
    onChangePhoneNumber = (phoneNumber) => {
        this.setState({ phoneNumber })

    }
    onChangeVocde = (Vcode) => {
        this.setState({ Vcode })

    }
    onChangeUserName = (name) => {
        this.setState({ name })

    }
    onChangePassword = (password) => {
        this.setState({ password })

    }
    onSubmitText = () => {
        fetch(ACCOUNT_REGISTER, {
            method: "POST",
            body: JSON.stringify({
                "name": this.state.name,
                "password": this.state.password
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json()).then(ress => {
            if (ress.errMessage) {
                this.setState({ errMessage: ress.errMessage })
            } else {
                this.setState({ name: '', password: '' })
                this.props.navigation.navigate('login')
            }
        })
            .catch(err => {
                console.log(err);
            })


    }
    render() {
        return (
            <View style={{ height: '100%', backgroundColor: 'white' }}>
                {/*顶部图片 */}
                <Image style={{ width: pxToDp(180), height: pxToDp(150), marginLeft: pxToDp(100), marginTop: pxToDp(70) }} source={require('../../../assets/4.jpg')} />
                {/*输入框 */}
                <CommonInput placeholder="请输入用户名" onChangeText={this.onChangeUserName} value={this.state.name} maxLength={11} />


                <View>
                    <CommonInput secureTextEntry={!this.state.showPassword} value={this.state.password} placeholder="请输入密码" onChangeText={this.onChangePassword} ref={(e) => this.PWInput = e} />
                    <TouchableOpacity style={{ marginLeft: pxToDp(270), marginTop: pxToDp(-50) }} onPress={() => this.setState({ showPassword: !this.state.showPassword })}>
                        <SvgUri svgXmlData={eye} />
                    </TouchableOpacity>
                </View>
                <View><Text style={{ color: 'red', textAlign: "center" }}>{this.state.errMessage}</Text></View>
                {/*注册按钮 */}
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.onSubmitText}
                        style={{ marginTop: pxToDp(40), width: pxToDp(300), height: pxToDp(40), borderRadius: pxToDp(40), backgroundColor: '#1874CD', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Text style={{ fontSize: 22, textAlign: 'center', color: 'white', }}>注 册</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Register;
