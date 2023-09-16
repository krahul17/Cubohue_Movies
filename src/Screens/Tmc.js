// import React, {
//   useEffect,
//   useState
//   } from 'react';
//   import {
//   ActivityIndicator,
//   FlatList,
//   ImageBackground,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   useWindowDimensions,
//   View,
//   } from 'react-native';
//   import { useDispatch, useSelector } from 'react-redux';
//   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//   import Ionicons from 'react-native-vector-icons/Ionicons';
//   import Entypo from 'react-native-vector-icons/Entypo';
//   import Header from '../components/Header';
//   import Colors from '../styles/Colors';
//   import Button from '../components/Button';
//   import Fonts from '../styles/Fonts';
//   import { RFPercentage } from 'react-native-responsive-fontsize';
//   import { useNavigation } from '@react-navigation/native';
//   import LinearGradient from 'react-native-linear-gradient';
//   import FastImage from 'react-native-fast-image';
//   import { useSafeAreaInsets } from 'react-native-safe-area-context';
//   import { BlurView } from '@react-native-community/blur';
//   import ApiService from '../services/api.service';
//   import { updateTvTracker } from '../redux/actions';
//   import * as Progress from 'react-native-progress';
//   import { IntertitialService } from '../ads/InterstitialService';
//   import Banner from '../ads/Banner';



//   export default EpisodeInfo = ({ route }) => {
//   const tracker = useSelector((state) => state.tracker);
//   const item = tracker.filter((t) => t.id == route.params.item.id)[0];
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const genres = useSelector((state) => state.genre.tvshows);
//   const { config } = useSelector((state) => state.config);
//   const [loading, setLoading] = React.useState(false);
//   const { width } = useWindowDimensions();
//   const insets = useSafeAreaInsets();


//   const toggleSeason = async (season, value) => {
//   var episodes = season.episodes;
//   if (value) {
//   episodes = episodes.map((episode) => ({ ...episode, selected: false }));
//   } else {
//   episodes = episodes.map((episode) => ({ ...episode, selected: true }));
//   }
//   const _item = {
//   ...item,
//   seasons: item.seasons.map((s) => {
//   if (s.season_number == season.season_number) {
//   return { ...s, episodes }
//   }
//   return s;
//   })
//   }
//   dispatch(updateTvTracker(_item));
//   }
//   useEffect(() => {
//   const removeListener = navigation.addListener('beforeRemove', (e) => {
//   setLoading(true);
//   if (config.ADMOB_INTER_DETAIL) {
//   e.preventDefault();
//   const interstitial = new IntertitialService(
//   null,
//   config.ADMOB_INTER_DETAIL,
//   config,
//   );
//   interstitial.loadAdmob(true, () => {
//   navigation.dispatch(e.data.action)
//   }, () => {
//   navigation.dispatch(e.data.action)
//   });
//   } else {
//   navigation.dispatch(e.data.action)
//   }
//   });
//   return () => {
//   removeListener();
//   };
//   }, [navigation]);
//   return (
//   <View style={{ flex: 1, backgroundColor: Colors.black }}>
//   <ScrollView>
//   <FastImage
//   source={{ uri: https://image.tmdb.org/t/p/w1280/ + item.backdrop_path }}
//   style={{ width: width, height: width * 1.5 }}
//   <View style={{ position: 'absolute', bottom: 0 }}>
//   <View style={{ width: width, borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: 'hidden' }}>
//   <LinearGradient colors={['transparent', Colors.black]} style={{ position: 'absolute', width: '100%', height: '100%' }}>
//   </LinearGradient>
//   <BlurView
//   style={{ width: '100%', padding: 20 }}
//   blurAmount={10}
//   blurRadius={5}
//   <View style={{ flexDirection: 'row' }}>
//   <Entypo name={'star'} color={'#FAE315'} size={16} />
//   <Text style={{ ...Fonts.w500, fontSize: 14, color: '#FAE315' }}> {item.vote_average}</Text>
//   <Text style={{ ...Fonts.w500, fontSize: 14, color: Colors.tabInactive }}> ({item.vote_count} vote)</Text>
//   </View>
//   <View style={{ paddingVertical: 10 }}>
//   <Text numberOfLines={1} style={{ ...Fonts.w800, fontSize: 24, color: Colors.white }}>{item.name}</Text>
//   </View>
//   <View style={{ flexDirection: 'row' }}>
//   <View style={{ backgroundColor: Colors.tabInactive + '80', padding: 10, paddingVertical: 4, borderRadius: 20 }}>
//   <Text style={{ ...Fonts.w500, fontSize: 14, color: Colors.white }}>{item.first_air_date.slice(0, 4)}</Text>
//   </View>
//   <View style={{ width: 10 }} />
//   <View style={{ backgroundColor: Colors.tabInactive + '80', padding: 10, paddingVertical: 4, borderRadius: 20 }}>
//   <Text style={{ ...Fonts.w500, fontSize: 14, color: Colors.white }}>{item.number_of_seasons} seasons</Text>
//   </View>
//   </View>
//   <View style={{ paddingTop: 10 }}>
//   <Text numberOfLines={1} style={{ ...Fonts.w400, fontSize: 14, color: Colors.white }}>{item.genres.map((g) => g.name).join(' ● ')}</Text>
//   </View>
//   </BlurView>
//   </View>
//   </View>
//   </FastImage>
//   <Banner ADMOB_BANNER_ID={config.ADMOB_BANNER_DETAIL} />
//   <View style={{ padding: 16, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
//   <View style={{ width: 3, height: '100%', backgroundColor: Colors.skyBlue }} />
//   <View style={{ paddingHorizontal: 6, flex: 1 }}>
//   <Text style={{ ...Fonts.w600, color: Colors.white }}>
//   Seasons
//   </Text>
//   </View>
//   </View>
//   {
//   item.seasons.map((season, index) => {
//   const episodeCount = season.episode_count;
//   const episodeView = season.episodes.filter((episode) => episode.selected).length;
//   const viewPercent = episodeCount == 0 ? 0 : (episodeView / episodeCount);
//   return (
//   <TouchableOpacity key={index} onPress={() => navigation.push('Episode', { item: item, season: season })}>
//   {
//   (index > 0)
//   &&
//   (
//   <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.black, Colors.skyBlue, Colors.black]} style={{ width: '100%', height: 0.5, marginVertical: 8 }} />
//   )
//   }
//   <View style={{ paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center' }}>
//   <View style={{ paddingRight: 16 }}>
//   <TouchableOpacity onPress={() => toggleSeason(season, episodeView == episodeCount)} style={{ alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: 12, borderWidth: 1, borderColor: Colors.skyBlue, backgroundColor: episodeView == episodeCount ? Colors.skyBlue : 'transparent' }}>
//   {
//   (episodeView == episodeCount)
//   &&
//   <Entypo name={'check'} color={Colors.white} size={20} />
//   }
//   </TouchableOpacity>
//   </View>
//   <View style={{ flex: 1 }}>
//   <Text style={{ ...Fonts.w500, fontSize: 14, color: Colors.white }}>{season.name}</Text>
//   <View style={{ marginTop: 10, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
//   <Progress.Bar
//   borderWidth={0}
//   unfilledColor={Colors.tabBg}
//   color={Colors.skyBlue}
//   height={10}
//   width={width * 0.5}
//   progress={viewPercent}
//   />
//   <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
//   <Text style={{ ...Fonts.w500, fontSize: 12, color: Colors.tabInactive }}>{episodeView} / {episodeCount}</Text>
//   </View>
//   </View>
//   </View>
//   <View style={{ paddingLeft: 16 }}>
//   <Ionicons name='arrow-forward' color={Colors.white} size={24} />
//   </View>
//   </View>
//   </TouchableOpacity>
//   );
//   })
//   }
//   </ScrollView>
//   <View style={{ position: 'absolute', width: '100%', top: insets.top, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 }}>
//   <TouchableOpacity activeOpacity={0.8} onPress={navigation.goBack}>
//   <BlurView
//   style={{ width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' }}
//   blurAmount={10}
//   blurRadius={10}
//   <Ionicons name='arrow-back' color={Colors.white} size={24} />
//   </BlurView>
//   </TouchableOpacity>
//   </View>
//   {
//   loading
//   &&
//   <View style={{ position: 'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.black + '88' }}>
//   <ActivityIndicator color={Colors.skyBlue} size='small' />
//   <Text style={{ ...Fonts.w600, color: Colors.skyBlue }}>
//   Please wait...
//   </Text>
//   </View>
//   }
//   </View >
//   );
//   }
//   const styles = StyleSheet.create({
//   container: {
//   flex: 1,
//   backgroundColor: Colors.black,
//   justifyContent: 'space-between',
//   alignItems: "center"
//   },
//   noMsgTitle: {
//   color: Colors.tabInactive
//   },
//   buttonStyle: {
//   height: RFPercentage(5),
//   width: RFPercentage(20),
//   borderRadius: RFPercentage(1),
//   backgroundColor: Colors.skyBlue,
//   marginBottom: RFPercentage(2),
//   justifyContent: "center",
//   alignItems: 'center'
//   },
//   titleStyle: {
//   color: Colors.white,
//   },
//   movieListContainer: {
//   borderRadius: RFPercentage(1),
//   marginTop: RFPercentage(2),
//   overflow: 'hidden'
//   }
//   });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tmc = () => {
  return (
    <View>
      <Text>Tmc</Text>
    </View>
  )
}

export default Tmc

const styles = StyleSheet.create({})