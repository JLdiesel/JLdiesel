import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustormerBar from './components/CustormerBar';
import Live from './live';
import Script from './script/index';
import Forum from './forum/index';


export default  () => {
  return(
  <ScrollableTabView
    initialPage={0}
    renderTabBar={() => <CustormerBar />}
  >
    <Live tabLabel='直播广场'/>
    <Script tabLabel='剧本中心'/>
    <Forum tabLabel='论坛'/>
  </ScrollableTabView>
  );
}