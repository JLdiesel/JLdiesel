import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabbar from './tabbar';
import * as Screens from './screens';
import Water from './component/water';
import Video from '../screens/videoplayer';

const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Tabbar">
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
        {/* 进入练唱页面 */}
        <Stack.Screen name="Singbefore" component={Screens.Singbefore} />
        {/*租赁商城页 */}
        <Stack.Screen name="Zulin" component={Screens.Zulin} />
        {/*周边商城页 */}
        <Stack.Screen name="Timeline" component={Screens.Timeline} />
        {/* 时间轴 */}
        <Stack.Screen name="Zhoubian" component={Screens.Zhoubian} />
        {/*设置 */}
        <Stack.Screen name="Set" component={Screens.Set} />
        {/*具体的设置内容 关于我们、推送、意见、隐私 */}
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
        {/* 剧本阅读 */}
        <Stack.Screen name="Screenpaly" component={Screens.Screenpaly} />
        {/* 论坛 */}
        <Stack.Screen name="Forum" component={Screens.Forum} />
        {/* 流派传奇 */}
        <Stack.Screen name="PageOne" component={Screens.PageOne} />
        {/* 俯瞰百年 */}
        <Stack.Screen name="PageTwo" component={Screens.PageTwo} />
        {/* 名角风采 */}
        <Stack.Screen name="PageThree" component={Screens.PageThree} />
        {/* 精选唱段 */}
        <Stack.Screen name="PageFour" component={Screens.PageFour} />
        {/* 俯瞰百年文章 */}
        <Stack.Screen name="Pagefive" component={Screens.Pagefive} />
        {/* <Stack.Screen name="Myroute" component={Screens.Myroute} /> */}
        {/*个人首页 */}

        {/**文章 */}
        <Stack.Screen name="Article" component={Screens.Article} />
        {/**名角个人页 */}
        <Stack.Screen name="Actress" component={Screens.Actress} />
        {/**流派详情页 */}
        <Stack.Screen name="School" component={Screens.School} />
        {/**剧本页 */}
        <Stack.Screen name="Drama" component={Screens.Drama} />
        {/** 历史浏览*/}
        <Stack.Screen name="History" component={Screens.History} />
        {/** 积分商城*/}
        <Stack.Screen name="Jifenshop" component={Screens.Jifenshop} />
        {/** 总订单页面*/}
        <Stack.Screen name="Order" component={Screens.Order} />
        {/** 订单信息页*/}
        <Stack.Screen name="Myorder" component={Screens.Myorder} />
        {/**地址 */}
        <Stack.Screen name="leaseorder" component={Screens.leaseorder} />
        {/* 租赁订单信息 */}
        <Stack.Screen name="address" component={Screens.address} />
        {/**增加新地址 */}
        <Stack.Screen name="Lease" component={Screens.Lease} />
        {/* 戏服租赁页 */}
        <Stack.Screen name="newAddress" component={Screens.newAddress} />
        {/**全部订单 */}
        <Stack.Screen name="Orderone" component={Screens.Orderone} />
        {/**待支付订单 */}
        <Stack.Screen name="Ordertwo" component={Screens.Ordertwo} />
        {/**待收货订单 */}
        <Stack.Screen name="Orderthree" component={Screens.Orderthree} />
        {/**待评价订单 */}
        <Stack.Screen name="Orderfour" component={Screens.Orderfour} />
        {/**退款订单页面 */}
        <Stack.Screen name="Refund" component={Screens.Refund} />
        {/**设置首页面 */}
        <Stack.Screen name="Setting" component={Screens.Setting} />
        {/**更改资料页面 */}
        <Stack.Screen name="Ziliao" component={Screens.Ziliao} />
        {/**昵称页面 */}
        <Stack.Screen name="Nickname" component={Screens.Nickname} />
        {/** 个性签名页面*/}
        <Stack.Screen name="Signature" component={Screens.Singnature} />
        {/**剧本库页面 */}
        <Stack.Screen name="Scriptlibrary" component={Screens.Scriptlibrary} />
        {/**订单确认页面*/}
        <Stack.Screen name="orderdetails" component={Screens.orderdetails} />
        {/**租赁订单确认*/}
        <Stack.Screen name="leasedetails" component={Screens.leasedetails} />
        {/**关注列表 */}
        <Stack.Screen name="Follow" component={Screens.Follow} />
        {/**点赞 */}
        <Stack.Screen name="Like" component={Screens.Like} />
        {/** */}
        <Stack.Screen name="Fan" component={Screens.Fan} />
        {/**粉丝 */}
        <Stack.Screen name="Collection" component={Screens.Collection} />
        {/**唱段的首页 */}
        <Stack.Screen name="Opera" component={Screens.Opera} />
        {/**唱段推荐 */}
        <Stack.Screen name="Optuijian" component={Screens.Optuijian} />
        {/**名角个人唱段视频 */}
        <Stack.Screen name="Opperson" component={Screens.Opperson} />
        {/**流派唱段视频 */}
        <Stack.Screen name="Opgroup" component={Screens.Opgroup} />
        {/*Vr */}
        <Stack.Screen name="VR" component={Screens.VR} />
        {/*DEMO */}
        {/*DEMO */}
        {/* <Stack.Screen name="Demo" component={Screens.Demo} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;
