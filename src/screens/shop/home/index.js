import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Top from '@components/common/top'
import { pxToDp } from '@utils/styleKits';
import Swiper from 'react-native-swiper';
import { NavigationContext } from "@react-navigation/native";
class Index extends Component {
     static contextType = NavigationContext;
    render() {
        return (
            <View>
                <Top title="越市" />
                <ScrollView>
                    {/*轮播 */}
                    <View style={{ height: pxToDp(300) }}>
                        <Swiper style={styles.wrapper}
                            removeClippedSubviews={false}
                            showsButtons={false}
                            loop={true}
                            autoplay={true}
                            showsPagination={false}
                            autoplayTimeout={3}
                        >
                            <View style={styles.slide1}>
                                <Image style={styles.lunboimage} source={require('../../../res/18.jpg')} />
                            </View>
                            <View style={styles.slide2}>
                                <Image style={styles.lunboimage} source={require('../../../res/19.jpg')} />
                            </View>
                        </Swiper>
                    </View>
                    {/*新人礼遇 */}
                    <Text style={styles.title}>新人礼遇</Text>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.image1} source={require('../../../res/17.jpg')} />
                    </View>
                    {/*小推广 */}
                    <Text style={styles.title}>长袖轻舞，越音袅袅</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={styles.box}>
                            <Image style={styles.image2} source={require('../../../res/7.jpg')} />
                            <Text style={styles.text}>今日特惠</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.image2} source={require('../../../res/13.jpg')} />
                            <Text style={styles.text}>更低价格</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.image2} source={require('../../../res/16.jpg')} />
                            <Text style={styles.text}>当季新品</Text>
                        </View>
                    </View>
                    {/*戏服租赁 */}
                    <View style={{ margin: pxToDp(20) }}>
                        <Image style={styles.image3} source={require('../../../res/30.jpg')} />
                        {/*越剧周边 */}
                        <Image style={styles.image4} source={require('../../../res/29.jpg')} />
                    </View>
                    {/*推荐模块 */}
                    <Text style={styles.title}>你可能喜欢</Text>
                    <View style={styles.tcard}>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../res/shop/1.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}> 敦煌文化随行杯</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥58.0</Text>
                                    <Text style={{ color: 'grey' }}>8人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../res/shop/2.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}> 敦煌文化钥匙扣</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥48.0</Text>
                                    <Text style={{ color: 'grey' }}>5人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../res/shop/3.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}>韵文博鉴*恭王府晴雨伞</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥128.0</Text>
                                    <Text style={{ color: 'grey' }}>20人购买</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ocard}>
                            <TouchableOpacity onPress={() => this.context.navigate("Good")}>
                                <Image style={styles.image} source={require('../../../res/shop/4.jpg')}></Image>
                                <Text style={{ fontSize: pxToDp(15) }}> 敦煌沙漏小夜灯</Text>
                                <View style={styles.bottext}>
                                    <Text style={{ color: '#B22222' }}>￥128.0</Text>
                                    <Text style={{ color: 'grey' }}>101人购买</Text>
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
    wrapper: {
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        height: pxToDp(300),
    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
        height: pxToDp(300),
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
    lunboimage: {
        height: pxToDp(300),
        width: '100%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: pxToDp(18),
        margin: pxToDp(10)
    },
    image1: {
        height: pxToDp(100),
        width: pxToDp(350),
        borderRadius: pxToDp(10)
    },
    box: {
        height: pxToDp(115),
        width: pxToDp(80),
        backgroundColor: '#FFB6C1',
        alignItems: 'center',
        borderRadius: pxToDp(10)
    },
    image2: {
        height: pxToDp(90),
        width: pxToDp(80),
        borderTopLeftRadius: pxToDp(10),
        borderTopRightRadius: pxToDp(10)
    },
    text: {
        fontSize: pxToDp(15),
        color: 'white',
        fontWeight: 'bold'
    },
    image3: {
        height: pxToDp(150),
        width: pxToDp(340),
        borderRadius: pxToDp(10)
    },
    image4: {
        height: pxToDp(150),
        width: pxToDp(340),
        marginTop: pxToDp(10),
        borderRadius: pxToDp(10)
    }
});
export default Index;