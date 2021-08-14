import React, { PureComponent } from 'react';
import {
  Text,
  View,
StyleSheet,
  ScrollView,
  Image,

} from 'react-native';

import EZSwiper from 'react-native-ezswiper';
import { pxToDp } from './styleKits';

export default class page extends PureComponent {
    render() {

        return (
            <ScrollView >
                <View style={{ backgroundColor: 'green', width: '95%', height: '100%', margin: pxToDp(10), borderRadius: pxToDp(10) }} >
                    <Text style={styles.big}>{this.props.pagedata.title}</Text>
                    <View style={{ flexDirection: 'row', paddingLeft: pxToDp(20) }}>
                        <Text>{this.props.pagedata.local}</Text>
                        <Text style={{ paddingLeft: pxToDp(20) }}>{this.props.pagedata.title}</Text>
                    </View>
                    <View>
                        <Text style={{ padding: pxToDp(20) }}>{this.props.pagedata.introduce}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {
                            this.props.pagedata.img.map((item, id) => (
                                <View key={id} style={{ flex: 1 }}>
                                    <Image key={id} source={{ uri: item }} style={{ width: '90%', height: pxToDp(300), alignSelf: 'center', marginBottom: pxToDp(10), borderRadius: pxToDp(10) }} />

                                </View>
                            ))
                        }
                    </View>
                    <View>
                        <Text style={styles.big}>在这附近</Text>
                        {this.props.pagedata.nearby.map((item, id) => (
                            <View key={id} style={{ paddingLeft: pxToDp(20), marginBottom: pxToDp(20) }}>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>[{item.location}]</Text>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item.event}</Text>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item.time}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f1',
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
        // top:300
    },
    swiper: {
        backgroundColor: '#f1f1f1',
    },
    cell: {
        // backgroundColor: 'red',
        width: '100%',
        height: '100%',
        borderWidth: 5,
        borderRadius: 20,

    },

    image: {
        width: "50%",
        height: "100%"
        // zIndex:3,
    },
    big: {
        fontSize: 25,
        fontWeight: "700",
        color: 'white',
        margin: 20,
        marginBottom: 10

    },
    mid: {
        fontSize: 15,
        fontWeight: '400',
        color: 'white'

    }

});
