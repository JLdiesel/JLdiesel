import React, { Component } from 'react';
import { StyleSheet, View,Text,Image,ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import { FAB } from 'react-native-elements';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static contextType = NavigationContext;
  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
          <ScrollView >
          <Image style={styles.image} source={require('../../../../res/13.jpg')} />
          <Image style={styles.image} source={require('../../../../res/14.jpg')} />
          <Image style={styles.image} source={require('../../../../res/15.jpg')} />
          <Image style={styles.image} source={require('../../../../res/16.jpg')} />
          </ScrollView >
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="#FA8072">
          <ActionButton.Item buttonColor='#87CEFA' title="发起直播" onPress={() => this.context.navigate("Apply")}>
            <Icon name="videocam-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#FFB6C1' title="创作剧本"  onPress={() => this.context.navigate("Create")}>
            <Icon name="book-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
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
  image:{
      height:pxToDp(200),
      width:pxToDp(355),
      borderRadius:pxToDp(10),
      margin:pxToDp(10)
  }
});

export default Index;