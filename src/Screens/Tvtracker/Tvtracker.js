import { Button, Pressable, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, FlatList, ScrollView, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { URL } from '../../Components/Baseurl/BaseUrl';
import { removeItemFromCart } from '../../redux/action/Acions';



const windowWidth = Dimensions.get('window').width;
const Tvtracker = ({ navigation }) => {
  // const {item}=route.params;
  const items = useSelector(state => state.cart);

  console.log(items);                              
                                                          

  const Getdata = ({ item, navigation }) => {
    console.log(item, 'item ``')
    return (<>
      <View style={{ marginVertical: hp('2%') }}>
        <TouchableOpacity style={styles.mainimg} onPress={() => navigation.navigate("Seasons",{item})}>
          <View>
            <Image source={{ uri: URL + item.backdrop_path }} style={{ width: wp('15%'), height: hp('9.5%'),borderRadius:4 }} />
                      </View>
          <View style={styles.maintxt1}>
            {item.name ?
            <Text style={styles.txt1}>{item.name}</Text>
            :
            null}
            {item.title ?
            <Text style={styles.txt1}>{item.title}</Text>
            :
            null }
            <View style={styles.mainprog}>
              <Progress.Bar progress={item.vote_count}width={270} height={10} color={'#187498'} borderColor={'#000'}  style={styles.progg} />
              {/* <Text style={styles.epitxt}>1/100 </Text> */}
            </View>
            <View style={styles.mainleftinfo}>
              <View style={styles.infomain}>
                <Text style={styles.txxt}>Episode info</Text>
              </View>
              <Text style={styles.lefttxt}>0 left</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{marginBottom:8}}/>
      </View>
    </>)
  };
  return (
    <>
      <StatusBar backgroundColor="#1A1A1A" />
      {/* <View > */}
      <ScrollView style={styles.main}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={items}
            // keyExtractor={host_sublist => host_sublist.id}
            renderItem={({ item, index }) =>
              (<Getdata item={item} index={index} navigation={navigation}></Getdata>)} />
      </ScrollView >
      <View style={styles.mainbutt}>
      <TouchableOpacity style={styles.mainbtnn} onPress={() => navigation.navigate("Find")}>
        <Text style={styles.btntxt}>Add TV Show</Text>
      </TouchableOpacity>
      </View>
      {/* </View> */}
    </>)
}
export default Tvtracker
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    flex: 1,
    padding: 10,
   
  },
  mainbtnn: {
    backgroundColor: '#4D94FF',
    width: wp('40%'),
   
    height: hp('4.9%'),
    borderRadius: hp('1.8%'),
    alignItems:'center',
    justifyContent:'center',
    marginBottom:hp('0.8%'),
    
  },
  mainimg: {
    flexDirection: 'row',
    height: hp('7%'),
    marginTop: hp('1.1%'),
  },
  maintxt1: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: wp('2.5%'),
  },
  mainprog: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },
  progg: {
    // marginTop: hp('4.4%'),
    // marginLeft: hp('-3.1%'),
  },
  btntxt: {
    color: 'white',
    fontSize: hp('2.2%')
  },
  // txtin: {
  //   color: 'white',
  //   marginTop: hp('5.4%'),
  //   marginLeft: wp('-2.1%'),
  //   fontSize: hp('1.9%')
  // },
  txt1: {
    color: 'white',
    marginTop: hp('1.2%'),
    fontSize: hp('1.9%')
  },
  infomain: {
    backgroundColor: '#1A1A1A',
    height: hp('3%'),
    width: wp('26%'),
    marginTop: hp('0.9%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txxt: {
    color: 'white',
    fontSize: hp('1.9%')
  },
  mainleftinfo: {
    flexDirection: 'row',
  },
  epitxt: {
    color: 'white',
    // marginLeft: hp('-3.1%'),
    // marginTop: hp('-1.1%'),
  },
  lefttxt: {
    color: 'white',
    marginTop: hp('0.9%'),
    marginLeft: hp('1.1%'),
  },
  mainbutt:{
    width: wp('40%'),
    backgroundColor:'black',
    alignSelf:'center',
  alignItems:'flex-end',
  justifyContent:'flex-end',
  position:'absolute',
  bottom:0
  },
})



