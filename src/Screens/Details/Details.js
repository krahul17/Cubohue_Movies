import { StyleSheet, Text, View, Image, ScrollView, Platform, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cast from '../Castandcrew/Cast';
import Trailer from '../Trailer/Trailer';
import Discover from '../Discover/Discover';
import { URL } from '../../Components/Baseurl/BaseUrl';
import { useDispatch } from 'react-redux';
import { addProductToMyCart, deleteMyCartItem } from '../../reduxToolkit/MyCartSlice/MyCartSlice';
import { addProductToMovieCart, deleteMovieCartItem } from '../../reduxToolkit/MyMovieSlice/MyMovieSlice';
import DetailTopTab from '../../DetailTopTab/DetailTopTab';

const Tab = createMaterialTopTabNavigator();

const Details = ({ navigation, route }) => {
  const { item, valueSelect } = route.params
  console.log(valueSelect, 'item detrail')
  const [iconChange, setIconChange] = useState(valueSelect)
  const handleClick = () => {
    setIconChange(false)
  }
  const handleClickFalse = () => {
    setIconChange(true)
  }

  const dispatch = useDispatch();

  const goBack = () => {
    navigation.goBack();
    // navigation.state.params.onSelect({ data:iconChange });
  };

  return (
    <>
      <ScrollView >
        <View style={styles.main}>
          <View style={styles.Header}>
            <TouchableOpacity onPress={() => goBack()} style={styles.backImgtxt}>
              <Image source={require('../assets/left.png')} style={{ width: 30, height: 30, }} />
              <Text style={styles.backtxt}>Back</Text>
            </TouchableOpacity>
            {iconChange ?

              <TouchableOpacity onPress={() => {
                dispatch(item.name ? deleteMyCartItem(item.id) : deleteMovieCartItem(item.id)), handleClick()
              }}>
                <Image source={require('../assets/checked.png')} style={{ width: 30, height: 30, backgroundColor: '#4D94FF', borderRadius: 16, marginRight: 10 }} />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => {
                dispatch(item.name ? addProductToMyCart(item) : addProductToMovieCart(item)), handleClickFalse()
              }}>
                <Image source={require('../assets/plussign.png')} style={{ width: 30, height: 30, backgroundColor: '#4D94FF', borderRadius: 16, marginRight: 10 }} />
              </TouchableOpacity>
            }
          </View>
          <ImageBackground source={{ uri: URL + item.poster_path }} style={{ width: wp('100%'), height: hp('60%') }} >

          </ImageBackground>
          <View style={styles.maintxt}>
            {item.name ?
              <Text style={styles.txt}>{item.name}</Text>
              : null}
            {item.original_title ?
              <Text style={styles.txt}>{item.original_title}</Text>
              : null}
            <Text style={styles.txtdate}>{item.first_air_date}</Text>
            <Text style={styles.txthr}>2h 2m PG-13</Text>
            <Text style={styles.txtdis}>{item.overview}</Text>
            <View style={styles.mainact}>
              <View style={styles.actimain}>
                <Text style={styles.txtac}>Action</Text>
              </View>
              <View style={styles.crmain}>
                <Text style={styles.txtcr}>Crime</Text>
              </View>
              <View style={styles.thmain}>
                <Text style={styles.txtth}>Thriller</Text>
              </View>
            </View>
            <View style={styles.mainstatus}>
              <Text style={styles.txtsta}>Status: In Production</Text>
            </View>
          </View>
          <DetailTopTab />


        </View>
      </ScrollView>
    </>
  )
}

export default Details

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
  },
  txt: {
    color: 'white',
    fontSize: hp('2.9%'),
  },
  maintxt: {
    padding: 14,
  },
  txtdate: {
    color: '#737373',
  },
  txthr: {
    color: '#737373',
  },
  txtdis: {
    color: 'white',
    fontSize: hp('2.2%'),
  },
  mainact: {
    flexDirection: 'row',
  },
  txtac: {
    color: 'white',

  },
  txtcr: {
    color: 'white',
  },
  txtth: {
    color: 'white',
  },
  actimain: {
    borderRadius: 14,
    backgroundColor: '#666666',

    height: hp('3.5%'),
    width: wp('13.8%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('1.1%'),

  },
  crmain: {
    borderRadius: 14,
    backgroundColor: '#666666',
    height: hp('3.5%'),
    width: wp('13.8%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('1.1%'),
    marginLeft: hp('1.1%'),
  },
  thmain: {
    borderRadius: 14,
    backgroundColor: '#666666',
    height: hp('3.5%'),
    width: wp('14.9%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('1.1%'),
    marginLeft: hp('1.1%'),
  },
  txtsta: {
    color: 'white'

  },
  mainstatus: {
    padding: 14,
    marginLeft: hp('-1.1%'),
  },

  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1A1A1A',
    height: hp('8%'),
    marginTop: Platform.OS == 'ios' ? hp('4.4%') : null,
  },
  backImgtxt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp('2%')
  },
  backtxt: {
    fontSize: hp('2.3%'),
    color: "#fff",
    fontweight: '600',
    color: '#4D94FF',

  },
})