import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustormerBar from '../home/components/CustormerBar';
import PageOne from '../home/pages/pageone';
import PageTwo from '../home/pages/pagetwo';
import PageThree from '../home/pages/pagethree';
import PageFour from '../home/pages/pagefour';


export default  () => {
  return(
  <ScrollableTabView
    initialPage={0}
    renderTabBar={() => <CustormerBar />}
  >
    <PageOne tabLabel='推荐'/>
    <PageTwo tabLabel='百年'/>
    <PageThree tabLabel='名角'/>
    <PageFour tabLabel='唱段'/>
  </ScrollableTabView>
  );
}