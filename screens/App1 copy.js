import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageStore } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'
export default function App() {

  const [selectedImage, setSelectedImage] = useState(require('./imgs/demo-pic111.jpg'));
  const [name, setName] = useState('jl2321312')
  const [password, setPassword] = useState('12312312')
  const uploadPic = async () => {

    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    /*   const info = Image.resolveAssetSource(img1);
  
      ImageEditor.cropImage(pickerResult.uri, {
        size: {
          width: 300,
          height: 300
        },
        resizeMode: 'cover'
      }).then(url => {
        console.log(url);
      }) */
    /* 
    , uri => {
      ImageStore.getBase64ForTag(uri, base64ImageData => {
        console.log('成功了');
        // 获取图片字节码的base64字符串
        setSelectedImage(base64ImageData);
      }, err => {
        console.warn("ImageStoreError" + JSON.stringify(err));
      });
    }, err => {
      console.warn("ImageEditorError" + JSON.stringify(err));

    } */


    const url = 'https://api-cn.faceplusplus.com/imagepp/v1/mergeface'
    // const url = 'https://www.baidu.com'
    const data = {
      api_key: '2f1f4L8-B-i_A1jnRHWYdbVtmgHoOZE6',
      api_secret: '4VxMhS7XofKOVXzIupBRwTfK6GqEtt6G',
      template_file: pickerResult.uri,
      // template_rectangle:'70,80,100,100',
      merge_file: selectedImage
    }
    const result = await axios({ url, method: 'POST', data, headers: { 'Content-Type': 'multipart/form-data' } })

    console.log(result);

  }
  const fetchData = () => {
    axios({
      url: 'http://192.168.50.146:3000/user/register',
      data: {
        name,
        password
      },
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json',
      }

    }).then(res => {
      console.log(res);
    })



    /*    fetch('http://192.168.50.146:3000/user/register', {
         method: 'POST',
         body: JSON.stringify({
           "name": "18847", "password": "123123"
         }),
         headers: {
           'Accept': 'application/json',
           //取决于服务器端，所以请和服务器端的开发人员沟通确定清楚
           'Content-Type': 'application/json',
         }
       }).then(res => res.json())
         .then(ress => console.log(ress)) */

  }


  return (
    <View style={styles.container}>
      <Image
        source={
          selectedImage
        }
        style={styles.thumbnail}
      />
      <TouchableOpacity style={{ borderWidth: 1, borderColor: 'pink' }} onPress={fetchData}><Text>点击上传</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  /* Other styles hidden to keep the example brief... */
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});