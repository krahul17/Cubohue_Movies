import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

const CustomHeader = () => {
     const [iconChange, setIconChange] = useState(false)
  return (
    <View style={styles.main}>
        <View style={styles.headermain}>
        <Text style={styles.countTxt}>CountDown</Text>

        {iconChange ? 
       
       
       <View style={styles.donView}>
        <TouchableOpacity onPress={()=>setIconChange(!iconChange)}>
        <Text style={[styles.countTxt,{marginRight:25}]}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.countTxt}>Delete</Text>
        </TouchableOpacity>
        </View>
        :
         <TouchableOpacity onPress={()=>setIconChange(!iconChange)}>
        <Text style={styles.countTxt}>Edit</Text>
        </TouchableOpacity>


        
       }
       
        </View>
     
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    main:{
        // flex:1,
        backgroundColor:'#1a1a1a'
    },
    headermain:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    countTxt:{
        color:'#fff',
        fontSize:18,
        fontWeight:'600'
    },
    donView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center' 
    },
})