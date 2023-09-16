import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tabs from './src/navigation/Tabs'
import { NavigationContainer } from '@react-navigation/native'
import Details from './src/Screens/Details/Details'
import Seasons from './src/Screens/Seasons/Seasons'
import Episode from './src/Screens/Episode/Episode'
import { Provider } from 'react-redux'
// import {mystore} from './src/redux/store/Store'
import { mystore } from './src/reduxToolkit/MyStore/MyStore'
import Main from './src/navigation/Main';
import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react'



const App = () => {
  let persistor=persistStore(mystore)

  // console.log(mystore,'mystore')
  return (
   <>
   <Provider store={mystore}>
    <PersistGate persistor={persistor}>
   <NavigationContainer>
   <Main/>

   </NavigationContainer>
   </PersistGate>
   </Provider>
   </>
  )
}

export default App

const styles = StyleSheet.create({})