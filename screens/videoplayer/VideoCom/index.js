import React, { PureComponent } from 'react';
import { View, Text, Image, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { pxToDp } from '@utils/styleKits';
import { MarqueeHorizontal, MarqueeVertical } from 'react-native-marquee-ab';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
class index extends PureComponent {
  render() {
    return (
      <ScrollView>
        <View style={{ marginVertical: 2, padding: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: pxToDp(8)
            }}
          >
            <Icon1 name="campaign" size={36} color={'orange'} />
            <MarqueeVertical
              textList={[
                { label: '1', value: '一闪一闪亮晶晶，满天都是小星星' },
                { label: '2', value: '两只老虎跑的快' },
                {
                  label: '3',
                  value: '蓝蓝的天上白云飘白云下面小肥羊儿跑羊儿哪里跑'
                }
              ]}
              width={'100%'}
              height={pxToDp(40)}
              direction={'down'}
              numberOfLines={1}
              bgContainerStyle={{ backgroundColor: '#eee' }}
              textStyle={{ fontSize: 16, color: 'orange' }}
              // onTextClick={(item) => {
              //     alert('' + JSON.stringify(item));
              // }}
            />
          </View>
          <View>
            {this.props.comment.map((item, id) => (
              <View key={id}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                  }}
                >
                  <View
                    style={{
                      width: '18%',
                      borderRadius: pxToDp(50),
                      backgroundColor: '#bbb',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      style={{
                        width: pxToDp(50),
                        height: pxToDp(50),
                        borderRadius: pxToDp(60)
                      }}
                      source={{ uri: item.userimg }}
                    ></Image>
                  </View>
                  <View
                    style={{
                      width: '82%',
                      height: pxToDp(50),
                      justifyContent: 'space-evenly',
                      paddingLeft: pxToDp(8)
                    }}
                  >
                    <Text style={{ fontSize: pxToDp(14) }}>
                      {item.username}
                    </Text>
                    <Text>{item.date}</Text>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingLeft: pxToDp(8)
                  }}
                >
                  <View
                    style={{
                      width: '18%',
                      borderRadius: pxToDp(50),
                      backgroundColor: '#bbb',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  ></View>
                  <View
                    style={{ width: '82%', justifyContent: 'space-evenly' }}
                  >
                    <Text style={{ fontSize: pxToDp(15) }}>{item.usercom}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginTop: pxToDp(16),
                        marginBottom: pxToDp(16)
                      }}
                    >
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row'
                        }}
                      >
                        <Icon1 name="thumb-up" size={26} color={'gray'} />
                        <Text>{item.comdz}</Text>
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Icon1 name="grade" size={26} color={'gray'} />
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Icon1 name="thumb-down" size={26} color={'gray'} />
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Icon1
                          name="messenger-outline"
                          size={26}
                          color={'gray'}
                        />
                      </View>
                    </View>
                    <View
                      style={{ backgroundColor: '#ccc', padding: pxToDp(10) }}
                    >
                      <Text>{item.userscom}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default index;
