import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { pxToDp } from '../../../../../utils/styleKits';
import Top from '../../../../../component/common/top'

class Index extends Component {
    render() {
        return (
            <View>
                <Top icon1="arrow-back" title="俯瞰百年" />
                <ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: pxToDp(8) }}>
                        <Ionicons name="git-commit-outline" size={25} />
                        <View style={{ width: pxToDp(330), marginTop: pxToDp(3) }}>
                            <Text style={{ fontWeight: 'bold' }}>1852年（清咸丰二年）</Text>
                            <Text style={{ backgroundColor: '#8FBC8F' }}>嵊县西乡马塘村农民金其柄创“落地唱书”。落地唱书是浙江嵊县以马塘村为主一带流行的说唱形式，开始演变为在农村草台演出的戏曲形式，艺人初始均为是半农半艺的男性农民，故称男班。</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: pxToDp(8) }}>
                        <Ionicons name="git-commit-outline" size={25} />
                        <View style={{ width: pxToDp(330), marginTop: pxToDp(3) }}>
                            <Text style={{ fontWeight: 'bold' }}>1906年3月27日</Text>
                            <Text style={{ backgroundColor: '#8FBC8F' }}>嵊县东王村香火堂前，由落地唱书艺人袁福生、李茂正、高炳火、李世泉等借用四只稻桶垫底，铺上门板，演出小戏《十件头》、《倪凤煽茶》和大戏《双金花》（后半本）。这是中国越剧第一次登台试演，越剧（最初称“小歌班”）从此诞生，该日被称为越剧诞生日。</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: pxToDp(8) }}>
                        <Ionicons name="git-commit-outline" size={25} />
                        <View style={{ width: pxToDp(330), marginTop: pxToDp(3) }}>
                            <Text style={{ fontWeight: 'bold' }}>1917年5月13日</Text>
                            <Text style={{ backgroundColor: '#8FBC8F' }}>小歌班初进上海，在十六铺“新化园”演出，因艺术粗糙简陋，观众寥寥无几。后续有3班艺人来上海但均告失败。在学习绍兴大班和京剧的表演技巧后，艺术有所提高，1919年小歌班始在上海立足。</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: pxToDp(8) }}>
                        <Ionicons name="git-commit-outline" size={25} />
                        <View style={{ width: pxToDp(330), marginTop: pxToDp(3) }}>
                            <Text style={{ fontWeight: 'bold' }}>1921年9月16日</Text>
                            <Text style={{ backgroundColor: '#8FBC8F' }}>由费翠棠、颜焕亭等组成的戏班演出于第一戏院，当天，《新闻报》广告首次刊出“绍兴文戏”之名谓。</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: pxToDp(8) }}>
                        <Ionicons name="git-commit-outline" size={25} />
                        <View style={{ width: pxToDp(330), marginTop: pxToDp(3) }}>
                            <Text style={{ fontWeight: 'bold' }}>1923年7月</Text>
                            <Text style={{ backgroundColor: '#8FBC8F' }}>嵊县籍商人王金水请男班艺人金荣水回乡办第一个女班，招收13岁以下的女孩二十余人。翌年1月14日，该女班在上海升平歌舞台演出，称“髦儿小歌班”。</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default Index;