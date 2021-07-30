import React, { Component } from 'react';
import { View, Image, ScrollView, TextInput, Text, TouchableOpacity,StyleSheet } from 'react-native';
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
            <View style={{backgroundColor:'#E2F4FE'}}>
                <Top icon1='arrow-back' title="单人练唱" />
                <View>
                    <TextInput style={styles.textinput}
                        placeholder="搜索" />
                </View>
                <ScrollView >
                    <TouchableOpacity onPress={() => this.context.navigate("Details")}>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../res/5.jpg')}></Image>
                            <View>
                                <Text style={styles.text1}>穆桂英挂帅</Text>
                                <Text style={styles.text2}>猛听得金鼓响画角声震</Text>
                                <Text style={styles.text3}>1959人唱过</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../res/5.jpg')}></Image>
                            <View>
                                <Text style={styles.text1}>穆桂英挂帅</Text>
                                <Text style={styles.text2}>猛听得金鼓响画角声震</Text>
                                <Text style={styles.text3}>1959人唱过</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../res/5.jpg')}></Image>
                            <View>
                                <Text style={styles.text1}>穆桂英挂帅</Text>
                                <Text style={styles.text2}>猛听得金鼓响画角声震</Text>
                                <Text style={styles.text3}>1959人唱过</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../res/5.jpg')}></Image>
                            <View>
                                <Text style={styles.text1}>穆桂英挂帅</Text>
                                <Text style={styles.text2}>猛听得金鼓响画角声震</Text>
                                <Text style={styles.text3}>1959人唱过</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../res/5.jpg')}></Image>
                            <View>
                                <Text style={styles.text1}>穆桂英挂帅</Text>
                                <Text style={styles.text2}>猛听得金鼓响画角声震</Text>
                                <Text style={styles.text3}>1959人唱过</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../res/5.jpg')}></Image>
                            <View>
                                <Text style={styles.text1}>穆桂英挂帅</Text>
                                <Text style={styles.text2}>猛听得金鼓响画角声震</Text>
                                <Text style={styles.text3}>1959人唱过</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../res/5.jpg')}></Image>
                            <View>
                                <Text style={styles.text1}>穆桂英挂帅</Text>
                                <Text style={styles.text2}>猛听得金鼓响画角声震</Text>
                                <Text style={styles.text3}>1959人唱过</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Image style={styles.image} source={require('../../../res/5.jpg')}></Image>
                            <View>
                                <Text style={styles.text1}>穆桂英挂帅</Text>
                                <Text style={styles.text2}>猛听得金鼓响画角声震</Text>
                                <Text style={styles.text3}>1959人唱过</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
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