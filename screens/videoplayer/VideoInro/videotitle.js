import React, { PureComponent } from 'react';
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
import { pxToDp } from '@utils/styleKits';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
class index extends PureComponent {
  state = {};

  render() {
    return (
      <View style={{ marginVertical: 2, padding: 10 }}>
        <View>
          <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
            {this.props.title}
          </Text>
          <Text style={{ fontSize: pxToDp(14), color: 'gray' }}>
            {this.props.play}播放&emsp;{this.props.like}喜欢
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: pxToDp(16),
            marginBottom: pxToDp(16)
          }}
        >
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity>
              <Icon1 name="thumb-up" size={26} color={'gray'} />
              <Text>{this.props.dz}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity>
              <Icon1 name="grade" size={32} color={'gray'} />
              <Text>{this.props.sc}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity>
              <Icon1 name="get-app" size={32} color={'gray'} />
              <Text>缓存</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity>
              <Icon1 name="share" size={30} color={'gray'} />
              <Text>分享</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default index;
