import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Cast = () => {
  return (
    <View style={styles.main}>
        <View style={styles.txtimgmain}>
   <Image source={require('../assets/bharat.jpeg')} style={{ width: wp('16%'), height:hp('12%'),borderRadius:10,}} />
  <View>
   <Text style={styles.txt}>Vin Diesel</Text>
   <Text style={styles.txt1}>Dominic Toretto</Text>
   </View>

   </View> 
    </View>
  )
}

export default Cast

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: 'black',
    padding:20,
  },
  txtimgmain:{
    flexDirection:'row',
  },
  txt:{
  color:'white',
  marginLeft:hp('2.1%'),
  fontSize:hp('2.3%'),
  marginTop:hp('2.7%'),
  },
  txt1:{
    color:'#737373',
    marginLeft:hp('2.1%'),
    },
})