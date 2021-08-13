import React, { PureComponent } from 'react';
<<<<<<< HEAD
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
=======
import { View,ImageBackground ,TouchableOpacity,Text} from 'react-native';
>>>>>>> 231f8c2b5ea169bec901ce33d8777af401dc7a35
import VideoPlayScreen from '../VideoPlayScreen.js';
import { pxToDp } from '@utils/styleKits.js';
import { Button } from 'react-native-elements';
class index extends PureComponent {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      videoHeight: pxToDp(220)
    };
  }
  onIt = () => {
    this.setState({
      videoHeight: (this.state.videoHeight = '100%')
    });
  };
  render() {
    const { goToPage, tabs, activeTab } = this.props;
    const { videoHeight } = this.state;
    return (
      <View>
        <View>
          <ImageBackground
            style={{
              height: pxToDp(28),
              flexDirection: 'row',
              paddingLeft: pxToDp(20),
              paddingRight: pxToDp(20),
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
            // source={require("../../../images/b7.png")}
          >
            {tabs.map((v, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => goToPage(i)}
                style={{
                  justifyContent: 'center',
                  borderBottomColor: '#50935E ',
                  borderBottomWidth: activeTab === i ? pxToDp(3) : 0
                }}
              >
                <Text
                  style={{
                    color: 'black',
                    fontSize: activeTab === i ? pxToDp(20) : pxToDp(18),
                    fontWeight: activeTab === i ? 'bold' : 'normal'
                  }}
                >
                  {v}
                </Text>
              </TouchableOpacity>
            ))}
          </ImageBackground>
        </View>
      </View>
    );
  }
=======
    constructor(props) {
        super(props);
        this.state = {
            videoHeight:pxToDp(220)
        };
      }
      onIt = () => {
        this.setState({
            videoHeight: this.state.videoHeight = '100%',
        });
    };
    render() {
        const { goToPage, tabs, activeTab } = this.props;
        const { videoHeight} = this.state;
        return (
            <View>
            
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
                    
                    </ImageBackground>
                </View>
            </View>

        );
    }
>>>>>>> 231f8c2b5ea169bec901ce33d8777af401dc7a35
}

export default index;
