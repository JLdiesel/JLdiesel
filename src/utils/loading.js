import React, { PureComponent } from 'react';
import {
  View,
  Text,
  ProgressBarAndroid,
  Modal,
  StyleSheet
} from 'react-native';

import styles from './styles';

export default class Loading extends PureComponent {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  render() {
    return (
      <Modal transparent={true} onRequestClose={() => this.onRequestClose()}>
        <View style={styles.loadingBox}>
          <ProgressBarAndroid styleAttr="Inverse" color="#FF4500" />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  loadingBox: {
    // Loading居中
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
});
