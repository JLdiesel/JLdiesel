import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustormerBar from './component/CustormerBar';
import Dongtai  from './component/dontai'
import Collect from './component/collect';
import Soucang from './component/soucang'


export default  () => {
  return(
  <ScrollableTabView
    initialPage={0}
    renderTabBar={() => <CustormerBar />}
  >   
  <Collect tabLabel='收藏'/>
  <Dongtai tabLabel='动态'/>
  
    <Soucang tabLabel='剧本中心'/>
  </ScrollableTabView>
  );
}
