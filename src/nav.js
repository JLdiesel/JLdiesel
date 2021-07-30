import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabbar from "./tabbar";
import * as Screens from './screens'
import Water from './component/water'
import Video from '../screens/video'
const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName="Tabbar">
        <Stack.Screen name="Tabbar" component={Tabbar} />
        {/*首页 */}
        <Stack.Screen name="Home" component={Screens.Home} />
        <Stack.Screen name="water" component={Water} />
        <Stack.Screen name="Video" component={Video} />
        {/*我的 */}
        <Stack.Screen name="My" component={Screens.Mine} />
        {/*游玩 */}
        <Stack.Screen name="Play" component={Screens.Play} />
        {/*商城 */}
        <Stack.Screen name="Shop" component={Screens.Shop} />
        {/*论坛 */}
        <Stack.Screen name="Talk" component={Screens.Talk} />
        {/*登录 */}
        <Stack.Screen name="Login" component={Screens.Login} />
        {/*注册 */}
        {/*商品 */}
        <Stack.Screen name="Good" component={Screens.GoodsList} />
        {/*练唱 */}
        <Stack.Screen name="Study" component={Screens.Study} />
        {/*练唱专辑详情 */}
        <Stack.Screen name="Details" component={Screens.Details} />
        {/*练唱页面*/}
        <Stack.Screen name="Sing" component={Screens.Sing} />
        {/*租赁商城页 */}
        <Stack.Screen name="Zulin" component={Screens.Zulin} />
        {/*周边商城页 */}
        <Stack.Screen name="Zhoubian" component={Screens.Zhoubian} />
        {/*设置 */}
        <Stack.Screen name="Set" component={Screens.Set} />
        {/*具体的设置内容。。。 */}
        <Stack.Screen name="Women" component={Screens.Women} />
        <Stack.Screen name="Tuisong" component={Screens.Tuisong} />
        <Stack.Screen name="Yijian" component={Screens.Yijian} />
        <Stack.Screen name="Yinsi" component={Screens.Yinsi} />
        {/*双人剧本 */}
        <Stack.Screen name="Act" component={Screens.Act} />
        {/*AI换衣  */}
        <Stack.Screen name="Change" component={Screens.Change} />
        {/*申请直播*/}
        <Stack.Screen name="Apply" component={Screens.Apply} />
        {/*创作剧本 */}
        <Stack.Screen name="Create" component={Screens.Create} />

        <Stack.Screen name="PageOne" component={Screens.PageOne} />
        <Stack.Screen name="PageTwo" component={Screens.PageTwo} />
        <Stack.Screen name="PageThree" component={Screens.PageThree} />
        <Stack.Screen name="PageFour" component={Screens.PageFour} />
        {/* <Stack.Screen name="Myroute" component={Screens.Myroute} /> */}
        {/*个人首页 */}


        <Stack.Screen name="Article" component={Screens.Article} />
        <Stack.Screen name="Actress" component={Screens.Actress} />
        <Stack.Screen name="School" component={Screens.School} />
        <Stack.Screen name="Drama" component={Screens.Drama} />
        <Stack.Screen name="History" component={Screens.History} />
        <Stack.Screen name="Jifenshop" component={Screens.Jifenshop} />
        <Stack.Screen name="Order" component={Screens.Order} />
        <Stack.Screen name="Orderone" component={Screens.Orderone} />
        <Stack.Screen name="Ordertwo" component={Screens.Ordertwo} />
        <Stack.Screen name="Orderthree" component={Screens.Orderthree} />
        <Stack.Screen name="Orderfour" component={Screens.Orderfour} />
        <Stack.Screen name="Refund" component={Screens.Refund} />
        <Stack.Screen name="Setting" component={Screens.Setting} />
        <Stack.Screen name="Scriptlibrary" component={Screens.Scriptlibrary} />
        {/*DEMO */}
        {/* <Stack.Screen name="Demo" component={Screens.Demo} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;
