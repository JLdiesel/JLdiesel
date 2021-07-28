import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Swiper from 'react-native-swiper';
import Top from '@components/common/top'
class Index extends Component {
    render() {
        //console.log(this.props);
        const { goToPage, tabs, activeTab } = this.props;
        //goToPag 函数 负责跳转页面
        //tabs 标题数组
        //activeTab 当前激活索引
        return (
            <View>
                <Top title="百越台" icon2="search" />
                {/*轮播图 */}
                <View style={{ height: pxToDp(160) }}>
                    <Swiper style={styles.wrapper}
                        removeClippedSubviews={false}
                        showsButtons={false}         //显示控制按钮
                        loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                        autoplay={true}              //自动轮播
                        showsPagination={false}   //是否显示小圆点
                        autoplayTimeout={3}          //每隔3秒切换
                    >
                        <View style={styles.slide1}>
                            <Image style={{ height: pxToDp(150), width: pxToDp(355), borderRadius: pxToDp(20), margin: pxToDp(10) }} source={require('../../../../res/performer/7.jpg')} />
                        </View>
                        <View style={styles.slide2}>
                            <Image style={{ height: pxToDp(150), width: pxToDp(355), borderRadius: pxToDp(20), margin: pxToDp(10) }} source={require('../../../../res/performer/8.jpg')} />
                        </View>
                        <View style={styles.slide3}>
                            <Image style={{ height: pxToDp(150), width: pxToDp(355), borderRadius: pxToDp(20), margin: pxToDp(10) }} source={require('../../../../res/performer/9.jpg')} />
                        </View>
                    </Swiper>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: pxToDp(20) }}>
                    {tabs.map((v, i) => <TouchableOpacity
                        key={i}
                        onPress={() => goToPage(i)}
                        style={{
                            justifyContent: 'center',
                            borderBottomColor: "#1874CD",
                            borderBottomWidth: activeTab === i ? pxToDp(3) : 0
                        }}
                    >
                        <Text
                            style={{ color: activeTab === i ? "black" : "grey", fontSize: activeTab === i ? pxToDp(20) : pxToDp(15) }}
                        >{v}</Text>
                    </TouchableOpacity>)}
                </View>
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
        height: pxToDp(150),
        borderRadius: pxToDp(20),
        margin: pxToDp(10)
    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
        height: pxToDp(150),
        borderRadius: pxToDp(20),
        margin: pxToDp(10)
    },
    slide3: {
        justifyContent: 'center',
        alignItems: 'center',
        height: pxToDp(150),
        borderRadius: pxToDp(20),
        margin: pxToDp(10)
    },
})
export default Index;