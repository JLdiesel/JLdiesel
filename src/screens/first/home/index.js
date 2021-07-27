

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { CollapsibleHeaderTabView } from 'react-native-scrollable-tab-view-collapsible-header'
import { pxToDp } from '@utils/styleKits';
import Ezswiper from '@components/common/ezswiper'
import Modal from '@components/Modal'
export default class ExampleBasic extends React.PureComponent {
    state = {
        isModalVisible: false, arr: [{
            id: 1,
            name: '南微',
            title: '王派',
            uri:require('../../../assets/6.jpg')
    }]}
    toggleModalProps = () => {
        this.setState({isModalVisible:!this.state.isModalVisible})
    }
    render() {
        return (
            <CollapsibleHeaderTabView style={{ backgroundColor: 'skyblue' }} renderScrollHeader={() => <Ezswiper />}>
     
                    <Modal  isModalVisible={this.state.isModalVisible} toggleModalProps={this.toggleModalProps}  arr={this.state.arr} />
            
            </CollapsibleHeaderTabView>
        )
    }
}





const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        borderRightWidth: pxToDp(1),
        width: pxToDp(120)
    },
    text1: {
        fontSize: pxToDp(18),
        color: '#003c66',
        fontWeight: "bold"
    },
    text2: {
        fontSize: pxToDp(15),
        color: '#7090A8'
    }
})