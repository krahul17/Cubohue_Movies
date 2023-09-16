// import { StyleSheet, Text, View, Image, ScrollView,Platform, TouchableOpacity } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { URL } from '../../Components/Baseurl/BaseUrl';
// import * as Progress from 'react-native-progress';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { useDispatch } from 'react-redux';
// import { addProductToMyCart, deleteMyCartItem } from '../../reduxToolkit/MyCartSlice/MyCartSlice';
// import { TmdbKey } from '../../Components/Baseurl/BaseUrl';

// const Seasons = ({ navigation, route }) => {
//   const { item } = route.params;

//   const [hide, setHide] = useState(true)
//   const [iconChange, setIconChange] = useState(false)
//   const [tvData, settvData] = useState('')
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const isSelected =(index)=> index.id === selectedItemId;
//   // console.log(item.id, 'episode item');
//   console.log(tvData, 'tvData season');


//   const dispatch = useDispatch();

//   const handleClick = () => {
//     setIconChange(false)
//   }
//   const handleClickFalse = () => {
//     setIconChange(true)
//   }
//   useEffect(async () => {

//     try {
//       const url = 'https://api.themoviedb.org/3/tv/' + item.id + '?api_key=' + TmdbKey + '&language=en-US&page=1&include_adult=false'
//       const data = await fetch(url);
//       const response = await data.json();
//       settvData(response)
//       console.log(response, 'season response')

//       return response.episodes;

//     } catch (error) {
//       return [];
//     }

//   }, [])

//   const handleCirclePress = (index) => {
//     setSelectedItemId(index);
//   };

//   return (
//     <View style={styles.main}>
//       <ScrollView>
//       <View style={styles.Header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backImgtxt}>
//           <Image source={require('../assets/left.png')} style={{ width: 30, height: 30, }} />
//           <Text style={styles.backtxt}>Back</Text>
//         </TouchableOpacity>
//         {iconChange ?
//           <TouchableOpacity onPress={() => {
//             dispatch(addProductToMyCart(item)), handleClick()
//           }}>
//             <Image source={require('../assets/plussign.png')} style={{ width: 30, height: 30, backgroundColor: '#4D94FF', borderRadius: 16, marginRight: 10 }} />
//           </TouchableOpacity>
//           :
//           <TouchableOpacity onPress={() => {
//             dispatch(deleteMyCartItem(item.id)), handleClickFalse()
//           }}>
//             <Image source={require('../assets/checked.png')} style={{ width: 30, height: 30, backgroundColor: '#4D94FF', borderRadius: 16, marginRight: 10 }} />
//           </TouchableOpacity>

//         }
//          </View>
//         <Image source={{ uri: URL + item.backdrop_path }} style={{ width: wp('100%'), height: hp('20%') }} />
//          <View style={styles.maintxt}>
//         {item.name ?
//           <Text style={styles.txt}>{item.name} </Text>
//           :
//           null}
//         {item.title ?
//           <Text style={styles.txt}>{item.title} </Text>
//           :
//           null}
//         {item.release_date ?
//           <Text style={styles.txtdate}>{item.release_date}</Text>
//           :
//           null}
//         <Text style={styles.txthr}>2h 2m PG-13</Text>
//         <Text style={styles.txthr}>{item.first_air_date}</Text>
//         {item.overview ?
//           <View style={{ padding: 1 }}>
//             <Text style={styles.desctxt}>{item.overview}</Text>
//           </View>
//           : null}
//         <Text style={styles.txtsea}>Seasons</Text>
//         <View style={styles.maincir}>

        
//           <View style={{ flexDirection: 'column' }}>
//             {Array.from({ length: parseInt(tvData.number_of_seasons) }).map((_, index) => (
//               <>
     
//                 <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  
//                   <TouchableOpacity onPress={() => handleCirclePress(index)}>
//                     {isSelected(index) ?
//                       <View style={styles.circle} />
//                       :
//                       <Image source={require('../assets/check.png')} style={{ width: 18, height: 18, marginTop: hp('2%'), }} />
//                     }
//                   </TouchableOpacity>

//                   <TouchableOpacity onPress={() => navigation.navigate('Episode', { item })}>
//                     <Text style={styles.txtsea1}>Season {index +1}</Text>
//                   </TouchableOpacity>

//                   {hide ?
//                     <Progress.Bar progress={0} width={200} height={10} color={'#187498'} borderColor={'#000'} style={styles.progg} />
//                     :
//                     <Progress.Bar progress={1} width={200} height={10} color={'#187498'} borderColor={'#000'} style={styles.progg} />
//                   }
//                   <Text style={styles.txt10}>{tvData.episode_count}</Text>
//                 </View>
               
//               </>
//             ))}
//           </View>
          
//         </View>

//       </View>
//       </ScrollView>
//     </View>
//   )
// }

// export default Seasons

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   Header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#1A1A1A',
//     height: hp('8%'),
//     marginTop: Platform.OS == 'ios' ? hp('4.4%') : null,

//   },
//   backImgtxt: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: wp('2%')
//   },
//   backtxt: {
//     fontSize: hp('2.3%'),
//     color: "#fff",
//     fontweight: '600',
//     color: '#4D94FF',

//   },
//   txt: {
//     color: 'white',
//     fontSize: hp('2.9%'),
//   },
//   maintxt: {
//     padding: 14,
//   },
//   txtdate: {
//     marginTop: hp('0.4%'),
//     color: '#737373',
//   },
//   desctxt: {
//     color: '#fff'
//   },
//   txthr: {
//     color: '#737373',
//   },
//   txtsea: {
//     color: 'white',
//     fontSize: hp('2.9%'),
//     marginTop: hp('0.7%'),
//   },
//   circle: {
//     backgroundColor: 'white',
//     height: hp('2.2%'),
//     width: wp('4.4%'),
//     borderRadius: 50,
//     marginTop: hp('2.7%'),
//   },
//   maincir: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: wp('-4%')
//   },
//   txtsea1: {
//     color: 'white',
//     marginTop: hp('2.4%'),
//     marginLeft: hp('2.8%'),
//   },
//   progg: {
//     marginTop: hp('3.2%'),
//     marginLeft: hp('2.1%'),
//   },
//   txt10: {
//     color: 'white',
//     marginTop: hp('2.4%'),
//     marginLeft: wp('0.8%'),
//   },
// })







import { StyleSheet, Text, View, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { URL } from '../../Components/Baseurl/BaseUrl';
import * as Progress from 'react-native-progress';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { addProductToMyCart, deleteMyCartItem } from '../../reduxToolkit/MyCartSlice/MyCartSlice';
import { TmdbKey } from '../../Components/Baseurl/BaseUrl';

const Seasons = ({ navigation, route }) => {
  const { item } = route.params;

  const [hide, setHide] = useState(true);
  const [iconChange, setIconChange] = useState(false);
  const [tvData, setTvData] = useState('');

  const [selectedItemIds, setSelectedItemIds] = useState([]);

  // const isSelected = (circleItem) => circleItem.id === selectedItemId;
const isSelected = (circleItem) => selectedItemIds.includes(circleItem.id);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIconChange(false);
  };

  const handleClickFalse = () => {
    setIconChange(true);
  };

  useEffect(() => {
    const fetchTvData = async () => {
      try {
        const url = 'https://api.themoviedb.org/3/tv/' + item.id + '?api_key=' + TmdbKey + '&language=en-US&page=1&include_adult=false';
        const data = await fetch(url);
        const response = await data.json();
        setTvData(response);
        console.log(response, 'season response');
      } catch (error) {
        console.error(error);
      }
    };

    fetchTvData();
  }, []);

  const handleCirclePress = (circleItem) => {
    const selectedIds = [...selectedItemIds];
    const index = selectedIds.indexOf(circleItem.id);
    if (index !== -1) {
      selectedIds.splice(index, 1); // Remove the ID if it already exists
    } else {
      selectedIds.push(circleItem.id); // Add the ID if it doesn't exist
    }
    setSelectedItemIds(selectedIds);
  };
  

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backImgtxt}>
            <Image source={require('../assets/left.png')} style={{ width: 30, height: 30 }} />
            <Text style={styles.backtxt}>Back</Text>
          </TouchableOpacity>
          {iconChange ? (
            <TouchableOpacity onPress={() => {
              dispatch(addProductToMyCart(item));
              handleClick();
            }}>
              <Image source={require('../assets/plussign.png')} style={{ width: 30, height: 30, backgroundColor: '#4D94FF', borderRadius: 16, marginRight: 10 }} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => {
              dispatch(deleteMyCartItem(item.id));
              handleClickFalse();
            }}>
              <Image source={require('../assets/checked.png')} style={{ width: 30, height: 30, backgroundColor: '#4D94FF', borderRadius: 16, marginRight: 10 }} />
            </TouchableOpacity>
          )}
        </View>
        <Image source={{ uri: URL + item.backdrop_path }} style={{ width: wp('100%'), height: hp('20%') }} />
        <View style={styles.maintxt}>
          {item.name ? <Text style={styles.txt}>{item.name}</Text> : null}
          {item.title ? <Text style={styles.txt}>{item.title}</Text> : null}
          {item.release_date ? <Text style={styles.txtdate}>{item.release_date}</Text> : null}
          <Text style={styles.txthr}>2h 2m PG-13</Text>
          <Text style={styles.txthr}>{item.first_air_date}</Text>
          {item.overview ? (
            <View style={{ padding: 1 }}>
              <Text style={styles.desctxt}>{item.overview}</Text>
            </View>
          ) : null}
          <Text style={styles.txtsea}>Seasons</Text>
          <View style={styles.maincir}>
            <View style={{ flexDirection: 'column' }}>
              {tvData && tvData.seasons && tvData.seasons.map((circleItem) => (
                <View key={circleItem.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                  <TouchableOpacity onPress={() => handleCirclePress(circleItem)}>
                    {isSelected(circleItem) ?
                    (
                      <Image source={require('../assets/check.png')} style={{ width: 18, height: 18, marginTop: hp('2%') }} />
                    ): (
                      <View style={styles.circle} />
                    ) }
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Episode', { circleItem })}>
                    <Text style={styles.txtsea1}>Season {circleItem.season_number}</Text>
                  </TouchableOpacity>
                  {isSelected(circleItem)  ? (
                    <Progress.Bar progress={1} width={180} height={10} color={'#187498'} borderColor={'#000'} style={styles.progg} />
                  ) : (
                    <Progress.Bar progress={0} width={180} height={10} color={'#187498'} borderColor={'#000'} style={styles.progg} />
                  )}
                  <Text style={styles.txt10}>0/{circleItem.episode_count}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Seasons;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
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
  txt: {
    color: 'white',
    fontSize: hp('2.9%'),
  },
  maintxt: {
    padding: 14,
  },
  txtdate: {
    marginTop: hp('0.4%'),
    color: '#737373',
  },
  desctxt: {
    color: '#fff'
  },
  txthr: {
    color: '#737373',
  },
  txtsea: {
    color: 'white',
    fontSize: hp('2.9%'),
    marginTop: hp('0.7%'),
  },
  circle: {
    backgroundColor: 'white',
    height: hp('2.2%'),
    width: wp('4.4%'),
    borderRadius: 50,
    marginTop: hp('2.7%'),
  },
  maincir: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp('-4%')
  },
  txtsea1: {
    color: 'white',
    marginTop: hp('2.4%'),
    marginLeft: hp('2.8%'),
  },
  progg: {
    marginTop: hp('3.2%'),
    marginLeft: hp('2.1%'),
  },
  txt10: {
    color: 'white',
    marginTop: hp('2.4%'),
    fontSize:hp('1.8%'),
    marginLeft: wp('0.8%'),
  },
})
