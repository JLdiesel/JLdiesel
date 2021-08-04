import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { pxToDp } from "@utils/styleKits";
import { NavigationContext } from "@react-navigation/native";
import Top from "@components/common/top";
import Maylike from '../components/maylike'
class Index extends Component {
 

   state = {
      shop:[
        {id:1,title:'《柳毅传书》笔记本',price:'58.0',sellnum:8,imgurl:''},
        {id:2,title:'《柳毅传书》笔记本',price:'58.0',sellnum:8,imgurl:''},
        {id:3,title:'《柳毅传书》笔记本',price:'58.0',sellnum:8,imgurl:''},
        {id:4,title:'《柳毅传书》笔记本',price:'58.0',sellnum:8,imgurl:''},
        {id:5,title:'《柳毅传书》笔记本',price:'58.0',sellnum:8,imgurl:''},
        {id:5,title:'《柳毅传书》笔记本',price:'58.0',sellnum:8,imgurl:''},
        {id:5,title:'《柳毅传书》笔记本',price:'58.0',sellnum:8,imgurl:''},
      
      ]
   };
 
  static contextType = NavigationContext;
  render() {
    return (
      <View>
        <Top icon1="arrow-back" title="周边商城" />
        <ScrollView style={{marginBottom:pxToDp(70)}}>
        <View style={styles.scrollview}>
            {this.state.shop.map((item,id)=>(
              <Maylike
              key={id}
              name={item.title}
              price={item.price}
              number={item.sellnum}
              imguri={item.imguri}
              />
            ))}
        </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "#E2F4FE",
    flexDirection:'row',
    flexWrap:'wrap'


  },
  tcard: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: pxToDp(420),
  },
  ocard: {
    backgroundColor: "white",
    width: pxToDp(170),
    borderRadius: pxToDp(10),
    margin: pxToDp(10),
    marginRight: pxToDp(5),
    
  },
  image: {
    height: pxToDp(170),
    width: pxToDp(170),
    borderTopLeftRadius: pxToDp(10),
    borderTopRightRadius: pxToDp(10),
  },
  bottext: {
    flexDirection: "row",
    margin: pxToDp(5),
    justifyContent: "space-between",
  },
});
export default Index;
