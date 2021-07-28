import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { pxToDp } from '../../../../../utils/styleKits';
import ActressView from '../../../../../component/common/actressview';
import Top from '../../../../../component/common/top'

class Index extends Component {
    render() {
        return (
            <View>
                <Top icon1="arrow-back" title="名角风采" />
                <ScrollView>
                    <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', width: pxToDp(380) }}>
                                <ActressView
                                    picture={require('../../../../../res/performer/1.jpg')}
                                    name="方亚芬" />
                                <ActressView
                                    picture={require('../../../../../res/performer/2.jpg')}
                                    name="王文娟" />
                                <ActressView
                                    picture={require('../../../../../res/performer/3.jpg')}
                                    name="王君安" />
                                <ActressView
                                    picture={require('../../../../../res/performer/4.jpg')}
                                    name="茅威涛" />
                                <ActressView
                                    picture={require('../../../../../res/performer/5.jpg')}
                                    name="吴凤花" />
                                <ActressView
                                    picture={require('../../../../../res/performer/6.jpg')}
                                    name="单仰萍" />
                                <ActressView
                                    picture={require('../../../../../res/performer/7.jpg')}
                                    name="蔡浙飞" />
                                <ActressView
                                    picture={require('../../../../../res/performer/8.jpg')}
                                    name="金美芳" />
                                <ActressView
                                    picture={require('../../../../../res/performer/9.jpg')}
                                    name="何赛飞" />
                                <ActressView
                                    picture={require('../../../../../res/performer/10.jpg')}
                                    name="陈丽君" />
                            </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default Index;