import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Custormerbar from './component/CustormerBar';
import Dongtai  from './component/dontai'
import Collect from './component/collect';
import Soucang from './component/soucang'


export default  () => {
  return(
  <ScrollableTabView
    initialPage={0}
    renderTabBar={() => <Custormerbar />}
  >   
 <Soucang tabLabel='投稿'/>
  <Dongtai tabLabel='动态'/>
    <Collect tabLabel='收藏'/>
   
  </ScrollableTabView>
  );
}