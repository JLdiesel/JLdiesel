import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustormerBar from './components/CustormerBar';
import Video from './information/video';
import Picture from './information/picture';
import Song from './information/song';
import News from './information/news';


export default () => {
    return (
        <ScrollableTabView style={{backgroundColor:'#E2F4FE'}}
            initialPage={0}
            renderTabBar={() => <CustormerBar />}
        >

            <Video tabLabel='视频 ' />
            <Picture tabLabel='图片' />
            <Song tabLabel='唱段' />
            <News tabLabel='新闻' />
        </ScrollableTabView>
    );
}