import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Platform } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { URL } from '../../Components/Baseurl/BaseUrl';
import { addProductToMovieCart, deleteMovieCartItem } from '../../reduxToolkit/MyMovieSlice/MyMovieSlice';


const Countdown = ({ navigation }) => {
  const items = useSelector(state => state.cartSlice);
  console.log(iconChange, 'iconChange');
  const [circleShow, setCircleShow] = useState(true)
  const [iconChange, setIconChange] = useState(false)
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [itemId, setItemId] = useState(false)
  const dispatch = useDispatch();

  const handleCirclePress = (itemId) => {
    setSelectedItemId(itemId);
  };

  const Getdata = ({ item }) => {
    console.log(item, 'item ``')
    const isSelected = item.id === selectedItemId;
    return (<>
      <View style={styles.mainCircleView}>
        {iconChange ?
          <View style={{ marginLeft: wp('3%') }}>
            <TouchableOpacity onPress={() => { handleCirclePress(item.id), setItemId(item.id) }}>
              {isSelected ?
                <Image source={require('../assets/check.png')} style={{ width: 18, height: 18, marginTop: hp('2%'), }} />
                :
                <View style={styles.circle} />
              }
            </TouchableOpacity>
          </View>
          : null}
        <View style={styles.mainimm}>
          <Image source={{ uri: URL + item.backdrop_path }} style={{ width: wp('12%'), height: hp('9%'), marginTop: wp('4%'), borderRadius: 6, marginLeft: hp('1.8%') }} />
          <View style={{ marginRight: wp('0.8%') }}>
            <Text style={styles.txt1} numberOfLines={2} >
              {item.title}</Text>
            <Text style={styles.txt1}>{item.release_date}</Text>
          </View>
        </View>
       
      </View>
     
    </>)
  };
  return (
    <>
      <StatusBar backgroundColor="#1A1A1A" />
      <View style={styles.main}>
        <View style={styles.headermain}>
          <Text style={[styles.countTxt, { position: "absolute" }]}>CountDown</Text>
          {iconChange ?
            <View style={[styles.donView, { marginLeft: wp('65%') }]}>
              <TouchableOpacity onPress={() => setIconChange(!iconChange)}>
                <Text style={[styles.countTxt, { marginRight: 25 }]}>Done</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => dispatch(deleteMovieCartItem(itemId))}>
                <Text style={styles.countTxt}>Delete</Text>
              </TouchableOpacity>
            </View>
            :
            <TouchableOpacity onPress={() => setIconChange(!iconChange)}>
              <Text style={[styles.countTxt, { marginLeft: wp('75%') }]}>Edit</Text>
            </TouchableOpacity>
          }
        </View>
        <View style={styles.txttmain}>
          <Text style={styles.txtt}>Movies</Text>
          <ScrollView  >
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={items}
              // keyExtractor={host_sublist => host_sublist.id}
              renderItem={({ item, index }) =>
                (<Getdata item={item} index={index} navigation={navigation}></Getdata>)} />
          </ScrollView >
        
        </View>
        {/* <View style={{marginTop:70}} /> */}
      </View>
    </>
  )
}
export default Countdown
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000'
  },
  headermain: {
    backgroundColor: '#1A1A1A',
    padding: 10,
    height: hp('8%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS == 'ios' ? hp('4.4%') : null,
  },
  countTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  donView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainCircleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  txttmain: {
    width: wp('96%'),
    // height:hp('81%'),
    borderRadius: hp('1.2%'),
    marginVertical: hp('2.3%'),
    marginLeft: hp('0.8%'),
    backgroundColor: '#1A1A1A',
  },
  txtt: {
    fontSize: hp('2.2%'),
    fontWeight: '600',
    color: 'white',
    marginLeft: hp('1.8%'),
    marginTop: hp('1.4%'),
    marginBottom: hp('0.8%')
  },
  circle: {
    backgroundColor: 'white',
    height: hp('2.2%'),
    width: wp('4.4%'),
    borderRadius: 50,
    marginTop: hp('2.7%'),
  },
  txt1: {
    color: 'white',
    marginTop: hp('0.2%'),
    marginLeft: hp('1.8%'),
    fontSize: hp('1.9%'),
  },
  txtdate: {
    marginTop: hp('0.4%'),
    color: '#737373',
  },
  mainimm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: hp('1.5%')
  },
})