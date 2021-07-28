import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ActionButton from 'react-native-action-button';
import { NavigationContext } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View>
                <ScrollView>
                    <View>
                        <Text style={styles.text1}>他山之石</Text>
                        <View style={styles.botbox}>
                            <Image style={styles.image} source={require('../../../../res/play/1.jpg')} />
                            <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                                <Text style={styles.text2}>追鱼</Text>
                                <Text style={styles.text3} numberOfLines={4}>北宋嘉佑年间，应天府（今商丘）学子张珍之父与开封府金牡丹小姐之父金丞相原本乃是同窗好友，自幼指腹为婚。张珍父母去世后，家道衰败，金丞相嫌他贫穷便冷眼相待，让他独居后苑碧波亭，并以“金家三代不招白衣婿”为由，命张珍独居后花园碧波潭畔草庐读书，伺机退婚。鲤鱼精不甘水府寂寥，见张珍纯朴，就变成牡丹小姐每晚和他相会，不料被真牡丹小姐发现被赶出金门。假牡丹与张珍在回乡路上，被金丞相见到误以为其女与张私奔。到府内真假牡丹难辨，特请包公，鲤鱼精又闹个真假包公。后鲤鱼精转为凡人，与张珍结为夫妻。</Text>
                            </View>
                        </View>
                        <View style={styles.botbox}>
                            <Image style={styles.image} source={require('../../../../res/play/2.jpg')} />
                            <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                                <Text style={styles.text2}>周仁哭坟</Text>
                                <Text style={styles.text3} numberOfLines={4}>明代嘉靖年间，严嵩当权，朝臣杜宪被害身死。其子杜文学，结交友人凤承东，见杜家势败，落井下石以求邀功，向严嵩进谗，谓杜文学会对严嵩不利，严派人往杜家搜捕文学，杜文学仓卒之间将其妻托付予义弟周仁，请求照顾其妻，而杜文学在审讯之后，被发配充至云南。严府总管严年垂涎杜妻美貌，胁迫周仁献出杜妻，威迫利诱，既许以富贵，又以杜文学性命以为要挟。周仁夫妇迫于无奈，为免杜文学被害、又不忍献出杜妻，遂由周妻代嫁，洞房之时，周妻谋刺严年失手，自剔而死。</Text>
                            </View>
                        </View>
                        <View style={styles.botbox}>
                            <Image style={styles.image} source={require('../../../../res/play/3.jpg')} />
                            <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                                <Text style={styles.text2}>梁祝</Text>
                                <Text style={styles.text3} numberOfLines={4}>女扮男装的祝英台出门求学。途中，遇书生梁山伯，两人意趣投合，相谈甚欢，遂在草桥上以蝶为证，义结金兰。同窗三年，兄长梁山伯对“贤弟”祝英台处处呵护有加，而祝英台则对兄长的人品、学识充满仰慕，一首“执子之手，与子偕老”更激起她对梁山伯的爱恋，然梁山伯却不知祝英台本是妙龄女子。家中来信，催祝英台速归。祝英台与梁山伯一路相送，依依惜别。分手之际，祝英台假小九妹之名为梁山伯说媒，并再三叮嘱他定要早来提亲。书院师母将祝英台所托信物转交梁山伯，梁山伯恍然大悟，兴匆匆赶往祝府求婚。但此时的祝英台早已遵从父命与马家定亲。刻骨相思的一对恋人楼台重逢，竟成永诀……</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text1}>永恒经典</Text>
                        <View style={styles.botbox}>
                            <Image style={styles.image} source={require('../../../../res/play/1.jpg')} />
                            <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                                <Text style={styles.text2}>追鱼</Text>
                                <Text style={styles.text3} numberOfLines={4}>北宋嘉佑年间，应天府（今商丘）学子张珍之父与开封府金牡丹小姐之父金丞相原本乃是同窗好友，自幼指腹为婚。张珍父母去世后，家道衰败，金丞相嫌他贫穷便冷眼相待，让他独居后苑碧波亭，并以“金家三代不招白衣婿”为由，命张珍独居后花园碧波潭畔草庐读书，伺机退婚。鲤鱼精不甘水府寂寥，见张珍纯朴，就变成牡丹小姐每晚和他相会，不料被真牡丹小姐发现被赶出金门。假牡丹与张珍在回乡路上，被金丞相见到误以为其女与张私奔。到府内真假牡丹难辨，特请包公，鲤鱼精又闹个真假包公。后鲤鱼精转为凡人，与张珍结为夫妻。</Text>
                            </View>
                        </View>
                        <View style={styles.botbox}>
                            <Image style={styles.image} source={require('../../../../res/play/2.jpg')} />
                            <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                                <Text style={styles.text2}>周仁哭坟</Text>
                                <Text style={styles.text3} numberOfLines={4}>明代嘉靖年间，严嵩当权，朝臣杜宪被害身死。其子杜文学，结交友人凤承东，见杜家势败，落井下石以求邀功，向严嵩进谗，谓杜文学会对严嵩不利，严派人往杜家搜捕文学，杜文学仓卒之间将其妻托付予义弟周仁，请求照顾其妻，而杜文学在审讯之后，被发配充至云南。严府总管严年垂涎杜妻美貌，胁迫周仁献出杜妻，威迫利诱，既许以富贵，又以杜文学性命以为要挟。周仁夫妇迫于无奈，为免杜文学被害、又不忍献出杜妻，遂由周妻代嫁，洞房之时，周妻谋刺严年失手，自剔而死。</Text>
                            </View>
                        </View>
                        <View style={styles.botbox}>
                            <Image style={styles.image} source={require('../../../../res/play/3.jpg')} />
                            <View style={{ marginLeft: pxToDp(10), width: pxToDp(230) }}>
                                <Text style={styles.text2}>梁祝</Text>
                                <Text style={styles.text3} numberOfLines={4}>女扮男装的祝英台出门求学。途中，遇书生梁山伯，两人意趣投合，相谈甚欢，遂在草桥上以蝶为证，义结金兰。同窗三年，兄长梁山伯对“贤弟”祝英台处处呵护有加，而祝英台则对兄长的人品、学识充满仰慕，一首“执子之手，与子偕老”更激起她对梁山伯的爱恋，然梁山伯却不知祝英台本是妙龄女子。家中来信，催祝英台速归。祝英台与梁山伯一路相送，依依惜别。分手之际，祝英台假小九妹之名为梁山伯说媒，并再三叮嘱他定要早来提亲。书院师母将祝英台所托信物转交梁山伯，梁山伯恍然大悟，兴匆匆赶往祝府求婚。但此时的祝英台早已遵从父命与马家定亲。刻骨相思的一对恋人楼台重逢，竟成永诀……</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                {/* Rest of the app comes ABOVE the action button component !*/}
                <ActionButton buttonColor="#FA8072">
                    <ActionButton.Item buttonColor='#87CEFA' title="发起直播" onPress={() => this.context.navigate("Apply")}>
                        <Icon name="videocam-outline" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#FFB6C1' title="创作剧本" onPress={() => this.context.navigate("Create")}>
                        <Icon name="book-outline" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text1: {
        fontSize: pxToDp(20),
        fontWeight: 'bold',
        marginLeft: pxToDp(10)
    },
    botbox: {
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: pxToDp(0.5),
        margin: pxToDp(10),
        height: pxToDp(130)
    },
    text2: {
        fontSize: pxToDp(18),
        fontWeight: 'bold',
    },
    image: {
        height: pxToDp(120),
        width: pxToDp(120),
        borderRadius: pxToDp(10)
    },
    text3: {
        fontSize: pxToDp(14),
        marginTop: pxToDp(5)
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
})
export default Index;