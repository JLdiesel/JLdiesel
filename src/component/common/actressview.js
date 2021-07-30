import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { pxToDp } from '../../utils/styleKits';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
        }
    }
    render() {
        return (
            <View>
                    <View style={styles.box}>
                        <Image style={styles.image} source={this.props.picture}/>
                            <Text style={styles.text1}>{this.props.name}</Text>
                    </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box: {
        margin: pxToDp(10),
        alignItems:'center'
    },
    image: {
        height: pxToDp(80),
        width: pxToDp(80),
        borderRadius: pxToDp(40),
        margin: pxToDp(8)
    },
    text1: {
        fontSize: pxToDp(17)
    }
})
export default Index;