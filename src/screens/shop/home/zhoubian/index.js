import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import Top from '../../../../component/common/top';
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
                <Top icon1='arrow-back' title="周边商城" />
                <ScrollView style={styles.scrollview}>
                    <View style={styles.tcard}>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../assets/shop/1.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}> 敦煌文化随行杯</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥58.0</Text>
                                    <Text style={{ color: 'grey' }}>8人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../assets/shop/2.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}> 敦煌文化钥匙扣</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥48.0</Text>
                                    <Text style={{ color: 'grey' }}>5人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../assets/shop/3.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}>韵文博鉴*恭王府晴雨伞</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥128.0</Text>
                                    <Text style={{ color: 'grey' }}>20人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../assets/shop/4.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}> 敦煌沙漏小夜灯</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥128.0</Text>
                                    <Text style={{ color: 'grey' }}>101人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../assets/shop/5.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}>韵文博鉴*恭王府 屋脊兽便签</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥9.9</Text>
                                    <Text style={{ color: 'grey' }}>11人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../assets/shop/6.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15), flexWrap: 'wrap' }}>韵文博鉴*恭王府 屋脊兽木制日历</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥48.0</Text>
                                    <Text style={{ color: 'grey' }}>5人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../../assets/shop/1.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}> 敦煌随行杯</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥58.0</Text>
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
        backgroundColor: 'lightgrey'
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