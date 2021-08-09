import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from "@react-navigation/native";


class Index extends PureComponent {

    state = {
        book: [{ bookname: '111', name: '12111', date: '2019-05-02' }, { bookname: '11', name: '12111', date: '2019-05-02' }, { bookname: '1111', name: '12111', date: '2019-05-02' }, , { bookname: '1', name: '12111', date: '2019-05-02' }
            , { bookname: '111111', name: '12111', date: '2019-05-02' }, { bookname: '11111', name: '12111', date: '2019-05-02' }]
    }

    static contextType = NavigationContext;
    render() {
        return (

            <ScrollView style={{}}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.state.book.map(item => (
                        <View key={item.bookname} style={{ width: pxToDp(110), marginTop: pxToDp(10), marginLeft: pxToDp(10), backgroundColor: '#ccc', borderRadius: pxToDp(10), overflow: 'hidden' }}>
                            <Image source={{ uri: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg' }} style={{ width: '100%', height: pxToDp(150) }} />
                            <Text style={{ alignSelf: 'center', marginLeft: pxToDp(10) }}>{item.bookname}</Text>
                            <Text style={{ alignSelf: 'center', marginLeft: pxToDp(10) }}>{item.date}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

        )
    }
}

export default Index;