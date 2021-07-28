import React,{ Component } from 'react';
import { View,Text } from 'react-native';
import Top from '../../../component/common/top';
import { Switch } from 'react-native-elements';
import { pxToDp } from '../../../utils/styleKits';

class Index extends Component{
    render(){
        return(
            <View>
                <Top icon1='arrow-back' title="账号管理" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: pxToDp(15),}}>
                    <Text style={{ fontSize: pxToDp(20) }}>微信</Text>
                    <Switch value={false} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: pxToDp(15)}}>
                    <Text style={{ fontSize: pxToDp(20) }}>QQ</Text>
                    <Switch value={false} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: pxToDp(15)}}>
                    <Text style={{ fontSize: pxToDp(20) }}>微博</Text>
                    <Switch value={false} />
                </View>

            </View>
        );
    }
}
export default Index;