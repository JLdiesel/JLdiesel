import React, { Component, createRef } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits';
import Slider from '@components/common/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Video } from 'expo-av';
import { Audio } from 'expo-av';
class Index extends Component {
  state = {
    status: {},
    recording: '',
    isrecoding: false,
    playingsong: '',
    sound: [],
    isplay: false,
    URI: [],
    sing: {
      imgURL: '',
      lisnum: 1959,
      lyric:
        ' 《穆桂英挂帅》选段猛听得金鼓响画角声震唤起我破天门壮志凌云想当年桃花马上威风凛凛敌血飞溅石榴裙有生之日责当尽寸土怎能够属于他人番王小丑何足论我一剑能当百万的兵',
      toptitle: '穆桂英挂面',
      songURL: ''
    }
  };

  playSound = async () => {
    if (this.state.sound.length) {
      console.log('Loading Sound');
      console.log('Playing Sound');
      for (const sound of this.state.sound) {
        this.setState({ playingsong: sound });
        await sound.playAsync();
      }
      this.setState({ isplay: true });

      console.log(this.state.sound);
    } else {
      for (const uri of this.state.URI) {
        const { sound } = await Audio.Sound.createAsync({ uri });
        this.setState({ sound: [...this.state.sound, sound] });
      }

      console.log('Loading Sound');
      console.log('Playing Sound');
      for (const sound of this.state.sound) {
        this.setState({ playingsong: sound });
        await sound.playAsync();
      }

      this.setState({ isplay: true });
    }
  };

  pauseSound = async () => {
    console.log('Stopping Sound');
    // this.setState({sound:undefined})
    await this.state.playingsong.pauseAsync();
    this.setState({ isplay: false });
  };

  startRecording = async () => {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true
      });
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      this.setState({ recording });
      this.setState({ isrecoding: true });
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };
  stopRecording = async () => {
    console.log('Stopping recording..');
    // this.setState({recording:undefined});
    await this.state.recording.stopAndUnloadAsync();
    const uri = this.state.recording.getURI();
    console.log('Recording stopped and stored at', uri);
    this.setState({ URI: [...this.state.URI, uri] });
    this.setState({ isrecoding: false });
  };
  render() {
    const video = createRef();

    return (
      <View style={{ backgroundColor: '#E2F4FE' }}>
        <Top
          icon1="arrow-back"
          title={this.state.sing.toptitle}
          icon2="star-outline"
        />
        <View style={styles.box}>
          <Image style={styles.image} source={this.state.imgURL}></Image>
          <View>
            <Text style={styles.text1}>{this.state.sing.img}</Text>
            <Text style={styles.text3}>{this.state.sing.lisnum}人唱过</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Slider duration="60" />
        </View>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <ScrollView style={{ height: '62%' }}>
            <Text style={{ fontSize: pxToDp(25) }}>
              {this.state.sing.lyric}
            </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Video
                ref={video}
                source={{ uri: this.state.sing.songURL }}
                resizeMode="contain"
                onPlaybackStatusUpdate={(status) => this.setState({ status })}
              />
            </View>
          </ScrollView>
        </View>

        <View style={styles.bottom}>
          <View>
            <TouchableOpacity
              onPress={() =>
                this.state.status.isPlaying
                  ? video.current.pauseAsync()
                  : video.current.playAsync()
              }
            >
              <Ionicons name="musical-notes-outline" size={25} color="white" />
              <Text>{this.state.status.isPlaying ? '暂停' : '播放'}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Ionicons name="options-outline" size={25} color="white" />
              <Text>音量</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={
                this.state.isrecoding ? this.stopRecording : this.startRecording
              }
            >
              <Ionicons name="mic-circle" size={55} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Ionicons name="refresh" size={25} color="white" />
              <Text>重唱</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={this.state.isplay ? this.pauseSound : this.playSound}
            >
              <Ionicons name="checkmark" size={25} color="white" />
              <Text>结束</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    height: pxToDp(90),
    marginTop: pxToDp(5),
    marginLeft: pxToDp(17),
    borderBottomWidth: pxToDp(1),
    borderBottomColor: '#696969'
  },
  image: {
    height: pxToDp(80),
    width: pxToDp(80)
  },
  text1: {
    fontSize: pxToDp(14),
    color: '#000000'
  },
  text2: {
    fontSize: pxToDp(14),
    color: '#696969'
  },
  text3: {
    fontSize: pxToDp(11),
    color: '#808080',
    marginTop: pxToDp(40)
  },
  bottom: {
    bottom: 0,
    width: '100%',
    backgroundColor: '#3399cc',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default Index;
