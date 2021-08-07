import React, { Component } from "react";
import { View, Text, Image,TouchableOpacity,ScrollView } from "react-native";
import Top from '../../../component/common/top';
import {pxToDp} from '@utils//styleKits'
import JBitem2 from '../components/jbitem2'
class Index extends Component {
    state={
        jblist2:[
            {id:1,name:'追鱼',listtext:'且把真身暂隐藏你是谁家窈窕娘我张珍远道来投亲夫妻携手往前行有一书生名张珍张郎听我从实讲求娘娘发慈心,',imguri:''},
            {id:2,name:'追鱼',listtext:'且把真身暂隐藏你是谁家窈窕娘我张珍远道来投亲夫妻携手往前行有一书生名张珍张郎听我从实讲求娘娘发慈心,',imguri:''},
            {id:3,name:'追鱼',listtext:'且把真身暂隐藏你是谁家窈窕娘我张珍远道来投亲夫妻携手往前行有一书生名张珍张郎听我从实讲求娘娘发慈心,',imguri:''},
            {id:4,name:'追鱼',listtext:'且把真身暂隐藏你是谁家窈窕娘我张珍远道来投亲夫妻携手往前行有一书生名张珍张郎听我从实讲求娘娘发慈心,',imguri:''},
            {id:5,na:'追鱼',listtext:'且把真身暂隐藏你是谁家窈窕娘我张珍远道来投亲夫妻携手往前行有一书生名张珍张郎听我从实讲求娘娘发慈心,',imguri:''},

        ]
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#E2F4FE'}}>
                <Top icon1="arrow-back" title="剧本" />
                <View>
                   {this.state.jblist2.map((item,id)=>(
                       <JBitem2 
                            key={id}

                            name={item.name}
                            listtext={item.listtext}
                            imguri={item.imguri}

                        />
                   )                  
                   )}
                </View>
            </ScrollView>
        );
    }
}
export default Index;