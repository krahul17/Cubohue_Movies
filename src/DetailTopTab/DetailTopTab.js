import { StyleSheet, Text, StatusBar, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Trailer from '../Screens/Trailer/Trailer';
import Cast from '../Screens/Castandcrew/Cast';
import Discover from '../Screens/Discover/Discover';


const Tab = createMaterialTopTabNavigator();
const DetailTopTab = () => {


  return (
    <>
      {/* <StatusBar backgroundColor="#1a1a1a" /> */}

      <Tab.Navigator
      
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarIndicatorStyle: {
            backgroundColor: 'white',
            height: 2,
            width: wp('48%')
          },
          tabBarItemStyle: {
            backgroundColor: '#1a1a1a',
            width: wp('48%'),
            // borderRadius: 10,
          },
          // swipeEnabled={false},
         
          tabBarLabelStyle: { fontSize: hp('2.2%') },
          tabBarStyle: {
            height: 45,
            backgroundColor: '#1a1a1a',
          },
        }}
      >
         <Tab.Screen name="Cast & Crew" component={Cast} />
        <Tab.Screen name="Trailer" component={Trailer} />
        <Tab.Screen name="Discover" component={Discover} /> 
      </Tab.Navigator>
    </>
  )
}

export default DetailTopTab

const styles = StyleSheet.create({})