import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { pxToDp } from "../../../../utils/styleKits";



class ListItem extends Component {
    state = {
        isSub: "true",
    }
    subClick = () => {
        this.setState({ isSub: !this.state.isSub })
    }

    render() {
        return (
            <View style={{ backgroundColor: 'rgba(255,255,255,0.3)', height: 100, borderBottomWidth: 0.2, borderBottomColor: 'white',marginRight:pxToDp(15) }}>
                <View >
                    <Image source={require('../../../../res/1.jpg')} style={{ width: 40, height: 40, borderRadius: 20, margin: 10 }} />
                </View>
                <View style={{ position: 'absolute', top: 10, left: 60 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{this.props.username}</Text>
                    <Text style={{ marginTop: 12, width: 250, fontSize: 12 }}>{this.props.subs}</Text>
                    <Text style={{ marginTop: 12, width: 250, fontSize: 13 }}>{ this.props.createTime}</Text>
                </View>
               
            </View>
        );
    }
}

export default ListItem;