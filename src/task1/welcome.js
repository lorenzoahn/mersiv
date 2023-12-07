import * as React from 'react';
import { TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid } from 'react-native';
import { useState } from 'react';
import { Icon, IconElement, Input, Text } from '@ui-kitten/components';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";


const Welcome = ({route, navigation}) => {
  const {userType} = route.params;
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.container, styles.flexColumn, {justifyContent: "center", alignItems: "center"}]}>
        <View style={[styles.container, styles.banner,{width:"100%", position: "absolute", top:0, left:0, backgroundColor: "transparent", height:"20%"}]}>
          <Text style={[styles.text, styles.bannerText, {color:"black"}]}>Welcome</Text>
        </View>
        <Image source={require('../../assets/logos/mersiv-logo.png')} style={{position: "absolute", top: "30%", width: 220, height: 220, resizeMode: 'contain'}}/>
        <TouchableOpacity
          style={[styles.navButton, styles.nextButton, {width: "80%", position:"absolute", top:"71%", aspectRatio: 374/60}]}
          title="Next"
          onPress={() => {
            if (userType === "host") {
              navigation.navigate('HostHomeTabs');
            } else {
              navigation.navigate('HomeTabs');
            }
          }}
        >
          <Text style={[styles.text, {color:"white"}]}>Continue</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}
export default Welcome;


