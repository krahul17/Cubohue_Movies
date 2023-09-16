import { View, Text, } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../Screens/Details/Details';
import Tabs from './Tabs';
import Find from '../Screens/Find/Find';
import Tvshows from '../Screens/Tvshows/Tvshows';
import Movies from '../Screens/Movies/Movies';
import Episode from '../Screens/Episode/Episode';
import Tmc from '../Screens/Tmc';
import Seasons from '../Screens/Seasons/Seasons'
import Trailer from '../Screens/Trailer/Trailer';
// latest code push

const Stack = createNativeStackNavigator();

const Navigate = () => {


  return (
  //  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
       
       <Stack.Screen name="Tvshows" component={Tvshows} options={{ headerShown: false }}/>
       <Stack.Screen name="Movies" component={Movies} options={{ headerShown: false }}/>
       <Stack.Screen name="Episode" component={Episode} options={{ headerShown: false }}/>
       <Stack.Screen name="Details" component={Details}  options={{ headerShown: false }}/>
       <Stack.Screen name="Seasons" component={Seasons} options={{ headerShown: false }}/>
       <Stack.Screen name="Trailer" component={Trailer} options={{ headerShown: false }}/>
     </Stack.Navigator>
  //  </NavigationContainer>
      
    
  );
}

export default Navigate