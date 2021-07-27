import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
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
            <View>
                <ScrollView
                    horizontal={true} // 横向
                    showsHorizontalScrollIndicator={false}
                    style={{ flexDirection: 'row' }}>
                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/7.jpg')}></Image>
                        <Text style={styles.text1}>越剧戏服租赁</Text>
                        <View style={styles.bot}>
                            <TouchableOpacity style={styles.touch} onPress={() => this.context.navigate("zulin")}>
                                <Text style={styles.text2}>去租赁</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/8.jpg')}></Image>
                        <Text style={styles.text1}>越剧周边商城</Text>
                        <View style={styles.bot}>
                            <TouchableOpacity style={styles.touch} onPress={() => this.context.navigate("zhoubian")}>
                                <Text style={styles.text2}>去购买</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        height: pxToDp(520),
        width: pxToDp(300),
        borderRadius: pxToDp(20),
        backgroundColor: 'white',
        marginTop: pxToDp(20),
        marginLeft: pxToDp(20)
    },
    image: {
        height: pxToDp(400),
        width: pxToDp(300),
        borderTopLeftRadius: pxToDp(20),
        borderTopRightRadius: pxToDp(20)
    },
    text1: {
        fontSize: pxToDp(25),
        marginTop: pxToDp(10)
    },
    bot: {
        alignItems: 'center',
        marginTop: pxToDp(10)
    },
    touch: {
        backgroundColor: '#1874CD',
        alignItems: 'center',
        width: pxToDp(100),
        borderRadius: pxToDp(20)
    },
    text2: {
        color: 'white',
        fontSize: pxToDp(25)
    }
})
export default Index;