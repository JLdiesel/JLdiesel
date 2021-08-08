import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { pxToDp } from '../../../../utils/styleKits';
import Icon from 'react-native-vector-icons/AntDesign';

class Index extends Component {
  state = {
    imformation: [
      {
        id: '1',
        avatar:
          'https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg',
        name: 'casual',
        time: '7-20',
        label: '#元宵节#快乐元宵',
        image:
          'https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg',
        title: '热门话题',
        comment: '哥，说实话，不像，就是头像和老薛差不多。',
        answeravatar:
          'https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg',
        answername: 'K宝爸吖',
        answertime: '7-20',
        answercomment: '真的不像吗？要不再看看。'
      },
      {
        id: '2',
        avatar:
          'https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg',
        name: '用户名',
        time: '7-25',
        label: '#元宵节#快乐元宵',
        image:
          'https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg',
        title: '活动精选',
        comment:
          '文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介',
        comment: '哥，说实话，不像，就是头像和老薛差不多。',
        answeravatar:
          'https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg',
        answername: 'K宝爸吖',
        answertime: '7-20',
        answercomment: '真的不像吗？要不再看看。'
      },
      {
        id: '3',
        avatar:
          'https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg',
        name: '用户名',
        time: '7-22',
        label: '#元宵节#快乐元宵',
        image:
          'https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg',
        title: '精选茶叶',
        comment:
          '文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介',
        comment: '哥，说实话，不像，就是头像和老薛差不多。',
        answeravatar:
          'https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg',
        answername: 'K宝爸吖',
        answertime: '7-20',
        answercomment: '真的不像吗？要不再看看。'
      },
      {
        id: '4',
        avatar:
          'https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg',
        name: '用户名',
        time: '7-23',
        label: '#元宵节#快乐元宵',
        image:
          'https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg',
        title: '热门话题',
        comment:
          '文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介',
        answeravatar:
          'https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg',
        answername: 'K宝爸吖',
        answertime: '7-20',
        answercomment: '真的不像吗？要不再看看。'
      },
      {
        id: '5',
        avatar:
          'https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg',
        name: '用户名',
        time: '7-29',
        label: '#元宵节#快乐元宵',
        image:
          'https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg',
        title: '活动精选',
        comment:
          '文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介',
        answeravatar:
          'https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg',
        answername: 'K宝爸吖',
        answertime: '7-20',
        answercomment: '真的不像吗？要不再看看。'
      },
      {
        id: '6',
        avatar:
          'https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg',
        name: '用户名',
        time: '7-28',
        label: '#元宵节#快乐元宵',
        image:
          'https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg',
        title: '精选茶叶',
        comment:
          '文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介文章内容简介',
        answeravatar:
          'https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg',
        answername: 'K宝爸吖',
        answertime: '7-20',
        answercomment: '真的不像吗？要不再看看。'
      }
    ],
    showSharePop: false //分享弹窗，默认不显示
  };

  onSharePress() {
    const { showSharePop } = this.state;
    this.setState({ showSharePop: !this.state.showSharePop });
  }

  render() {
    const { imformation } = this.state;
    return (
      <ScrollView>
        <View>
          <View style={styles.container}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ height: pxToDp(0), bottom: pxToDp(20) }}
            >
              <View style={{ top: pxToDp(30), marginLeft: pxToDp(10) }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: pxToDp(200),
                    height: pxToDp(90),
                    borderRadius: pxToDp(10)
                  }}
                >
                  <ImageBackground
                    source={require('../../../../res/play/1.jpg')}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%'
                    }}
                    imageStyle={{ borderRadius: pxToDp(10) }}
                  >
                    <ImageBackground
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'black',
                        width: '100%',
                        height: '100%',
                        borderRadius: pxToDp(10),
                        opacity: 0.6
                      }}
                    >
                      <Text style={{ color: 'white', fontSize: pxToDp(20) }}>
                        活动精选
                      </Text>
                    </ImageBackground>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={{ top: pxToDp(30), marginLeft: pxToDp(10) }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: pxToDp(200),
                    height: pxToDp(90),
                    borderRadius: pxToDp(10)
                  }}
                >
                  <ImageBackground
                    source={require('../../../../res/play/2.jpg')}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%'
                    }}
                    imageStyle={{ borderRadius: pxToDp(10) }}
                  >
                    <ImageBackground
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'black',
                        width: '100%',
                        height: '100%',
                        borderRadius: pxToDp(10),
                        opacity: 0.6
                      }}
                    >
                      <Text style={{ color: 'white', fontSize: pxToDp(20) }}>
                        附近茶馆
                      </Text>
                    </ImageBackground>
                  </ImageBackground>
                </TouchableOpacity>
              </View>

              <View style={{ top: pxToDp(30), marginLeft: pxToDp(10) }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: pxToDp(200),
                    height: pxToDp(90),
                    borderRadius: pxToDp(10)
                  }}
                >
                  <ImageBackground
                    source={require('../../../../res/play/3.jpg')}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%'
                    }}
                    imageStyle={{ borderRadius: pxToDp(10) }}
                  >
                    <ImageBackground
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'black',
                        width: '100%',
                        height: '100%',
                        borderRadius: pxToDp(10),
                        opacity: 0.6
                      }}
                    >
                      <Text style={{ color: 'white', fontSize: pxToDp(20) }}>
                        旅游路线
                      </Text>
                    </ImageBackground>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={{ top: pxToDp(30), marginLeft: pxToDp(10) }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: pxToDp(200),
                    height: pxToDp(90),
                    borderRadius: pxToDp(10)
                  }}
                >
                  <ImageBackground
                    source={require('../../../../res/play/4.jpg')}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%'
                    }}
                    imageStyle={{ borderRadius: pxToDp(10) }}
                  >
                    <ImageBackground
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'black',
                        width: '100%',
                        height: '100%',
                        borderRadius: pxToDp(10),
                        opacity: 0.6
                      }}
                    >
                      <Text style={{ color: 'white', fontSize: pxToDp(20) }}>
                        热门话题
                      </Text>
                    </ImageBackground>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View
              style={{
                marginLeft: pxToDp(10),
                width: pxToDp(355),
                height: pxToDp(1),
                backgroundColor: 'black',
                opacity: 0.1
              }}
            />
          </View>
          <View>
            {imformation.map((item, index) => (
              <View key={item.id} style={{ justifyContent: 'center' }}>
                {/* 头像栏  开始 */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: pxToDp(20),
                      justifyContent: 'flex-start'
                    }}
                  >
                    <TouchableOpacity style={{ marginLeft: pxToDp(15) }}>
                      <Image
                        style={{
                          width: pxToDp(40),
                          height: pxToDp(40),
                          borderRadius: pxToDp(50),
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                        source={{ uri: item.avatar }}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        alignItems: 'flex-start',
                        marginLeft: pxToDp(10),
                        height: pxToDp(40),
                        justifyContent: 'space-between'
                      }}
                    >
                      <Text style={{ fontSize: pxToDp(17) }}>{item.name}</Text>
                      <Text
                        style={{
                          textAlign: 'right',
                          color: 'black',
                          fontSize: pxToDp(13),
                          opacity: 0.5
                        }}
                      >
                        {item.time}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        alignItems: 'center',
                        marginLeft: pxToDp(15),
                        justifyContent: 'center',
                        borderColor: '#F38C23',
                        borderWidth: pxToDp(0.9),
                        width: pxToDp(65),
                        height: pxToDp(18),
                        borderRadius: pxToDp(20),
                        top: pxToDp(10)
                      }}
                    >
                      <Text style={{ color: '#F38C23', fontSize: pxToDp(12) }}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: pxToDp(15),
                      marginRight: pxToDp(15)
                    }}
                  >
                    <Icon name="like2" size={16} color={'black'} />
                    <Text style={{ marginTop: pxToDp(3) }}>15</Text>
                  </TouchableOpacity>
                </View>
                {/* 头像栏  结束 */}

                {/* 文章标签  开始 */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: pxToDp(5),
                    marginLeft: pxToDp(40)
                  }}
                >
                  <TouchableOpacity style={{ marginLeft: pxToDp(15) }}>
                    <Text style={{ fontSize: pxToDp(17), fontWeight: 'bold' }}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* 文章标签  结束 */}

                {/* 文章内容  开始 */}
                <TouchableOpacity
                  style={{
                    marginLeft: pxToDp(55),
                    marginRight: pxToDp(15),
                    marginTop: pxToDp(5)
                  }}
                >
                  <Text
                    numberOfLines={4}
                    style={{ fontSize: pxToDp(15), letterSpacing: pxToDp(1) }}
                  >
                    {item.comment}
                  </Text>
                </TouchableOpacity>
                {/* 文章内容  结束 */}

                {/* 热门回复  开始 */}
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: pxToDp(10),
                    justifyContent: 'flex-start',
                    marginLeft: pxToDp(40)
                  }}
                >
                  <TouchableOpacity style={{ marginLeft: pxToDp(15) }}>
                    <Image
                      style={{
                        width: pxToDp(30),
                        height: pxToDp(30),
                        borderRadius: pxToDp(50),
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                      source={{ uri: item.answeravatar }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      height: pxToDp(30),
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginLeft: pxToDp(15)
                    }}
                  >
                    <Text style={{ fontSize: pxToDp(15) }}>
                      {item.answername}
                    </Text>
                    <Text
                      style={{
                        textAlign: 'right',
                        color: 'black',
                        fontSize: pxToDp(12),
                        opacity: 0.5
                      }}
                    >
                      {item.answertime}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    marginLeft: pxToDp(85),
                    marginRight: pxToDp(50),
                    marginTop: pxToDp(5)
                  }}
                >
                  <Text
                    numberOfLines={4}
                    style={{ fontSize: pxToDp(15), letterSpacing: pxToDp(1) }}
                  >
                    {item.answercomment}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.Scrollable.open()}
                  style={{ marginLeft: pxToDp(85), marginTop: pxToDp(10) }}
                >
                  <Text style={{ color: '#6790DB', fontWeight: 'bold' }}>
                    展开89条回复
                  </Text>
                </TouchableOpacity>
                {/* 热门回复  结束 */}

                <RBSheet
                  ref={(ref) => {
                    this.Scrollable = ref;
                  }}
                  height={600}
                  closeOnDragDown
                  customStyles={{
                    container: {
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10
                    }
                  }}
                >
                  <ScrollView showsHorizontalScrollIndicator={false}>
                    {imformation.map((item, index) => (
                      <View key={item.id}>
                        <View>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                            }}
                          >
                            <View
                              style={{
                                flexDirection: 'row',
                                marginTop: pxToDp(20),
                                justifyContent: 'flex-start'
                              }}
                            >
                              <TouchableOpacity
                                style={{ marginLeft: pxToDp(15) }}
                              >
                                <Image
                                  style={{
                                    width: pxToDp(40),
                                    height: pxToDp(40),
                                    borderRadius: pxToDp(50),
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                  }}
                                  source={{ uri: item.avatar }}
                                />
                              </TouchableOpacity>
                              <View
                                style={{
                                  alignItems: 'flex-start',
                                  marginLeft: pxToDp(10),
                                  height: pxToDp(40),
                                  justifyContent: 'space-between'
                                }}
                              >
                                <Text style={{ fontSize: pxToDp(17) }}>
                                  {item.name}
                                </Text>
                                <Text
                                  style={{
                                    textAlign: 'right',
                                    color: 'black',
                                    fontSize: pxToDp(13),
                                    opacity: 0.5
                                  }}
                                >
                                  {item.time}
                                </Text>
                              </View>
                            </View>
                            <TouchableOpacity
                              style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: pxToDp(15),
                                marginRight: pxToDp(15)
                              }}
                            >
                              <Icon name="like2" size={16} color={'black'} />
                              <Text style={{ marginTop: pxToDp(3) }}>15</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View
                          style={{
                            marginLeft: pxToDp(55),
                            marginRight: pxToDp(15),
                            marginTop: pxToDp(5)
                          }}
                        >
                          <Text
                            numberOfLines={4}
                            style={{
                              fontSize: pxToDp(15),
                              letterSpacing: pxToDp(1)
                            }}
                          >
                            {item.comment}
                          </Text>
                        </View>
                        <View
                          style={{
                            marginTop: pxToDp(10),
                            marginLeft: pxToDp(50),
                            width: pxToDp(315),
                            height: pxToDp(1),
                            backgroundColor: 'black',
                            opacity: 0.1
                          }}
                        />
                      </View>
                    ))}
                  </ScrollView>
                </RBSheet>

                <View
                  style={{
                    marginTop: pxToDp(15),
                    marginLeft: pxToDp(50),
                    width: pxToDp(315),
                    height: pxToDp(1),
                    backgroundColor: 'black',
                    opacity: 0.1
                  }}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: pxToDp(130),
    backgroundColor: 'transparent'
  },
  wrapper: {
    height: pxToDp(270)
  },
  slide: {
    width: pxToDp(375),
    height: pxToDp(155),
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width: '100%',
    flex: 1
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  bigtext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  teabox: {
    width: pxToDp(80),
    height: pxToDp(75),
    justifyContent: 'center',
    borderRadius: pxToDp(10),
    backgroundColor: '#3CB371'
  }
});
export default Index;
