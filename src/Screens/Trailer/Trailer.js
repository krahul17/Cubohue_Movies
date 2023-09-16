import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Trailer = () => {
  return (
    <View style={styles.main}>
      <View style={styles.txtimgmain}>
   <Image source={require('../assets/bharat.jpeg')} style={{ width: wp('30%'), height:hp('10%'),borderRadius:10,}} />
   <Text style={styles.txt}>Every fast & furious Film {"\n"}
   Explained | Movies 1-9{"\n"}
    Recap | Watch Before {"\n"} Fast X</Text>
   </View> 
    </View>
  )
}

export default Trailer

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    padding:20,
    // flexDirection:'row',
},
txtimgmain:{
  flexDirection:'row',

},
txt:{
color:'white',
marginLeft:hp('2.1%'),
fontSize:hp('2.1%'),
marginTop:hp('-0.5%'),
},

})