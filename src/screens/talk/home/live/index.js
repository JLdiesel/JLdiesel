import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView,TouchableOpacity } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import { FAB } from 'react-native-elements'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ecf6fc' }}>
        <ScrollView >
          <Image style={styles.image} source={require('../../../../res/13.jpg')} />
          <Image style={styles.image} source={require('../../../../res/14.jpg')} />
          <Image style={styles.image} source={require('../../../../res/15.jpg')} />
          <Image style={styles.image} source={require('../../../../res/16.jpg')} />
        </ScrollView >
          <FAB size="large" placement="right" color="#B0C4DE"  onPress={() => this.context.navigate("Apply")} />
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
    height: pxToDp(200),
    width: pxToDp(355),
    borderRadius: pxToDp(10),
    margin: pxToDp(10)
  }
});

export default Index;