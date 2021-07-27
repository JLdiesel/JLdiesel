
import React, { Component } from 'react'
import { View, Dimensions, Text, Image, } from 'react-native'
import { Carousel } from 'teaset'
const ScreenWidth = Dimensions.get('window').width
export default class EzSwiper extends Component {
    state = {
        angle: '0deg',
        items: [
            "https://iknow-pic.cdn.bcebos.com/4034970a304e251fae75ad03a786c9177e3e534e",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130223%2F890845_101648793000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628482217&t=780b6043de8e564cf304bf41fd4d547d",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130223%2F890845_101648793000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628482217&t=780b6043de8e564cf304bf41fd4d547d"
        ],
    }


    render() {
        return (
            <Carousel
                style={{ height: 200, margin: 5 }}
            >
                {
                    this.state.items.map((item, index) => {
                        return (<Image key={index} resizeMode='cover'
                            style={{ height: 200, borderRadius: 25 }} source={{ uri: item }} />)
                    })
                }
            </Carousel>
        )
    }
}
