import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,Image,ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from "@react-navigation/native";
import { pxToDp } from '@utils/styleKits';
import Modal from '@components/Modal'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            arr: [{
            id: 1,
            name: '南微',
            title: '王派',
            uri:require('../../../assets/2.png')
    }]
        }
    }
    toggleModal = () => {
        this.setState({isModalVisible:!this.state.isModalVisible})
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View>
                  <TouchableOpacity onPress={() => this.context.navigate("study")}>
                    <Ionicons name="musical-notes-sharp" size={25} color="red" />
                    <Text>练唱学堂</Text>
                </TouchableOpacity>
                    <TouchableOpacity
                            style={{ justifyContent: 'center', alignItems: 'center' }}
                            onPress={this.toggleModal}
                        >
                            <View>
                                <ImageBackground
                                    style={{ width: 150, height: 150 ,}} source={require('../../../assets/2.png')} imageStyle={{borderRadius:pxToDp(20)}}
                                >
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 28 }}>
                                         12312312
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                
                    <Modal isModalVisible={this.state.isModalVisible} toggleModalProps={this.toggleModal} arr={this.state.arr}  />
           
              
            </View>
        );
    }
}

export default Index;