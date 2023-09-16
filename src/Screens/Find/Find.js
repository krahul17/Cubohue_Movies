import { StyleSheet, Text, StatusBar, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Movies from '../Movies/Movies';
import Tvshows from '../Tvshows/Tvshows';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Navigate from '../../navigation/Navigate';



const Tab = createMaterialTopTabNavigator();
const Find = () => {


  return (
    <>
      <StatusBar backgroundColor="#1a1a1a" />

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
        <Tab.Screen
          name="Movies" component={Movies} />
        <Tab.Screen name="Tvshows" component={Tvshows} /> 
      </Tab.Navigator>
    </>
  )
}

export default Find

const styles = StyleSheet.create({})