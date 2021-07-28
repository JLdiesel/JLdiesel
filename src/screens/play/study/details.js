import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from "@react-navigation/native";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
                <ScrollView>
                    <Top icon1='arrow-back' title="详情" />
                    <View style={styles.top}>
                        <Image style={styles.image} source={require('../../../res/6.jpg')}></Image>
                        <Text style={styles.text1}>穆桂英挂帅</Text>
                        <Text style={styles.text2}>猛听得金鼓响画角声震</Text>
                        <Text style={styles.text3}>1959人唱过</Text>
                    </View>
                    <View style={styles.center}>
                        <Text style={{ fontSize: pxToDp(15) }}>曲子简介{'\n'}
                            猛听得金鼓响画角声震，唤起我破天门壮志凌云。{'\n'}
                            想当年桃花马上威风凛凛，敌血飞溅石榴裙。{'\n'}
                            有生之日责当尽，寸土怎能够属于他人。{'\n'}
                            番王小丑何足论，我一剑能当百万的兵。
                        </Text>
                    </View>
                </ScrollView>
                <View>
                    <TouchableOpacity onPress={() => this.context.navigate("Sing")}>
                        <View style={styles.bottom}>
                            <Text style={{ fontSize: pxToDp(30), color: 'white' }}>开始练唱</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text1: {
        fontSize: pxToDp(18),
        color: '#000000'
    },
    text2: {
        fontSize: pxToDp(18),
        color: '#696969',
        marginTop: pxToDp(5)
    },
    text3: {
        fontSize: pxToDp(15),
        color: '#808080',
        marginTop: pxToDp(5)
    },
    top: {
        height: pxToDp(300),
        backgroundColor: '#F4F4F4',
        alignItems: 'center'
    },
    image: {
        height: pxToDp(200),
        width: pxToDp(260)
    },
    center: {
        marginLeft: pxToDp(30),
        marginTop: pxToDp(40)
    },
    bottom: {
        height: pxToDp(50),
        width: '100%',
        backgroundColor: '#3399cc',
        alignSelf: 'center',
        alignItems: 'center'
    }
})


export default Index;