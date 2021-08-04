import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import Top from '@components/common/top';
import Maylike from '../components/maylike'
class Index extends Component {
  
        state = {
            zuliList:[
            {id:1,title:'《西厢记》戏服租赁',price:58.0,sellnum:8,imguri:''},
            {id:2,title:'《西厢记》戏服租赁',price:58.0,sellnum:8,imguri:''},
            {id:3,title:'《西厢记》戏服租赁',price:58.0,sellnum:8,imguri:''},
            {id:4,title:'《西厢记》戏服租赁',price:58.0,sellnum:8,imguri:''},
            {id:5,title:'《西厢记》戏服租赁',price:58.0,sellnum:8,imguri:''},
            {id:6,title:'《西厢记》戏服租赁',price:58.0,sellnum:8,imguri:''},

        ]
            
        }

    static contextType = NavigationContext;
    render() {
        return (
            <View>
                <Top icon1='arrow-back' title="戏服租赁" />
                <ScrollView Style={{marginBottom:pxToDp(70)}}>
                    <View style={styles.scrollview}>
                    {this.state.zuliList.map((item,id)=>(
                        <Maylike
                         key={id}
                         imguri={item.imguri}
                         name={item.title}
                         price={item.price}
                         number={item.number}
                        />
                    )
                    )}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: '#E2F4FE',
        marginBottom:pxToDp(70),
        flexDirection:'row',
    flexWrap:'wrap'
    },
  
    tcard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: pxToDp(420)
    },
    ocard: {
        backgroundColor: 'white',
        width: pxToDp(170),
        borderRadius: pxToDp(10),
        margin: pxToDp(10),
        marginRight:pxToDp(5)
    },
    image: {
        height: pxToDp(170),
        width: pxToDp(170),
        borderTopLeftRadius: pxToDp(10),
        borderTopRightRadius: pxToDp(10)
    },
    bottext: {
        flexDirection: 'row',
        margin: pxToDp(5),
        justifyContent: 'space-between'
    }
})
export default Index;