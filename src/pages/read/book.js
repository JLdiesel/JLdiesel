import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { pxToDp } from "../../utils/styleKits";
import { BoxShadow } from 'react-native-shadow';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    bookinformation() {
        this.props.navigation.push('BookOne')
    }
    render() {
        return (
            <View style={styles.flip}>
                <FlipCard
                    friction={800}
                    perspective={800}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
                >
                    {/* Face Side */}
                    <View style={styles.face}>
                        <View style={styles.touch}>
                            <View style={styles.box}>
                                <BoxShadow setting={{ height: pxToDp(170), width: pxToDp(110), marginTop: pxToDp(10), color: '#000000', border: 4, radius: 3, opacity: 0.4, x: 1, y: 1, style: { marginVertical: 5 } }} >
                                    <TouchableHighlight style={styles.touchhl}>
                                        <TouchableOpacity onPress={() => this.bookinformation()}>
                                            <Image style={styles.picture} source={require('../../res/book/1.jpg')}></Image>
                                        </TouchableOpacity>
                                    </TouchableHighlight>
                                </BoxShadow>
                            </View>
                        </View>
                        <View style={styles.touch}>
                            <View style={styles.box}>
                                <BoxShadow setting={{ height: pxToDp(170), width: pxToDp(110), marginTop: pxToDp(10), color: '#000000', border: 4, radius: 3, opacity: 0.4, x: 1, y: 1, style: { marginVertical: 5 } }} >
                                    <TouchableHighlight style={styles.touchhl}>
                                        <TouchableOpacity onPress={() => this.bookinformation()}>
                                            <Image style={styles.picture} source={require('../../res/book/2.jpg')}></Image>
                                        </TouchableOpacity>
                                    </TouchableHighlight>
                                </BoxShadow>
                            </View>
                        </View>
                        <View style={styles.touch}>
                            <View style={styles.box}>
                                <BoxShadow setting={{ height: pxToDp(170), width: pxToDp(110), marginTop: pxToDp(10), color: '#000000', border: 4, radius: 3, opacity: 0.4, x: 1, y: 1, style: { marginVertical: 5 } }} >
                                    <TouchableHighlight style={styles.touchhl}>
                                        <TouchableOpacity onPress={() => this.bookinformation()}>
                                            <Image style={styles.picture} source={require('../../res/book/3.jpg')}></Image>
                                        </TouchableOpacity>
                                    </TouchableHighlight>
                                </BoxShadow>
                            </View>
                        </View>
                        <View style={styles.touch}>
                            <View style={styles.box}>
                                <BoxShadow setting={{ height: pxToDp(170), width: pxToDp(110), marginTop: pxToDp(10), color: '#000000', border: 4, radius: 3, opacity: 0.4, x: 1, y: 1, style: { marginVertical: 5 } }} >
                                    <TouchableHighlight style={styles.touchhl}>
                                        <TouchableOpacity onPress={() => this.bookinformation()}>
                                            <Image style={styles.picture} source={require('../../res/book/4.jpg')}></Image>
                                        </TouchableOpacity>
                                    </TouchableHighlight>
                                </BoxShadow>
                            </View>
                        </View>
                        <View style={styles.touch}>
                            <View style={styles.box}>
                                <BoxShadow setting={{ height: pxToDp(170), width: pxToDp(110), marginTop: pxToDp(10), color: '#000000', border: 4, radius: 3, opacity: 0.4, x: 1, y: 1, style: { marginVertical: 5 } }} >
                                    <TouchableHighlight style={styles.touchhl}>
                                        <TouchableOpacity onPress={() => this.bookinformation()}>
                                            <Image style={styles.picture} source={require('../../res/book/5.jpg')}></Image>
                                        </TouchableOpacity>
                                    </TouchableHighlight>
                                </BoxShadow>
                            </View>
                        </View>
                        <View style={styles.touch}>
                            <View style={styles.box}>
                                <BoxShadow setting={{ height: pxToDp(170), width: pxToDp(110), marginTop: pxToDp(10), color: '#000000', border: 4, radius: 3, opacity: 0.4, x: 1, y: 1, style: { marginVertical: 5 } }} >
                                    <TouchableHighlight style={styles.touchhl}>
                                        <TouchableOpacity onPress={() => this.bookinformation()}>
                                            <Image style={styles.picture} source={require('../../res/book/6.jpg')}></Image>
                                        </TouchableOpacity>
                                    </TouchableHighlight>
                                </BoxShadow>
                            </View>
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.word}>换一换</Text>
                        </View>

                    </View>
                    {/* Back Side */}
                    <View style={styles.face}>
                        <View style={styles.touch}>
                            <View style={styles.box}>
                                <BoxShadow setting={{ height: pxToDp(170), width: pxToDp(110), marginTop: pxToDp(10), color: '#000000', border: 4, radius: 3, opacity: 0.4, x: 1, y: 1, style: { marginVertical: 5 } }} >
                                    <TouchableHighlight style={styles.touchhl}>
                                        <TouchableOpacity onPress={() => this.bookinformation()}>
                                            <Image style={styles.picture} source={require('../../res/book/7.jpg')}></Image>
                                        </TouchableOpacity>
                                    </TouchableHighlight>
                                </BoxShadow>
                            </View>
                        </View>
                        <View style={styles.touch}>
                            <View style={styles.box}>
                                <BoxShadow setting={{ height: pxToDp(170), width: pxToDp(110), marginTop: pxToDp(10), color: '#000000', border: 4, radius: 3, opacity: 0.4, x: 1, y: 1, style: { marginVertical: 5 } }} >
                                    <TouchableHighlight style={styles.touchhl}>
                                        <TouchableOpacity onPress={() => this.bookinformation()}>
                                            <Image style={styles.picture} source={require('../../res/book/8.jpg')}></Image>
                                        </TouchableOpacity>
                                    </TouchableHighlight>
                                </BoxShadow>
                            </View>
                        </View>
                        <View style={styles.touch}>
                            <View style={styles.box}>
                                <BoxShadow setting={{ height: pxToDp(170), width: pxToDp(110), marginTop: pxToDp(10), color: '#000000', border: 4, radius: 3, opacity: 0.4, x: 1, y: 1, style: { marginVertical: 5 } }} >
                                    <TouchableHighlight style={styles.touchhl}>
                                        <TouchableOpacity onPress={() => this.bookinformation()}>
                                            <Image style={styles.picture} source={require('../../res/book/9.jpg')}></Image>
                                        </TouchableOpacity>
                                    </TouchableHighlight>
                                </BoxShadow>
                            </View>
                        </View>
                        <View style={styles.touch}>
                            <View style={styles.box}>
                                <BoxShadow setting={{ height: pxToDp(170), width: pxToDp(110), marginTop: pxToDp(10), color: '#000000', border: 4, radius: 3, opacity: 0.4, x: 1, y: 1, style: { marginVertical: 5 } }} >
                                    <TouchableHighlight style={styles.touchhl}>
                                        <TouchableOpacity onPress={() => this.bookinformation()}>
                                            <Image style={styles.picture} source={require('../../res/book/10.jpg')}></Image>
                                        </TouchableOpacity>
                                    </TouchableHighlight>
                                </BoxShadow>
                            </View>
                        </View>
                        <View style={styles.touch}>
                            <View style={styles.box}>
                                <BoxShadow setting={{ height: pxToDp(170), width: pxToDp(110), marginTop: pxToDp(10), color: '#000000', border: 4, radius: 3, opacity: 0.4, x: 1, y: 1, style: { marginVertical: 5 } }} >
                                    <TouchableHighlight style={styles.touchhl}>
                                        <TouchableOpacity onPress={() => this.bookinformation()}>
                                            <Image style={styles.picture} source={require('../../res/book/11.jpg')}></Image>
                                        </TouchableOpacity>
                                    </TouchableHighlight>
                                </BoxShadow>
                            </View>
                        </View>
                        <View style={styles.touch}>
                            <View style={styles.box}>
                                <BoxShadow setting={{ height: pxToDp(170), width: pxToDp(110), marginTop: pxToDp(10), color: '#000000', border: 4, radius: 3, opacity: 0.4, x: 1, y: 1, style: { marginVertical: 5 } }} >
                                    <TouchableHighlight style={styles.touchhl}>
                                        <TouchableOpacity onPress={() => this.bookinformation()}>
                                        <Image style={styles.picture} source={require('../../res/book/12.jpg')}></Image>
                                        </TouchableOpacity>
                                    </TouchableHighlight>
                                </BoxShadow>
                            </View>
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.word}>换一换</Text>
                        </View>
                    </View>
                </FlipCard>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    flip: {
        width: '100%',
        height: pxToDp(400),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    face: {
        width:pxToDp(365),
        height: pxToDp(405),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginLeft:pxToDp(5),
        marginRight:pxToDp(5),
    },
    touchhl: {
        position: 'relative',
        height: pxToDp(170),
        width: pxToDp(110),
        borderRadius: 3,
        overflow: 'hidden',
    },
    touch: {
        height: pxToDp(170),
        width: pxToDp(110),
        marginTop: pxToDp(10)
    },
    picture: {
        height: pxToDp(170),
        width: pxToDp(110),
    },
    text: {
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center'
    },
    word: {
        fontSize: pxToDp(20),
        alignSelf: 'center'
    }
});
export default Index;