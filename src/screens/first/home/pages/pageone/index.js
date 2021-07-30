import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Top from '@components/common/top';
import GenerView from '@components/common/generview'
import { NavigationContext } from "@react-navigation/native";
class Index extends Component {
       static contextType = NavigationContext;
    render() {
        return (
            <View>
                <Top icon1="arrow-back" title="流派传奇" />
                <ScrollView style={{ marginBottom: 60 }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: pxToDp(18), margin: pxToDp(10) }}>越剧流派</Text>
                        <TouchableOpacity onPress={() => this.context.navigate("School")}>
                            <GenerView
                                picture={require('../../../../../res/genre/1.jpg')}
                                name="袁派"
                                special="质朴平易，委婉细腻，深沉含蓄，韵味醇厚" />
                        </TouchableOpacity>
                        <GenerView
                            picture={require('../../../../../res/genre/2.jpg')}
                            name="范派"
                            special="曲调华彩而有气派，唱腔深情缠绵" />
                        <GenerView
                            picture={require('../../../../../res/genre/3.jpg')}
                            name="尹派"
                            special="委婉缠绵，洒脱深沉，纯朴隽永，清新舒展" />
                        <GenerView
                            picture={require('../../../../../res/genre/4.jpg')}
                            name="傅派"
                            special="甩腔吸收了京剧长拖腔的特点，迂回曲折，节奏顿挫" />
                        <GenerView
                            picture={require('../../../../../res/genre/5.jpg')}
                            name="徐派"
                            special="高亢激昂，热情奔放，刚柔并蓄，华彩跌宕" />
                        <GenerView
                            picture={require('../../../../../res/genre/6.jpg')}
                            name="戚派"
                            special="不仅擅长表现悲剧情绪，也能创造出欢快、明朗的唱腔" />
                        <GenerView
                            picture={require('../../../../../res/genre/7.jpg')}
                            name="王派"
                            special="平易朴实，自然流畅，韵味浓郁，甩腔句幅较长，委婉曲折，情深意长。" />
                        <GenerView
                            picture={require('../../../../../res/genre/8.jpg')}
                            name="陆派"
                            special="吐字清爽，声声送听，曲调清新柔美，耐人寻味" />
                        <GenerView
                            picture={require('../../../../../res/genre/9.jpg')}
                            name="毕派"
                            special="嗓音脆亮，底气充足，行腔棱角分明，音调富有弹性" />
                        <GenerView
                            picture={require('../../../../../res/genre/10.jpg')}
                            name="张派"
                            special="行腔变化丰富，真假音结合运用自如，吐字清晰" />
                        <GenerView
                            picture={require('../../../../../res/genre/11.jpg')}
                            name="吕派"
                            special="唱腔在袁派基础上，又增加了活泼娇美、昂扬明亮的旋律色彩" />
                        <GenerView
                            picture={require('../../../../../res/genre/12.jpg')}
                            name="金派"
                            special="结构严谨，善于用不同板式和节奏、音调润腔的处理，细致揭示人物感情深处的波澜" />
                        <GenerView
                            picture={require('../../../../../res/genre/13.jpg')}
                            name="张派"
                            special="唱腔既突出人物的个性，又富有地方色彩" />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default Index;