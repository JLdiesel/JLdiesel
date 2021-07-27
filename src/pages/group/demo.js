import React from 'react';
import { Text,View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustormerBar from './components/CustormerBar';
import Recommend from './recommend';
import Follow from './follow';
export default  () => {
  return(
  <ScrollableTabView
    initialPage={1}
    renderTabBar={() => <CustormerBar />}
  >
    <Follow tabLabel='关注'/>
    <Recommend tabLabel='推荐'/>

  </ScrollableTabView>);
}