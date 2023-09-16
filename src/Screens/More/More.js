import { StyleSheet, Text, View, Switch, StatusBar } from 'react-native'
import React, { useState } from 'react'
import ToggleSwitch from 'toggle-switch-react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';

const More = (props) => {
  const [toggleButtonDay, setToggleButtonDay] = useState(false)
  const [toggleButtonWeek, setToggleButtonWeek] = useState(false)
  return (
    <>

      {/* <StatusBar backgroundColor='#000' /> */}
      <StatusBar
            translucent
            backgroundColor="#1a1a1a"
            barStyle="light-content"
          />

      <View style={styles.main}>
        <View style={styles.txtView}>
          <Text style={styles.txt}>
            COUNTDOWN NOTIFICATIONS
          </Text>
        </View>
        <View style={styles.toglview}>
          <Text style={styles.daytxt}>Day Before</Text>
          <View style={styles.Togglestyle}>
          <ToggleSwitch

            isOn={toggleButtonDay}
            onColor="#1a75ff"
            offColor="#4d4d4d"
            // label="Day Before"
            labelStyle={{ color: "white", fontWeight: "900" }}
            size="small"
            onToggle={isOn => { setToggleButtonDay(isOn), console.log("changed to : ", isOn) }}
          />
          </View>
        </View>
        <View style={styles.hrline} />
        <View style={styles.toglview}>
          <Text style={styles.daytxt}>Week Before</Text>
          <View style={styles.Togglestyle}>
          <ToggleSwitch
           
           isOn={toggleButtonWeek}
           onColor="#1a75ff"
           offColor="#4d4d4d"
           // label="Week Before"
           labelStyle={{ color: "white", fontWeight: "900" }}
           size="small"
           onToggle={isOn => { setToggleButtonWeek(isOn), console.log("changed to : ", isOn) }}
         />
          </View>
       

        </View>
        <View style={styles.hrline} />
      </View>
    </>)
}

export default More

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000'
  },
  txtView: {
    // marginVertical: hp('2.1%'),
    marginTop: hp('2.9%'),
    marginBottom: hp('0.05%'),
    padding: 10,

  },
  txt: {
    fontSize: hp('1.7%'),
    color: '#666666',
    fontWeight: '700',
  },
  daytxt: {
    marginLeft: wp('8%'),
    color: '#fff',
    fontSize: hp('2%'),
    fontWeight: '600'


  },
  toglview: {
    flexDirection: "row",
    height: hp('6%'),
    backgroundColor: '#1a1a1a',
    // marginTop: hp('1.1%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Togglestyle: {
    marginRight: wp('6%')
  },
  hrline: {
    height: hp('0.05%'),
    width: wp('100%'),
    backgroundColor: '#fff'
  },

})