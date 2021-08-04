import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Top from '@components/common/top';
import GenerView from '@components/common/generview'
import { NavigationContext } from "@react-navigation/native";
class Index extends Component {
       static contextType = NavigationContext;
       state={
           GenerList:[
               {id:1,name:'袁派',special:'质朴平易，委婉细腻，深沉含蓄，韵味醇厚',imguri:''},
               {id:2,name:'袁派',special:'质朴平易，委婉细腻，深沉含蓄，韵味醇厚',imguri:''},
               {id:3,name:'袁派',special:'质朴平易，委婉细腻，深沉含蓄，韵味醇厚',imguri:''},
               {id:4,name:'袁派',special:'质朴平易，委婉细腻，深沉含蓄，韵味醇厚',imguri:''},
               {id:5,name:'袁派',special:'质朴平易，委婉细腻，深沉含蓄，韵味醇厚',imguri:''},
               {id:6,name:'袁派',special:'质朴平易，委婉细腻，深沉含蓄，韵味醇厚',imguri:''},
               {id:7,name:'袁派',special:'质朴平易，委婉细腻，深沉含蓄，韵味醇厚',imguri:''},

               
           ]
       }
    render() {
        return (
            <View style={{backgroundColor:'#E2F4FE'}}>
                <Top icon1="arrow-back" title="流派传奇" />
                <ScrollView style={{ marginBottom: 80 }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: pxToDp(18), margin: pxToDp(10) }}>越剧流派</Text>
                        {this.state.GenerList.map((item,id)=>( 
                        <TouchableOpacity onPress={() => this.context.navigate("School")}>
                            <GenerView
                                key={id}
                                name={item.name}
                                special={item.special} 
                                imguri={item.imguri}/>
                        </TouchableOpacity>
                        )) }
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default Index;