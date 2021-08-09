import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Top from '@components/common/top'
import { pxToDp } from '../../../../../utils/styleKits';
class index extends Component {
    render() {
        return (
            <ScrollView
                stickyHeaderIndices={[0]}
            >
                <View>
                    <Top icon1="arrow-back" title="精选唱段" />
                </View>
                <View >
                    <View>
                        <Image style={{ width: '100%', height: pxToDp(200) }} source={{ uri: "https://img0.baidu.com/it/u=952587805,2463391979&fm=26&fmt=auto&gp=0.jpg" }}></Image>
                    </View>
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>谁翻乐府旧谣?</Text>
                        </View>
                        <Text style={{ fontSize: pxToDp(15), margin: pxToDp(4) }}>
                            &emsp;&emsp;喜欢越剧，因为爱那份温柔缠绵轻灵动人。眼波流转，水袖轻扬，云步轻点，温柔喟叹。山水清秀的江南孕育了越剧的诗情画意。沪剧太芜杂，黄梅戏忒土，扬剧过于烟尘气，至于河北梆子河南梆子更与灵动无缘
                        </Text>

                        <Text style={{ fontSize: pxToDp(15), margin: pxToDp(4) }}>
                            &emsp;&emsp;越剧的桃红柳绿痴男怨女雨恨云愁风月无边，最是熨帖人心思。《红楼梦》，《西厢记》，《陆游与唐婉》，《追鱼》，《碧玉簪》……一提便牵扯出一段情愫。花心思雪肚肠，惟有越剧消受得起。
                        </Text>
                        <View style={{ width: '96%', height: pxToDp(200), marginLeft: pxToDp(8), marginTop: pxToDp(4), marginBottom: pxToDp(4) }}>
                            <Image style={{ width: '100%', height: pxToDp(200), borderRadius: pxToDp(10) }} source={{ uri: 'https://img0.baidu.com/it/u=1876423826,1384171009&fm=26&fmt=auto&gp=0.jpg' }}></Image>
                        </View>
                        <Text style={{ fontSize: pxToDp(15), margin: pxToDp(4) }}>
                            &emsp;&emsp; 恋上越剧的人必是痴情者。轻吟浅唱间，宝玉黛玉眉眼深情，鲤鱼精一往情深，唐婉凄哀的眼神钻碎人心，山伯英台翩翩化蝶……越剧在情上作文章，看天地看前后，唱不离一个情字。江山功名如烟尘，哪抵得过孟丽君一声娇嗔。仙道神力本无妄，哪替得了断桥相会西湖泛舟。翠绸青衫里，啼不尽青山隐隐绿水幽幽。
                        </Text>

                        <Text style={{ fontSize: pxToDp(15), margin: pxToDp(4) }}>
                            &emsp;&emsp; 越剧的唱腔以婉约轻灵为主，那是西窗竹影烟波画船，是流水落花燕语呢喃，是寒塘鹤影冷月诗魂。越剧的服饰婉丽秀气，软烟罗香云纱碎花云绸豆绿水缎，盈盈一握小蛮腰。原先多为女串生角，眉眼姿丽的女子，将小生演得那般风流俊朗。越剧，只能浸在婉转花香润在朦胧烟雨里。细碎的唱词，温静的底蕴，缓缓吟轻轻唱。
                        </Text>
                        <View style={{ width: '96%', height: pxToDp(200), marginLeft: pxToDp(8), marginTop: pxToDp(4), marginBottom: pxToDp(4) }}>
                            <Image style={{ width: '100%', height: pxToDp(200), borderRadius: pxToDp(10) }} source={{ uri: 'https://img0.baidu.com/it/u=2218639897,3986178039&fm=26&fmt=auto&gp=0.jpg' }}></Image>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;在我们的小镇上，不少老人喜欢越剧。闲来无事，就一起聚在镇子的小桥畔，或者穿堂风而过的弄躺里，猫儿蜷在脚旁，岁月静好，他们沉浸在古老的旋律里。
                            </Text>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;我祖母亦欢喜听越剧。老家青瓦白墙的院子里，老广播刺刺拉拉放一段甜糯婉转的越剧，栀子花正开着，润润的小雨下得没有尽头。祖母在走廊里绣古老的花样，一面轻轻哼唱。日子就在这绵长的唱腔里拉扯得很长，宛如祖母手里的丝线。
                            </Text>
                        </View>
                        <View style={{ width: '96%', height: pxToDp(200), marginLeft: pxToDp(8), marginTop: pxToDp(4), marginBottom: pxToDp(4) }}>
                            <Image style={{ width: '100%', height: pxToDp(200), borderRadius: pxToDp(10) }} source={{ uri: 'https://img1.baidu.com/it/u=1901648492,3311744043&fm=26&fmt=auto&gp=0.jpg' }}></Image>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>

                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;看《可凡倾听》一期节目：红楼梦圆。越剧名家徐玉兰王文娟老师来了。二人年事已高，却皆精神矍铄。二老言语间是软糯的越腔。
                            </Text>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>

                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;当年拍摄越剧电影《红楼梦》的琐事细细想慢慢谈，台下大批戏迷缓缓想悠悠忆。人人脸上都有韶光飞逝的沧桑与积淀，旧梦重回的温馨与陶醉。也只有越剧，容养着这份天长地久细水长流。
                            </Text>
                        </View>

                        <View style={{ margin: pxToDp(4) }}>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;记得浙江小百花艺术团曾经赴台演出，场场爆满，多少人拭着眼角沉浸在那旋律与腔调里。演出结束后，一个八十多岁的台湾老太太，到后台去，颤抖着声音唱：我家有个小九妹，聪明伶俐人敬佩……
                            </Text>
                        </View>

                        <View style={{ width: '96%', height: pxToDp(200), marginLeft: pxToDp(8), marginTop: pxToDp(4), marginBottom: pxToDp(4) }}>
                            <Image style={{ width: '100%', height: pxToDp(200), borderRadius: pxToDp(10) }} source={{ uri: 'https://img1.baidu.com/it/u=1322644164,3519551591&fm=26&fmt=auto&gp=0.jpg' }}></Image>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>

                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;老太太说，这些年啊，就盼着这乡音……在场者无不动容。有一段时间，越剧如旗袍、国画等传统艺术一样不景气，剧团四处奔波亦收效甚微。小百花艺术团于是走过了不为人知的坎坷波折。
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;陶慧敏、何赛飞等优秀的越剧演员纷纷转型。俊女子茅威涛领小百花艰苦创业寻求发展。小百花二十岁生日，终于迎来了越剧的春天，姹紫嫣红秀色满园。茅茅组织了小百花会员，大家一起参加“告别二十年”大型越剧表演会。会员们每人都领到一枚小小的徽章，是一朵花，凝结了深爱与痴情，执著与坚守。
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;大家将徽章别在胸口，都泪光闪烁。茅茅在表演会上罗衫广袖，对那泪水浸染歌声渗透的舞台深深拜，深深拜。谁翻乐府旧谣，恰心事随风飘。
                            </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: pxToDp(16) }}>
                        <Text style={{ fontSize: pxToDp(18), color: '#ccc' }}>-THE END-</Text>
                    </View>
                    <View style={{ width: '100%', height: pxToDp(12), backgroundColor: '#ccc' }}></View>
                </View>
                <View style={{ width: '96%', marginLeft: pxToDp(8), marginBottom: pxToDp(12) }}>
                    <View style={{ marginTop: pxToDp(20), marginBottom: pxToDp(20) }}>
                        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>评论 |</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: pxToDp(16), marginBottom: pxToDp(16) }}>
                        <Image style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(60) }} source={{ uri: "https://img0.baidu.com/it/u=1752414660,3344020033&fm=26&fmt=auto&gp=0.jpg" }}></Image>
                        <View style={styles.inputWrap}>
                            <TextInput style={styles.textInput}
                                // defaultValue='浙里看百年'
                                placeholder="来聊聊你的看法吧"
                                placeholderTextColor='#abbed7'
                            />
                        </View>
                    </View>
                    <View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ width: '14%', borderRadius: pxToDp(60), backgroundColor: '#bbb', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(60) }} source={{ uri: "https://img0.baidu.com/it/u=1752414660,3344020033&fm=26&fmt=auto&gp=0.jpg" }}></Image>
                            </View>
                            <View style={{ width: '86%', height: pxToDp(40), justifyContent: 'space-evenly', paddingLeft: pxToDp(8) }}>
                                <Text style={{ fontSize: pxToDp(14) }}>可畏的男人</Text><Text>7-11</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingLeft: pxToDp(8) }}>
                            <View style={{ width: '18%', borderRadius: pxToDp(50), backgroundColor: '#bbb', justifyContent: 'center', alignItems: 'center' }}></View>
                            <View style={{ width: '82%', justifyContent: 'space-evenly', }}>
                                <Text style={{ fontSize: pxToDp(15) }}>山东话版的林妹妹。有几分林黛玉倒把垂杨柳的风味了</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: pxToDp(16), marginBottom: pxToDp(16) }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <Icon1 name="thumb-up" size={26} color={'gray'} />
                                        <Text>2.1w</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon1 name="thumb-down" size={26} color={'gray'} />
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon1 name="messenger-outline" size={26} color={'gray'} />
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#ccc', padding: pxToDp(10) }}>
                                    <Text>海十七侠：河南话的李师师，陕西话的貂蝉，山西话的杨玉环</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    inputWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 245,
        height: 48,
        backgroundColor: 'transparent',
        borderColor: '#aaa',
        borderRadius: 20,
        marginLeft: 20,
        // marginTop: 20
    },
    textInput: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 1,
        width: 200,
        height: 48,
        fontSize: 18,
        color: '#3f4b48',
    },
});

export default index;