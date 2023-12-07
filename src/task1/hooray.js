import * as React from 'react';
import { TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { useState } from 'react';
import { Icon, IconElement, Input, Text } from '@ui-kitten/components';
import styles from '../styles';

const VerificationConfirmation = ({navigation}) => {
  return (
    <View style={[styles.flexColumn, {justifyContent: 'space-between', alignItems: "center", width: "100%", height: "100%"}]}>
      <Image source={require('../../assets/elems/green-check-icon.png')} style={{resizeMode:'contain', aspectRatio: 1, width: "70%", height: "70%", position: 'absolute', top: "0%"}}/>
      <Text style={[{fontSize: 20, width: "auto", position: 'absolute', top: 480}]}>Hooray!</Text>
      <Text style={[{fontSize: 16, color:'grey', width: "auto", position: 'absolute', top: 520}]}>Your experience has now been posted.</Text>
      <TouchableOpacity
          style={[styles.navButton, styles.nextButton, {width: "80%", position:"absolute", top:"71%", aspectRatio: 374/60}]}
          title="Next"
          onPress={() => navigation.navigate('HostHomeTabs')}
        >
          <Text style={[styles.text, {color:"white"}]}>Return Home</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default VerificationConfirmation;