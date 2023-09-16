import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Discover = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.txt}>Production</Text>
            <View style={styles.mainttxta}>
                <View style={styles.mainani}>
            <Text style={styles.txta}>Aniventure</Text>
            </View>
            <View style={styles.mainali}>
            <Text style={styles.txta}>Align</Text>
            </View>
        </View>
        <Text style={styles.txtk}>Keywords</Text>
        <View style={styles.mainttxta}>
                <View style={styles.maincat}>
            <Text style={styles.txta}>cat</Text>
            </View>
            <View style={styles.maindog}>
            <Text style={styles.txta}>dog</Text>
            </View>
        </View>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black',
    },
    txt: {
        marginTop: hp('1.1%'),
        color: '#737373',
        alignSelf: 'center'
    },
    txta: {
color:'white',
    },
    mainttxta:{
        flexDirection:'row',
       padding:20,
    },
    mainani:{
        borderRadius: 14,
        backgroundColor:'#666666',
       
        height:hp('3.5%'),
        width:wp('20.8%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('-1.7%'),
    },
    mainali:{
        borderRadius: 14,
        backgroundColor:'#666666',
       
        height:hp('3.5%'),
        width:wp('13.8%'),
        alignItems: 'center',
        justifyContent: 'center',
      
        marginTop: hp('-1.7%'),
        marginLeft:hp('1.1%'),
    },
    txtk:{
        marginTop: hp('-2.1%'),
        color: '#737373',
        alignSelf: 'center'
    },
    maincat:{
        borderRadius: 14,
        backgroundColor:'#666666',
       
        height:hp('3.5%'),
        width:wp('10.8%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('-1.7%'),
    },
    maindog:{
        borderRadius: 14,
        backgroundColor:'#666666',
       
        height:hp('3.5%'),
        width:wp('10.8%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('-1.7%'),
        marginLeft:hp('1.1%'),
    },
})