import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Find from '../Screens/Find/Find';
import Countdown from '../Screens/Countdown/Countdown';
import More from '../Screens/More/More';
import Tvtracker from '../Screens/Tvtracker/Tvtracker';
import CustomHeader from '../Components/Baseurl/CustomHeader/CustomHeader';

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
    {/* <StatusBar backgroundColor="#fff"/> */}
    <Tab.Navigator 
    tabBarOption={{
      activeTintColor:"#1a1a1a",
    }}
   screenOptions={{
    headerStyle:{
      backgroundColor:'#1a1a1a', 
      // activeTintColor:"white",
    },
    headerTitleStyle: {
      color: 'white'
    },
    tabBarStyle: {
      backgroundColor: '#1a1a1a',
  },


   }}

    >
      <Tab.Screen name="TV Tracker" component={Tvtracker} options={{
        tabBarIcon: ({ color, focused }) =>
          <Image style={styles.tinyLogo} source={require('../Screens/assets/monitor.png')} tintColor={focused ? '#3399ff' : '#666666'} />
      
        // headerShown: false,
      }}
      />
      {/* <Tab.Screen name="TV Tracker" component={Home}/> */}

      <Tab.Screen name="Countdown" component={Countdown} options={{
        tabBarIcon: ({ color, focused }) =>
          <Image style={styles.tinyLogo} source={require('../Screens/assets/countdown.png')} tintColor={focused ? '#3399ff' : '#666666'} />,
          // header: props => <CustomHeader {...props} />,
        headerShown: false,
      }}
      />

      <Tab.Screen name="Find" component={Find} options={{
        tabBarIcon: ({ color, focused }) =>
          <Image style={styles.tinyLogo} source={require('../Screens/assets/search.png')} tintColor={focused ? '#3399ff' : '#666666'} />
        
        // headerShown: false,
      }}
      />

      <Tab.Screen name="More" component={More} options={{
        tabBarIcon: ({ color, focused }) =>
          <Image style={styles.tinyLogo} source={require('../Screens/assets/more.png')} tintColor={focused ? '#3399ff' : '#666666'} />
        
        
        // headerShown: false,
      }}
      />


    </Tab.Navigator>
    </>
  )
}

export default Tabs

const styles = StyleSheet.create({
  tinyLogo: {
    height: 28,
    width: 28,
  },
})