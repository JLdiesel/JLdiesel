import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustormerBar from './components/CustormerBar';
import Orderone from './pages/orderone';
import Ordertwo from './pages/ordertwo';
import Orderthree from './pages/orderthree';
import Orderfour from './pages/orderfour';


export default ({route,navigation}) => {
    console.log(route.params);
    return (
        <ScrollableTabView
            initialPage={route.params}
            renderTabBar={() => <CustormerBar />}
        >

            <Orderone tabLabel='全部' />
            <Ordertwo tabLabel='待支付' />
            <Orderthree tabLabel='待收货' />
            <Orderfour tabLabel='待评价' />
        </ScrollableTabView>
    );
}
