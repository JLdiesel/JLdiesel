import React, { Component } from 'react';
import { Image } from 'react-native';
import Model from './Modal';
import { TouchableOpacity } from 'react-native';
import { Button, Text, View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { pxToDp } from '@utils/styleKits';

// import React, { Component } from 'react';

class index extends Component {
    // const [isModalVisible, setModalVisible] = useState(false);
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
        }
    }
    // <Zujian arr={}/>
    // const toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    render() {
        const { item } = this.props
        return (
            <View>
                <View key={index} style={{ width: 120, height: 150, justifyContent: 'center', marginLeft: pxToDp(12) }}>
                    {/* <Button title="我打开了" onPress={toggleModal} /> */}
                    <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                        onPress={this.toggleModal}
                    >
                        <View>
                            <ImageBackground
                                style={{ width: 120, height: 150, }} source={{ uri: item.uriFace }} imageStyle={{ borderRadius: pxToDp(10) }}
                            >
                                <View style={{ justifyContent: 'center', alignItems: 'center', height: 150 }}>
                                    <Text style={{ fontSize: pxToDp(18), alignItems: 'center', justifyContent: 'center' }}>
                                        {item.teaname}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Model item={item} isModalVisible={this.state.isModalVisible} toggleModalProps={this.toggleModal} />
                </View>
            </View>
        );
    }
}

export default index;

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    scrollableModal: {
        height: 300,
    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: '#87BBE0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText1: {
        fontSize: 20,
        color: 'white',
    },
    scrollableModalContent2: {
        height: 200,
        backgroundColor: '#A9DCD3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText2: {
        fontSize: 20,
        color: 'white',
    },
});