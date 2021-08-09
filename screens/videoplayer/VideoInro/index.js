import React, { PureComponent } from 'react';
<<<<<<< HEAD
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  Image,
  textarea,
  Button,
  TextInput
} from 'react-native';
=======
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Image, textarea, Button, TextInput, } from 'react-native';
>>>>>>> 231f8c2b5ea169bec901ce33d8777af401dc7a35
import { pxToDp } from '@utils/styleKits';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
<<<<<<< HEAD
import Videotj from './videotj';
import Vtitle from './videotitle';
class index extends PureComponent {
  state = {};
  render() {
    return (
      <ScrollView>
        <View style={{ marginVertical: 2, padding: 10 }}>
          <Vtitle
            title={this.props.all.title}
            play={this.props.all.play}
            like={this.props.all.like}
            dz={this.props.all.dz}
            sc={this.props.all.sc}
          />
          <Videotj tjvideo={this.props.all.tjvideo} />
        </View>
      </ScrollView>
    );
  }
=======
import Videotj from './videotj'
import Vtitle from './videotitle'
class index extends PureComponent {
    state={
      
    }
    render() {

        return (
            <ScrollView>
                <View style={{ marginVertical: 2, padding: 10, }}>
                        <Vtitle
                        title={this.props.all.title}
                        play={this.props.all.play}
                        like={this.props.all.like}
                        dz={this.props.all.dz}
                        sc={this.props.all.sc}
                        />
                        <Videotj
                       tjvideo={this.props.all.tjvideo}

                        
                        />
                </View>
                     
            </ScrollView>

        );
    }
>>>>>>> 231f8c2b5ea169bec901ce33d8777af401dc7a35
}

export default index;
