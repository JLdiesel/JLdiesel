/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
} from 'react-native';
import Ohterbanner from '../component/Otherbanner';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContext} from '@react-navigation/native';
import CustomAlertDialog from '../component/CustomAlertDialog';
import {pxToDp} from '../../../utils/styleKits';
import * as ImagePicker from 'expo-image-picker'; 
import DatePicker from 'react-native-datepicker';
//import DatePicker from 'react-native-datepicker';
const typeArr = ['男', '女'];
export default class Ziliao extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      typeName: '男',
      showTypePop: false,
      currentIndex: 0,
      records: [],
      modalVisible: false,
      birthday: '',
      localUri:''

    };
  }

  _openTypeDialog() {
    this.setState({showTypePop: !this.state.showTypePop});
  }
  _changeModal() {
    this.setState({modalVisible: !this.state.modalVisible});
  }
 openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  

    this.setState({ localUri: pickerResult.uri });
   
  }
  render() {
    console.log(this.props.navigation);
    const dateNow = new Date();
    const currentDate = `${dateNow.getFullYear()}-${
      dateNow.getMonth() + 1
    }-${dateNow.getDate()}`;
    const {birthday} = this.state;
    console.log('name', this.props.route.params);
    return (
      <View>
        <Ohterbanner title="个人信息" back="arrow-back" 

        />
        <View style={s.avatar}>
          <View style={{marginLeft: pxToDp(20)}}>
            <Text style={{fontSize: pxToDp(20)}}>头像</Text>
          </View>
          <View style={{marginRight: pxToDp(20)}}>
            <TouchableOpacity onPress={() => this._changeModal()}>
              <Image
                style={{
                  width: pxToDp(60),
                  height: pxToDp(60),
                  borderRadius: pxToDp(60),
                  backgroundColor: 'gray',
                }}        
              source={{ uri: this.state.localUri }}
              />
            </TouchableOpacity>
            <View>
                <Top icon1='arrow-back' title="个人资料" />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: pxToDp(15) }} >
                    <Text style={{ fontSize: pxToDp(20) }}>头像</Text>
                    <Ionicons name="chevron-forward" size={30} color="grey" />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: pxToDp(15) }} >
                    <Text style={{ fontSize: pxToDp(20) }}>昵称</Text>
                    <Text style={{ fontSize: pxToDp(18) }}>百越庭</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: pxToDp(15) }} >
                    <Text style={{ fontSize: pxToDp(20) }}>性别</Text>
                    <Ionicons name="chevron-forward" size={30} color="grey" />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: pxToDp(15) }} >
                    <Text style={{ fontSize: pxToDp(20) }}>生日</Text>
                    <Ionicons name="chevron-forward" size={30} color="grey" />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: pxToDp(15) }} >
                    <Text style={{ fontSize: pxToDp(20) }}>所在地</Text>
                    <Ionicons name="chevron-forward" size={30} color="grey" />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: pxToDp(15) }} >
                    <Text style={{ fontSize: pxToDp(20) }}>个性签名</Text>
                    <TextInput placeholder="未填写" />
                </View>
            </View> </View> </View> </View>
        );
    }
}
export default Index;