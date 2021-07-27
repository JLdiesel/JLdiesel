import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import ListItem from '../components/listItem';
import SvgUri from 'react-native-svg-uri';
import { Carousel } from 'teaset'
const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height
const expandIcon = '<svg t="1626745495953" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2626" width="200" height="200"><path d="M507.584 736.064a32.896 32.896 0 0 1-23.36-9.664L110.912 353.088a33.024 33.024 0 0 1 46.72-46.656l373.312 373.248a33.024 33.024 0 0 1-23.36 56.384" fill="#5477BB" p-id="2627"></path><path d="M507.584 736.064a32.896 32.896 0 0 1-23.36-56.32l382.144-382.08a33.024 33.024 0 0 1 46.656 46.656l-382.016 382.08a33.152 33.152 0 0 1-23.424 9.664" fill="#5477BB" p-id="2628"></path></svg>'
const shopzz = '<svg t="1626750411639" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4209" width="64" height="64" data-spm-anchor-id="a313x.7781069.0.i16"><path d="M816.64 97.792c29.696 0 52.224 14.336 59.904 37.888l0.512 1.536 0.512 1.536 84.992 212.992v1.024l2.56 7.68c23.04 69.632-7.168 146.432-71.68 182.272-19.456 10.752-44.032 16.384-72.192 16.384-45.056 0-87.04-19.968-115.712-54.272l-39.424-47.104-39.424 47.104a150.58 150.58 0 0 1-114.176 54.272c-45.056-0.512-86.528-19.968-114.688-54.272L358.4 457.728l-39.424 47.616c-28.672 34.304-71.168 54.272-115.712 54.272h-0.512c-27.648 0-51.712-5.12-70.656-15.872C81.92 516.608 51.2 464.896 51.2 408.064c0-15.872 2.56-32.768 7.68-48.128l0.512-1.536 0.512-1.536 91.648-219.648 0.512-1.536 0.512-2.048c7.68-22.528 28.16-35.84 56.32-35.84H816.64m0-51.2H209.408c-51.2 0-90.624 27.648-104.96 70.656L11.776 338.944c-0.512 1.536-1.024 3.072-1.536 5.12C3.584 364.544 0 386.56 0 408.064 0 483.328 40.96 552.96 107.52 588.8c27.136 14.848 59.392 22.016 95.232 22.016h0.512c59.904 0 116.736-26.624 155.136-72.704 37.888 46.08 94.72 72.192 154.112 72.704 59.392-0.512 115.712-27.136 153.6-72.704 38.4 46.08 95.232 72.704 155.648 72.704 36.864-0.512 69.632-8.192 96.768-23.04 85.504-48.128 125.952-149.504 95.232-243.2v-1.536c-0.512-2.048-1.024-4.096-2.048-6.144l-86.528-217.6c-14.848-44.544-56.32-72.704-108.544-72.704z" p-id="4210" data-spm-anchor-id="a313x.7781069.0.i15" class="selected"></path><path d="M799.232 306.688H208.384c-20.48 0-36.864 16.896-36.864 37.376s16.384 36.864 36.864 36.864H798.72c20.48 0 37.376-15.872 37.376-36.864s-16.384-37.376-36.864-37.376zM179.2 977.408c-63.488 0-114.688-51.712-114.688-115.2V673.792c0-14.336 11.264-25.6 25.6-25.6s25.6 11.264 25.6 25.6v188.416c0 35.328 28.672 64 63.488 64l654.848-0.512c34.816-0.512 63.488-29.184 63.488-64l-0.512-191.488c0-14.336 11.264-25.6 25.6-25.6s25.6 11.264 25.6 25.6l0.512 191.488c0 62.976-51.2 114.688-114.688 115.2l-654.848 0.512z" p-id="4211" data-spm-anchor-id="a313x.7781069.0.i10" class="selected"></path></svg>'
export default class Shop extends Component {

    state = {
        items: [
            "https://iknow-pic.cdn.bcebos.com/4034970a304e251fae75ad03a786c9177e3e534e",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130223%2F890845_101648793000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628482217&t=780b6043de8e564cf304bf41fd4d547d",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130223%2F890845_101648793000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628482217&t=780b6043de8e564cf304bf41fd4d547d"

        ],
        items2: [
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130223%2F890845_101648793000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628482217&t=780b6043de8e564cf304bf41fd4d547d",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130223%2F890845_101648793000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628482217&t=780b6043de8e564cf304bf41fd4d547d",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130223%2F890845_101648793000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628482217&t=780b6043de8e564cf304bf41fd4d547d",

        ],
        commentList: [{
            rank: 5,
            username: "GATHERING PREY",
            subs: "啊啊实打实大苏打实",
            date: "2020-1-1",
        }, {
            rank: 5,
            username: "GATHERING PREY",
            subs: "啊啊实打实大苏打实",
            date: "2020-1-1",
        }, {
            rank: 5,
            username: "GATHERING PREY",
            subs: "啊啊实打实大苏打实",
            date: "2020-1-1",
        },]
        , boxHeight: 250
        , angle: '180deg',
        Commentheight: 100,
        isshowall: false,

    }

    showall = () => {
        if (!this.state.isshowall) {
            this.setState({ Commentheight: this.state.commentList.length * 100 })
            this.setState({ isshowall: true })
        }
        else {
            this.setState({ Commentheight: 100 })
            this.setState({ isshowall: false })
        }
    }
    ChangeBoxheight = () => {
        if (this.state.boxHeight == 250) {
            this.setState({ boxHeight: 0 })
            this.setState({ angle: '0deg' })
        }
        else {
            this.setState({ boxHeight: 250 })
            this.setState({ angle: '180deg' })
        }
    }
    _renderItem = ({ item }) => {
        return (
            <ListItem
                coverURL={item.book_image}
                username={item.username}
                subs={item.subs}
            />)
    }

    render() {
        return (
            <View style={{ backgroundColor: 'transparent', position: 'relative' }}>
                <View style={{ backgroundColor: 'rgba(52,52,52,alpha)', position: 'absolute' }}>
                    <SvgUri svgXmlData={expandIcon} width='20' height='20' style={{ marginLeft: 350 }} />
                </View>
                <ScrollView style={{ marginBottom: 49 }}>
                    <View style={{ height: 300 }}>
                        <Carousel style={this.props.style}
                            showsButtons={false}
                            index={0}
                            loop={false}
                            autoplay={false}
                        >
                            {
                                this.state.items.map((item, index) => {
                                    return (<Image style={{ height: '100%', width: ScreenWidth }} key={index} source={{ uri: item }} />)
                                })

                            }
                        </Carousel>
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 30, borderBottomWidth: 0.8, width: 350, borderBottomColor: 'gray' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>敦煌文化沙漏小夜灯</Text>
                        <Text style={{ fontSize: 15, marginTop: 10, color: '#A0522D', fontWeight: 'bold' }}>￥128.00</Text>
                        <Text style={{ fontSize: 12, marginTop: 10, marginBottom: 20, color: '#DAA520', fontWeight: 'bold' }}>正品保证·品牌授权·七日退换·商品包邮</Text>
                    </View>
                    <View>
                        <View style={{ marginLeft: 20, marginTop: 30, width: 350, flexDirection: 'row', marginBottom: 25 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>设计细节</Text>
                            <TouchableOpacity onPress={this.ChangeBoxheight} style={{ transform: ([{ rotateX: this.state.angle }]) }}>
                                <SvgUri svgXmlData={expandIcon} width='20' height='20' style={{ marginLeft: 250, top: 8 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 20, marginTop: 20, borderBottomWidth: 0.8, width: 350, borderBottomColor: 'gray' }}>

                            {
                                this.state.items2.map((item, index) => {
                                    return (<Image
                                        resizeMode='cover'
                                        style={{ width: 355, height: this.state.boxHeight }} key={index} source={{ uri: item }} />)
                                })

                            }
                        </View>

                        <View style={{ marginLeft: 20, marginTop: 0, borderBottomWidth: 0.8, width: 350, borderBottomColor: 'gray' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, marginTop: 20 }}>商品规格</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginTop: 0, borderBottomWidth: 0.8, width: 350, borderBottomColor: 'gray' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, marginTop: 20 }}>用户评价</Text>
                                <TouchableOpacity style={{ position: 'absolute', right: 10, top: 20 }} onPress={this.showall}>
                                    <Text>{this.state.isshowall ? '收回 ＜' : '展开全部 ＞'} </Text>
                                </TouchableOpacity >

                            </View><View style={{ flex: 1, height: this.state.Commentheight }}>
                                <FlatList
                                    data={this.state.commentList} renderItem={this._renderItem} />
                            </View>
                            <View>

                            </View>
                        </View>
                    </View>
                </ScrollView>


                <View style={{ width: ScreenWidth, height: 50, backgroundColor: '#fff', position: 'absolute', top: ScreenHeight - 50, borderTopWidth: 0.8, borderTopColor: 'gray', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <TouchableOpacity>
                                <SvgUri svgXmlData={expandIcon} width="20" height="20" />
                                <Text>商城</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <TouchableOpacity>
                                <SvgUri svgXmlData={expandIcon} width="20" height="20" />
                                <Text>收藏</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <TouchableOpacity>
                                <SvgUri svgXmlData={expandIcon} width="20" height="20" />
                                <Text>购物车</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', left: 60 }}>
                            <TouchableOpacity style={{ width: 80, height: 40, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }}>
                                <Text style={{ color: "#fff" }}>加入购物车</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 80, height: 40, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 20, borderTopRightRadius: 20 }}>
                                <Text style={{ color: "#fff" }}>立即购买</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
