import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist'

export default class Example extends Component {
  constructor(){
    super()
    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)
    this.renderDetail = this.renderDetail.bind(this)

    this.data = [
      {
        time: '1917年', 
        title: '小歌班初进上海', 
        description: '在十六铺“新化园”演出，因艺术粗糙简陋，观众寥寥无几。后续有3班艺人来上海但均告失败。在学习绍兴大班和京剧的表演技巧后，艺术有所提高，1919年小歌班始在上海立足。',
        lineColor:'#009688', 
        imageUrl: 'https://img2.baidu.com/it/u=2668043386,1547377255&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '1920年', 
        title: '戏客班', 
        description: '时为“小歌班”的升平歌舞台老板周麟趾，从嵊县请来民间音乐组织“戏客班”的3位乐师组成越剧史上第一支专业伴奏乐队。', 
        imageUrl: 'https://img2.baidu.com/it/u=2668043386,1547377255&fm=26&fmt=auto&gp=0.jpg'
      },
      {time: '1921年',
       title: '绍兴文戏', 
        description:'吸收京剧、绍剧的表演程式，向古装大戏发展。剧目则受海派京剧影响，主要编演连台本戏，在“大世界”、“新世界”等游乐场以及茶楼、旅社、小型剧场演出。',
        imageUrl: 'https://img2.baidu.com/it/u=2668043386,1547377255&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        time: '1923年', 
        title: '髦儿小歌班', 
        description: '1923年7月，嵊县籍商人王金水请男班艺人金荣水回乡办第一个女班，招收13岁以下的女孩二十余人。翌年1月14日，该女班在上海升平歌舞台演出，称“髦儿小歌班” ',
        lineColor:'#009688', 

        imageUrl: 'https://img2.baidu.com/it/u=2668043386,1547377255&fm=26&fmt=auto&gp=0.jpg。'
      },
      {
        time: '1925年', 
        title: '越剧', 
        description: '1925年9月17日上海《新闻报》演出广告中首以“越剧”称之。', 

        imageUrl: 'https://img2.baidu.com/it/u=2668043386,1547377255&fm=26&fmt=auto&gp=0.jpg'
      }    
       
      
      
    ]
    this.state = {selected: null}
  } 

  onEventPress(data){
    this.setState({selected: data})
  }

  renderSelected(){
     
  }

  renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>
    var desc = null
    if(rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>   
          <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      )
    
    return (
      <View style={{flex:1}}>
        {title}
        {desc}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSelected()}
        <Timeline 
          style={styles.list}
          data={this.data}
          circleSize={20}
          circleColor='rgba(0,0,0,0)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: 5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          innerCircle={'icon'}
          onEventPress={this.onEventPress}
          renderDetail={this.renderDetail}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  title:{
    fontSize:16,
    fontWeight: 'bold'
  },
  descriptionContainer:{
    flexDirection: 'row',
    paddingRight: 50
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  }
});