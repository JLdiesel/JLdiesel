import React,{Component} from 'react';
import CustormerBar from './components/CustormerBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Live from './live';
import Script from './script';

export default class ScrollvieTabViewz extends Component  {
    render(){
    return(
    <ScrollableTabView
        initialPage={1}
        renderTabBar={() => <CustormerBar />}
    >  
        <Live tabLabel='直播' />
        <Script tabLabel='剧本' />      
    </ScrollableTabView>
    );}
}