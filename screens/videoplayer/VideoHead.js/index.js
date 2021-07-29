import React, { Component, createRef } from 'react';
import { View,ImageBackground ,TouchableOpacity,Text} from 'react-native';

import { pxToDp } from '@utils/styleKits.js';
// import { Video } from 'expo-av';
import Video from '../video'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoHeight: pxToDp(220),
            status:{}
        };
      }
      onIt = () => {
        this.setState({
            videoHeight: this.state.videoHeight = '100%',
        });
    };
    render() {
        const video=createRef()
        const { goToPage, tabs, activeTab } = this.props;
        const { videoHeight} = this.state;
        return (
            <View>
         
                    <Video
                        style={{ height: videoHeight, width: '100%', backgroundColor: 'red' }}
        ref={video}
        // style={styles.video}
                    
                    source={
         'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
        }
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => this.setState({status})}
      />
                    {/* <Button onPress={()=>this.onIt()} title='111'></Button> */}
             
                <View>
                    <ImageBackground
                        style={{
                            height: pxToDp(28), flexDirection: "row", paddingLeft: pxToDp(20), paddingRight: pxToDp(20),
                            justifyContent: "space-evenly", alignItems: 'center',
                        }}
                        // source={require("../../../images/b7.png")}
                    >
                        {tabs.map((v, i) => <TouchableOpacity
                            key={i}
                            onPress={() => goToPage(i)}
                            style={{
                                justifyContent: "center",
                                borderBottomColor: "#50935E ",
                                borderBottomWidth: activeTab === i ? pxToDp(3) : 0
                            }}
                        >
                            <Text
                                style={{ color: "black", fontSize: activeTab === i ? pxToDp(20) : pxToDp(18), fontWeight: activeTab === i ? 'bold' : 'normal' }}
                            >{v}</Text>
                        </TouchableOpacity>)}
                        {/* <View style={{ height: pxToDp(40), width: pxToDp(40), marginRight:pxToDp(-10) ,justifyContent:'center',alignItems:'center',flex:1}}>
          <Image style={{width:pxToDp(30),height:pxToDp(30)}} source={require('../../../../images/分类(1).png')}></Image>
        </View> */}
                    </ImageBackground>
                </View>
            </View>

        );
    }
}

export default index;