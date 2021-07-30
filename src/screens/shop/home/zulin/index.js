import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import Top from '@components/common/top';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View>
                <Top icon1='arrow-back' title="戏服租赁" />
                <ScrollView style={styles.scrollview}>
                    <View style={styles.tcard}>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../res/shop/1.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}>《西厢记》戏服租赁</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥58.0</Text>
                                    <Text style={{ color: 'grey' }}>8人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../res/shop/2.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}>《吴越王》戏服租赁</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥248.0</Text>
                                    <Text style={{ color: 'grey' }}>5人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../res/shop/3.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}>红娘戏服</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥528.0</Text>
                                    <Text style={{ color: 'grey' }}>20人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../res/shop/4.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}>红娘同款小扇</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥28.0</Text>
                                    <Text style={{ color: 'grey' }}>101人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../res/shop/5.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}>越剧服装头饰</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥9.9</Text>
                                    <Text style={{ color: 'grey' }}>11人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../res/shop/6.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15), flexWrap: 'wrap' }}>鲤鱼精戏服租赁</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥348.0</Text>
                                    <Text style={{ color: 'grey' }}>5人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../res/shop/7.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}>老太君戏服</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥584.0</Text>
                                    <Text style={{ color: 'grey' }}>8人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: '#E2F4FE',
        marginBottom:pxToDp(70)
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