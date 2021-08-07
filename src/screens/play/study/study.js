import React, { Component } from 'react';
import { View, Image, ScrollView, TextInput, Text, TouchableOpacity,StyleSheet } from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import  SongItem from '../components/songitem'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songlist:[
                {id:1,title:'穆桂英挂帅',lyric:'猛听得金鼓响画角声震',lisnum:1959,imguri:''},
                {id:2,title:'穆桂英挂帅',lyric:'猛听得金鼓响画角声震',lisnum:1959,imguri:''},
                {id:3,title:'穆桂英挂帅',lyric:'猛听得金鼓响画角声震',lisnum:1959,imguri:''},
                {id:4,title:'穆桂英挂帅',lyric:'猛听得金鼓响画角声震',lisnum:1959,imguri:''},
                {id:5,title:'穆桂英挂帅',lyric:'猛听得金鼓响画角声震',lisnum:1959,imguri:''},
                {id:6,title:'穆桂英挂帅',lyric:'猛听得金鼓响画角声震',lisnum:1959,imguri:''},
                {id:7,title:'穆桂英挂帅',lyric:'猛听得金鼓响画角声震',lisnum:1959,imguri:''},
                {id:8,title:'穆桂英挂帅',lyric:'猛听得金鼓响画角声震',lisnum:1959,imguri:''},
                {id:9,title:'穆桂英挂帅',lyric:'猛听得金鼓响画角声震',lisnum:1959,imguri:''},
                {id:10,title:'穆桂英挂帅',lyric:'猛听得金鼓响画角声震',lisnum:1959,imguri:''},
                {id:11,title:'穆桂英挂帅',lyric:'猛听得金鼓响画角声震',lisnum:1959,imguri:''},

            ]

        }
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{backgroundColor:'#E2F4FE'}}>
                <Top icon1='arrow-back' title="单人练唱" />
                <View>
                    <TextInput style={styles.textinput}
                        placeholder="搜索" />
                </View>
                <ScrollView >
                    {this.state.songlist.map((item,id)=>(
                            <SongItem
                                key={id}
                                text1={item.title}
                                lyric={item.lyric}
                                lisnum={item.lisnum}
                               imguri={item.imguri}
                            />
                    )
                )}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textinput: {
        backgroundColor: '#F5F5F5',
        height: pxToDp(40),
        borderRadius: pxToDp(30),
        marginLeft: pxToDp(10),
        marginRight: pxToDp(10),
        marginTop: pxToDp(5)
    },
    box: {
        flexDirection: 'row',
        height: pxToDp(90),
        marginTop: pxToDp(5),
        marginLeft: pxToDp(17),
        borderBottomWidth: pxToDp(1),
        borderBottomColor: '#696969'
    },
    image: {
        height: pxToDp(80),
        width: pxToDp(80)
    },
    text1: {
        fontSize: pxToDp(14),
        color: '#000000',
        marginLeft:pxToDp(10)
    },
    text2: {
        fontSize: pxToDp(14),
        color: '#696969',
        marginLeft:pxToDp(10)
    },
    text3: {
        fontSize: pxToDp(11),
        color: '#808080',
        marginTop: pxToDp(25),
        marginLeft:pxToDp(10)
    }
})
export default Index;