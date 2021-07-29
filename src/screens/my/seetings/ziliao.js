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
        <Ohterbanner title="个人信息" back="arrow-back" />
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
              {/* Modal组件实现弹窗显示图片选择 */}
              <Modal
                visible={this.state.modalVisible}
                animationType={'fade'}
                transparent={true}
                onRequestClose={() => this.onRequestClose()}>
                <View style={s.alertBackground}>
                  <View style={s.alertBox}>
                    <Text style={s.modalTitle}>请选择</Text>
                    <TouchableHighlight
                      underlayColor={'#F5F5F5'}
                      onPress={this.openImagePickerAsync}>
                      <Text style={s.modalItem}>打开相册</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={'#F5F5F5'}
                      onPress={() => this._changeModal()}>
                      <Text style={s.modalItem}>取消</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.context.navigate('Nickname')}>
        <View style={[s.basic,{height:90}]}>
            <View style={{marginLeft: pxToDp(20)}}>
              <View style={{marginTop: pxToDp(20)}}>
                <Text style={{fontSize: pxToDp(16), color: '#aaa'}}>昵称</Text>
                <Text style={{fontSize: pxToDp(20), marginTop: pxToDp(10),marginBottom:pxToDp(20)}}>
                  {this.props.route.params
                    ? this.props.route.params.nickname
                    : ''}
                </Text>
              </View>
            </View>
            <View style={{marginRight: pxToDp(20)}}>
              <AntDesign name="right" size={pxToDp(18)} color="#000" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableHighlight
              onPress={() => this._openTypeDialog()}
              style={s.button}
              underlayColor="#eee">
        <View style={s.basic}>
          <View style={{marginLeft: pxToDp(15)}}>
            <Text
              style={{
                fontSize: pxToDp(16),
                color: '#aaa',
               
              }}>
              性别
            </Text>
            
              <Text style={{fontSize: pxToDp(20), marginTop:pxToDp(10)}}>
                {this.state.typeName}
              </Text>
          

            <CustomAlertDialog
              entityList={typeArr}
              callback={i => {
                this.setState({
                  typeName: typeArr[i],
                });
              }}
              show={this.state.showTypePop}
              closeModal={show => {
                this.setState({
                  showTypePop: show,
                });
              }}
            />
          </View>
          <View style={{marginRight: pxToDp(20)}}>
            <AntDesign name="right" size={pxToDp(18)} color="#000" />
          </View>
        </View>  
        </TouchableHighlight>
        <TouchableOpacity onPress={() => this.context.navigate('Signature')}>
          <View style={[s.basic,{height:100}]}>
            <View style={{marginLeft: pxToDp(20), flex: 1}}>
              <View style={{marginTop: pxToDp(20)}}>
                <Text style={{fontSize: pxToDp(16), color: '#aaa'}}>
                  个性签名
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{fontSize: pxToDp(20), marginTop: pxToDp(10),marginBottom:pxToDp(20)}}>
                  {this.props.route.params
                    ? this.props.route.params.signature
                    : ''}
                </Text>
              </View>
            </View>
            <View style={{marginRight: pxToDp(20), width: pxToDp(20)}}>
              <AntDesign name="right" size={pxToDp(18)} color="#000" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={[s.basic,{height:80}]}>
          <View style={{marginLeft: pxToDp(20),}}>
            <Text
              style={{
                fontSize: pxToDp(16),
                color: '#aaa',
                marginBottom: pxToDp(10),
                marginTop:pxToDp(10),
              }}>
              生日
            </Text>
           <DatePicker
              style={{width:300}}
              androidMode="spinner"
              placeholder="设置生日"
              date={birthday}
              minDate="1900-01-01"
              maxDate={currentDate}
              confirmBtnText="确定"
              cancelBtnText="取消"
              customStyles={{
                dateIcon: {
                  display: 'none',
                },
                dateInput: {
                  borderWidth: 0,
                  alignItems: 'flex-start',
                },
                placeholderText: {
                  fontSize: pxToDp(20),
                  color: '#afafaf',
                },
              }}
              onDateChange={birthday => {
                this.setState({birthday});
              }}
            />
          </View>
          <View style={{marginRight: pxToDp(20)}}>
            <AntDesign name="right" size={pxToDp(18)} color="#000" />
          </View>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  avatar: {
    height: pxToDp(100),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  basic: {
    height: pxToDp(70),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    marginTop: pxToDp(20),
    marginLeft: pxToDp(5),
  },
  alertBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 如果要遮罩要显示成半透明状态，这里一定要设置，reba中的a控制透明度，取值在 0.0 ～ 1.0 范围内。
  },

  alertBox: {
    width: pxToDp(300),
    height: pxToDp(250),
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    borderRadius: pxToDp(30),
  },
  modalTitle: {
    width: '70%',
    fontSize: pxToDp(25),
    alignSelf: 'center',
    textAlign: 'center',
    borderBottomWidth: 1.1,
    borderBottomColor: '#AFAFAF',
  },
  modalItem: {
    fontSize: pxToDp(18),
    alignSelf: 'center',
  },
});
