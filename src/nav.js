import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home, Shop, Sing, Study, Talk, Play, Mine,
  Login, GoodsList, Details, Zhoubian, Zulin
} from './screens'
import Tabbar from './tabbar'
const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName="login">
        <Stack.Screen name='tabbar' component={Tabbar} />
    
        {/* <Stack.Screen name="Demo" component={Demo} /> */}
        {/* 首页 */}
        <Stack.Screen name="home" component={Home} />
        {/* 我的 */}
        <Stack.Screen name="mine" component={Mine} />
        {/* 游玩 */}
        <Stack.Screen name="play" component={Play} />
        {/* 商城 */}
        <Stack.Screen name="shop" component={Shop} />
        {/* 论坛 */}
        <Stack.Screen name="talk" component={Talk} />
        {/* 登录 */}
        <Stack.Screen name="login" component={Login} />
        {/* 注册 */}
        {/* <Stack.Screen name="WaterFall" component={WaterFall} /> */}
        {/* 商品详情 */}
        <Stack.Screen name="good" component={GoodsList} />
        {/* 练唱 */}
        <Stack.Screen name="study" component={Study} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="sing" component={Sing} />
        {/* 商城租赁 */}
        <Stack.Screen name="zulin" component={Zulin} />
        {/* 周边 */}
        <Stack.Screen name="zhoubian" component={Zhoubian} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;