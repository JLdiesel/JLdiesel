import React, { PureComponent } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Top from '@components/common/top';
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: '1',
          imguri: require('../../../../res/shop/1.jpg'),
          name: '《西厢记》戏服租赁',
          price: '58.0',
          people: '8'
        },
        {
          id: '2',
          imguri: require('../../../../res/shop/2.jpg'),
          name: '《吴越王》戏服租赁',
          price: '248.0',
          people: '5'
        },
        {
          id: '3',
          imguri: require('../../../../res/shop/3.jpg'),
          name: '红娘戏服',
          price: '528.0',
          people: '20'
        },
        {
          id: '4',
          imguri: require('../../../../res/shop/4.jpg'),
          name: '红娘同款小扇',
          price: '28.0',
          people: '101'
        },
        {
          id: '5',
          imguri: require('../../../../res/shop/5.jpg'),
          name: '越剧服装头饰',
          price: '9.9',
          people: '11'
        },
        {
          id: '6',
          imguri: require('../../../../res/shop/6.jpg'),
          name: '鲤鱼精戏服租赁',
          price: '348.0',
          people: '5'
        },
        {
          id: '7',
          imguri: require('../../../../res/shop/7.jpg'),
          name: '老太君戏服',
          price: '584.0',
          people: '8'
        }
      ]
    };
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View>
        <Top icon1="arrow-back" title="戏服租赁" />
        <ScrollView style={styles.scrollview}>
          <View style={styles.tcard}>
            {this.state.data.map((item, Index) => (
              <View style={styles.ocard}>
                <TouchableOpacity
                  onPress={() => this.context.navigate('Lease')}
                >
                  <Image style={styles.image} source={item.imguri}></Image>
                  <Text style={{ fontSize: pxToDp(15) }}>{item.name}</Text>
                  <View style={styles.bottext}>
                    <Text style={{ color: '#B22222' }}>￥{item.price}</Text>
                    <Text style={{ color: 'grey' }}>{item.people}人购买</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#E2F4FE',
    marginBottom: pxToDp(70)
  },

  tcard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingBottom: pxToDp(20)
  },
  ocard: {
    width: pxToDp(170),
    borderRadius: pxToDp(10),
    margin: pxToDp(10),
    marginRight: pxToDp(5)
  },
  image: {
    height: pxToDp(170),
    width: pxToDp(170),
    borderTopLeftRadius: pxToDp(10),
    borderTopRightRadius: pxToDp(10)
  },
  bottext: {
    flexDirection: 'row',
    margin: pxToDp(5),
    justifyContent: 'space-between'
  }
});
export default Index;
