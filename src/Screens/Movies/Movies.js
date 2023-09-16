import { StyleSheet, Text, StatusBar, View, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect,useRef } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TmdbKey } from '../../Components/Baseurl/BaseUrl';
import { URL } from '../../Components/Baseurl/BaseUrl';
import { useDispatch,useSelector } from 'react-redux';
// import { addItemToCart } from '../../redux/action/Acions';
// import { removeItemFromCart } from '../../redux/action/Acions';
import { addProductToMovieCart,deleteMovieCartItem } from '../../reduxToolkit/MyMovieSlice/MyMovieSlice';

const Movies = ({navigation}) => {

  const [searchtxt, setSearchtxt] = useState('')

  const dispatch = useDispatch();
const dataFromRedux=useSelector(state=>state.Moviecart)
const [movieData, setMovieData] = useState(dataFromRedux)
const [movieDataNew, setMovieDataNew] = useState(dataFromRedux)
console.log(movieData, 'movieData')
const searchRef = useRef();

const Search = txt => {
  if (txt !== '') {
      let tempData = movieData.filter(item => {
          return item.original_title.toLocaleLowerCase().indexOf(txt.toLocaleLowerCase()) > -1;
      });
      setMovieData(tempData);
  } else {
    setMovieData(movieDataNew)
  }
}

const Getdata = ({ item,index }) => {
  const [iconChange, setIconChange] = useState(false)

  const handleClick =()=>{
    setIconChange(true)
  }
  const handleClickFalse =()=>{
    setIconChange(false)
  }
  // console.log(item, '9799797')
  return (<>
    <View style={{ margin: 5 }}>
    <TouchableOpacity onPress={()=> navigation.navigate('Details',{item,valueSelect:iconChange})}>
      <Image source={{ uri: URL + item.poster_path }} style={{ width: wp('47%'), height: hp('30%'), borderRadius: 10 }} />
     </TouchableOpacity>
      {iconChange ?
      <TouchableOpacity
         onPress={()=>{[
          dispatch(deleteMovieCartItem(item.id)),
          // removeItem(index),
          handleClickFalse()
          // console.log(item);
          ]}}   
      >
        <Image source={require('../assets/checked.png')} style={{
          width: 30, height: 30, marginTop: hp('-4.3%'),
          marginLeft: wp('38%'), backgroundColor: 'white', borderRadius: 20
        }} />
         </TouchableOpacity>
         :
      <TouchableOpacity
         onPress={()=>{[
          dispatch(addProductToMovieCart(item)),
          handleClick()
          // console.log(item);
          ]}}   
      >
        <Image source={require('../assets/plussign.png')} style={{
          width: 30, height: 30, marginTop: hp('-4.3%'),
          marginLeft: wp('38%'), backgroundColor: 'white', borderRadius: 20
        }} />
      </TouchableOpacity>
      }
    </View>
  </>)
};

return (
  <>

    {/*
  <StatusBar backgroundColor="#fff" /> */}
    <View style={styles.main}>
      <View style={styles.txttmain}>

        {/* <Text style={styles.txtt}>Tvshows</Text> */}
        <Image style={styles.searchLogo} source={require('../assets/searchwhite.png')} tintColor='#fff' />

        <TextInput style={{ height: 40, color: '#fff', marginLeft: hp('0.8%') }} 
        placeholder="Movies & TV Shows"
          placeholderTextColor={'#fff'} 
          ref={searchRef}
          onChangeText={txt => { Search(txt); }}
          // defaultValue={searchtxt}
        />

      </View>
      <Text style={styles.txtt}>Coming Soon</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={movieData}
        numColumns={2}
        // keyExtractor={host_sublist => host_sublist.id}
        renderItem={({ item, index }) =>
          (<Getdata item={item} index={index}></Getdata>)} />


    </View>

  </>)
}

export default Movies

const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: '#000'
  },
  txttmain: {
    flexDirection: 'row',
    width: wp('96%'),
    height: hp('5.0%'),
    borderRadius: hp('1.2%'),
    marginTop: hp('2.3%'),
    marginLeft: hp('0.8%'),
    backgroundColor: '#1a1a1a',
  },
  searchLogo: {
    // color:'white',
    height: hp('2.4%'),
    width: wp('4.5%'),
    marginTop: hp('1.4%'),
    marginLeft: hp('1.2%'),
  },
  txtt: {
    fontSize: hp('2.2%'),
    fontWeight: '600',
    color: 'white',
    marginLeft: hp('1.8%'),
    marginTop: hp('1.4%'),
  },
})