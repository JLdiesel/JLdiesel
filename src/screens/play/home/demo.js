import React, { Component } from 'react';
import { View } from 'react-native';
import Model from '../../../component/common/pop';

class Index extends Component {
    state = {
        arr: [{ uriFace: 'https://uploadfile.huiyi8.com/2017/0408/20170408024019384.jpg', id: 1, name1: '创建公开房间', name2: '创建私人房间',teaname:'创建房间'},
        { uriFace: 'https://tse1-mm.cn.bing.net/th/id/R-C.de0043b7a1faf51c27853b88491afe52?rik=GyaQsnc%2bKpIJYA&riu=http%3a%2f%2f2d.zol-img.com.cn%2fproduct%2f68_940x705%2f905%2fcejzRDmJlDim2.jpg&ehk=%2b6RuYv4vbBDuJ0l5jbhhYobdEX2fGGGlCKvV5AF6qBw%3d&risl=&pid=ImgRaw', id: 2, name1: '热门剧本', name2: '最新剧本',teaname:'快速匹配' },
        { uriFace: 'https://bpic.588ku.com/back_origin_min_pic/19/04/12/0babf93d5bfa2099ef03cec7fe344efc.jpg!/fw/750/quality/99/unsharp/true/compress/true', id: 3, name1: '', name2: '加入房间',teaname:'查找房间' }]
    }
    render() {
        return (
            <View style={{flexDirection:'row'}}>
                {this.state.arr.map((item) =>

                    <Model item={item} />
                )}

            </View>
        );
    }
}
export default Index;
