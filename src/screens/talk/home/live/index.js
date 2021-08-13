import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import { FAB } from 'react-native-elements'
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SpeedDial } from 'react-native-elements';

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isopen:false

    }
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ecf6fc' }}>
        <ScrollView >
          <View >
            <ImageBackground style={styles.image} imageStyle={{ borderRadius: pxToDp(8) }} source={require('../../../../res/13.jpg')} >
              <Text style={{ color: "white", fontSize: pxToDp(20), margin: pxToDp(10), left: pxToDp(220) }}>直播间名字</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: pxToDp(15), margin: pxToDp(10) }}>主播名字</Text>
                <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center",marginLeft:pxToDp(150)}}>
                  <Icon name="eyeo" size={24} color={'grey'} />
                  <Text style={{ color: "white",marginLeft:pxToDp(5) }}>66</Text>
                </View>
                <LottieView style={{ width: pxToDp(70), }} source={require('../../../../res/705-linear-line.json')} autoPlay loop />
              </View>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground style={styles.image} imageStyle={{ borderRadius: pxToDp(8) }} source={require('../../../../res/14.jpg')} >
            <Text style={{ color: "white", fontSize: pxToDp(20), margin: pxToDp(10), left: pxToDp(220) }}>直播间名字</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: pxToDp(15), margin: pxToDp(10) }}>主播名字</Text>
                <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center",marginLeft:pxToDp(150)}}>
                  <Icon name="eyeo" size={24} color={'grey'} />
                  <Text style={{ color: "white",marginLeft:pxToDp(5) }}>66</Text>
                </View>
                <LottieView style={{ width: pxToDp(70), }} source={require('../../../../res/705-linear-line.json')} autoPlay loop />
              </View>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground style={styles.image} imageStyle={{ borderRadius: pxToDp(8) }} source={require('../../../../res/15.jpg')} >
            <Text style={{ color: "white", fontSize: pxToDp(20), margin: pxToDp(10), left: pxToDp(220) }}>直播间名字</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: pxToDp(15), margin: pxToDp(10) }}>主播名字</Text>
                <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center",marginLeft:pxToDp(150)}}>
                  <Icon name="eyeo" size={24} color={'grey'} />
                  <Text style={{ color: "white",marginLeft:pxToDp(5) }}>66</Text>
                </View>
                <LottieView style={{ width: pxToDp(70), }} source={require('../../../../res/705-linear-line.json')} autoPlay loop />
              </View>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground style={styles.image} imageStyle={{ borderRadius: pxToDp(8) }} source={require('../../../../res/16.jpg')} >
            <Text style={{ color: "white", fontSize: pxToDp(20), margin: pxToDp(10), left: pxToDp(220) }}>直播间名字</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: pxToDp(15), margin: pxToDp(10) }}>主播名字</Text>
                <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center",marginLeft:pxToDp(150)}}>
                  <Icon name="eyeo" size={24} color={'grey'} />
                  <Text style={{ color: "white",marginLeft:pxToDp(5) }}>66</Text>
                </View>
                <LottieView style={{ width: pxToDp(70), }} source={require('../../../../res/705-linear-line.json')} autoPlay loop />
              </View>
            </ImageBackground>
          </View>
        </ScrollView >
        <SpeedDial
  isOpen={this.state.isopen}
  icon={{ name: 'edit', color: '#fff' }}
  openIcon={{ name: 'close', color: '#fff' }}
  onOpen={() => this.setState({isopen:true})}
  onClose={() =>this.setState({isopen:false})}
>
  <SpeedDial.Action
    icon={{ name: 'add', color: '#fff' }}
    title="Add"
    onPress={() => console.log('Add Something')}
  />
  <SpeedDial.Action
    icon={{ name: 'delete', color: '#fff' }}
    title="Delete"
    onPress={() => console.log('Delete Something')}
  />
</SpeedDial>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  image: {
    borderRadius: pxToDp(10),
    justifyContent: "space-between",
    height: pxToDp(200),
    width: pxToDp(355),
    borderRadius: pxToDp(10),
    margin: pxToDp(10)
  }
});
0
export default Index;