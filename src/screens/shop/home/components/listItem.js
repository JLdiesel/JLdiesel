import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";



class ListItem extends Component {
    state = {
        isSub: "true",
    }
    subClick = () => {
        this.setState({ isSub: !this.state.isSub })
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff', height: 100, borderBottomWidth: 0.2, borderBottomColor: 'gray' }}>
                <View style={{ backgroundColor: '#fff' }}>
                    <Image source={require('../../../../res/1.jpg')} style={{ width: 40, height: 40, borderRadius: 20, margin: 10 }} />
                </View>
                <View style={{ position: 'absolute', top: 10, left: 60 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{this.props.username}</Text>
                    <Text style={{ marginTop: 12, width: 250, fontSize: 12 }}>{this.props.subs}</Text>
                    <Text style={{ marginTop: 12, width: 250, fontSize: 13 }}>2019-09-12 21:57</Text>
                </View>
               
            </View>
        );
    }
}

export default ListItem;