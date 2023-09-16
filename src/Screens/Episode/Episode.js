
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Progress from 'react-native-progress';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Episode = ({ navigation, route }) => {
  const { circleItem } = route.params;
  console.log(circleItem, 'episode item');
  const [selectedEpisodes, setSelectedEpisodes] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleEpisodePress = (episodeNumber) => {
    if (selectedEpisodes.includes(episodeNumber)) {
      setSelectedEpisodes(selectedEpisodes.filter((item) => item !== episodeNumber));
    } else {
      setSelectedEpisodes([...selectedEpisodes, episodeNumber]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedEpisodes([]);
    } else {
      const allEpisodes = Array.from({ length: circleItem.episode_count }, (_, index) => index + 1);
      setSelectedEpisodes(allEpisodes);
    }
    setSelectAll(!selectAll);
  };

  const renderEpisodeList = () => {
    const episodeList = [];
    for (let i = 1; i <= circleItem.episode_count; i++) {
      const isSelected = selectedEpisodes.includes(i);
      episodeList.push(
        <View style={styles.mainepi} key={i}>
          <View style={styles.mainep}>
            <View>
              <Text style={styles.txte}>Episode {i}</Text>
              <Text style={styles.txted}>{circleItem.air_date}</Text>
            </View>
            <TouchableOpacity onPress={() => handleEpisodePress(i)}>
              {isSelected ? (
                <Image
                  source={require('../assets/check.png')}
                  style={{ width: 18, height: 18, marginTop: hp('2%'), marginLeft: hp('28.8%'), marginTop: hp('0.1%') }}
                />
              ) : (
                <View style={styles.circle} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.hrline} />
        </View>
      );
    }
    return episodeList;
  };

  return (
    <View style={styles.main}>
      <View style={styles.mainar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow.png')} style={{ width: 20, height: 20, marginTop: hp('2.2%') }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSelectAll}>
          <Text style={styles.txtsele}>{selectAll ? 'Deselect All' : 'Select All'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainpr}>
        {selectedEpisodes.length > 0 ? (
          <Progress.Bar
            progress={selectedEpisodes.length / circleItem.episode_count}
            width={260}
            height={10}
            color={'#187498'}
            borderColor={'#000'}
            style={styles.progg}
          />
        ) : (
          <Progress.Bar progress={0} width={260} height={10} color={'#187498'} borderColor={'#000'} style={styles.progg} />
        )}
        <Text style={styles.txt10}>{selectedEpisodes.length}/{circleItem.episode_count}</Text>
      </View>

      <View style={styles.mainepi}>
        {renderEpisodeList()}
      </View>
    </View>
  );
};


export default Episode;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
  },
  progg: {
    marginTop: hp('3.2%'),
    marginLeft: hp('1%'),
  },
  txt10: {
    color: 'white',
    marginTop: hp('2.4%'),
    marginLeft: hp('5.8%'),
  },
  mainpr: {
    flexDirection: 'row',
  },
  txte: {
    color: 'white',
    // marginTop: hp('3.2%'),
    marginLeft: hp('1.1%'),
  },
  txted:{
    color: 'white',
    marginLeft: hp('1.1%'),
    marginTop: hp('-0.1%'),
  fontSize: hp('1.5%'),
  },
  mainep: {
    flexDirection: 'row',
  },
  circle: {
    backgroundColor: 'white',
    height: hp('2.2%'),
    width: wp('4.4%'),
    borderRadius: 50,
    marginLeft: hp('28.8%'),
  },
  hrline: {
    marginTop: hp('1%'),
    height: hp('0.05%'),
    width: wp('85%'),
    alignSelf: 'center',
    backgroundColor: '#fff'
  },
  mainar: {
    flexDirection: 'row',
    padding: 10,
    marginTop: Platform.OS == 'ios' ? hp('4.4%') : null,
  },
  txtsele: {
    color: 'white',
    fontSize: hp('1.9%'),
    marginLeft: hp('33.8%'),
    marginTop: hp('1.7%'),
  },
  mainepi: {
    padding: 15,
  },
})