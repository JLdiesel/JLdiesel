import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions ,StyleSheet} from 'react-native';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits'
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
import jpg1 from '../../../res/16.jpg'
import jpg2 from '../../../res/20.jpg'
import { scrollInterpolator, animatedStyles } from './animation';


const SLIDER_WIDTH = Dimensions.get('screen').width
const ITEM_WIDTH = SLIDER_WIDTH *0.75;
const ITEM_HEIGHT = ITEM_WIDTH * 1.5;

const DATA = [
   jpg1,jpg2,jpg1,jpg2
]




class Index extends Component {
    state={index:0}
    _renderItem({ item }) {
    return (
        <Image source={item} style={[styles.itemContainer]} />
    );
  }

    render() {
        return (
            <View style={{backgroundColor:'#E2F4FE'}}>
                <Top icon1="arrow-back" title="戏服体验馆" />
                <View style={{ alignItems: 'center', alignSelf: 'center', marginTop: pxToDp(30) }}>
                    <Text style={{ fontSize: pxToDp(20) }}>想知道自己穿上戏服是什么样吗？{"\n"}
                        来试试看吧!
                    </Text>
              <TouchableOpacity style={{ marginTop: pxToDp(20), backgroundColor: '#008080', alignItems: 'center', alignSelf: 'center', height: pxToDp(50), width: pxToDp(200), justifyContent: 'center' }}>
                        <Text style={{ fontSize: pxToDp(25), color: 'white' }}>+导入</Text>
                    </TouchableOpacity>
                   
                    <Carousel
                   
                        ref={(c) => { this._carousel = c; }}
                      data={DATA}
                     renderItem={this._renderItem}
                      sliderWidth={ITEM_HEIGHT}
                        itemWidth={ITEM_WIDTH*1.1}
                    containerCustomStyle={styles.carouselContainer}

                     onSnapToItem={(index) => this.setState({ index })}
                      scrollInterpolator={scrollInterpolator}
                      slideInterpolatedStyle={animatedStyles}
                        loop={true}
                       useScrollView={true}      
                      
                    />
                       
                     
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    carouselContainer: {

        margin: 25,
        marginLeft:50
        
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
      backgroundColor: 'dodgerblue',
      borderRadius:5
  }
});
export default Index;