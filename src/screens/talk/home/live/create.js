import React,{ Component } from 'react';
import { View,Text } from 'react-native';
import Top from '@components/common/top';

class Index extends Component{
    render(){
        return(
            <View>
                 <Top icon1="arrow-back" title="创作你的剧本" />
                <Text>3页面</Text></View>
        );
    }
}
export default Index;