import { StyleSheet, Text, View, TextInput, Image,TouchableOpacity, FlatList } from 'react-native'
import React, { useState ,useEffect,useRef} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TmdbKey } from '../../Components/Baseurl/BaseUrl';
import { URL } from '../../Components/Baseurl/BaseUrl';
import Details from '../Details/Details';
import { useDispatch,useSelector } from 'react-redux';
import { addProductToMyCart,deleteMyCartItem } from '../../reduxToolkit/MyCartSlice/MyCartSlice';
// import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';


const Tvshows = ({navigation,route}) => {

  const [searchtxt, setSearchtxt] = useState('')
  const dataFromRedux=useSelector(state=>state.product)
  const [tvshow,setTvshow]=useState(dataFromRedux)
  const [tvshowNew,setTvshowNew]=useState(dataFromRedux)

  const searchRef = useRef();

  const Search = txt => {
    if (txt !== '') {
        let tempData = tvshow.filter(item => {
            return item.original_name.toLocaleLowerCase().indexOf(txt.toLocaleLowerCase()) > -1;
        });
        setTvshow(tempData);
    } else {
      setTvshow(tvshowNew)
    }
  }

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  

 
  const Getdata = ({ item,navigation,index,route }) => {
    const [iconChange, setIconChange] = useState(false)

    const handleClick =()=>{
      setIconChange(true)
    }
    const handleClickFalse =()=>{
      setIconChange(false)
    }
   


    console.log(item,'9799797')
    return(<>
    <View style={{ margin: 5 }}>
    <TouchableOpacity onPress={()=> navigation.navigate('Details',{item,valueSelect:iconChange})}>
      <Image source={{ uri: URL + item.poster_path }} style={{ width:wp('47%'), height:hp('30%'), borderRadius: 10 }} />
      </TouchableOpacity>
      {iconChange ?
      <TouchableOpacity
         onPress={()=>{[
          dispatch(deleteMyCartItem(item.id)),
          // removeItem(item),
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
          dispatch(addProductToMyCart(item)),
          // addItem(item),
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
  </>)};


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
          data={tvshow}
          numColumns={2}
          // keyExtractor={host_sublist => host_sublist.id}
          renderItem={({ item, index }) =>
            (<Getdata item={item} index={index} navigation={navigation} route={route}></Getdata>)} />

      
      </View>

    </>)
}

export default Tvshows

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