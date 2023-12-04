import * as React from 'react';
import { TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { useState } from 'react';
import { Icon, IconElement, Input, Text } from '@ui-kitten/components';
import styles from '../styles';

const CommunityNorms = ({navigation}) => {
  return (
    <View style={[styles.container, styles.flexColumn, {justifyContent: "center", alignItems: "center"}]}>
      <View style={[styles.container, styles.banner,{width:"100%", position: "absolute", top:0, left:0}]}>
        <Text style={[styles.text, styles.bannerText]}>Community Norms</Text>
      </View>
      <Image source={require('../../assets/elems/community-norms.png')} style={{position: "absolute", top: "30%", width: 150, height: 150, resizeMode: 'contain'}}/>
      <Text style={{justifyContent:"center", fontSize:23, textAlign: "center", position: "absolute", top: "55%", width: "85%", height: "40%", resizeMode: 'contain'}}>Joining our platform includes sharing your name, image, and contact information to participate in language experiences and connect with the community.</Text>
      <View style={[styles.container, styles.flexRow, {width: "90%", justifyContent: "space-between", alignItems:"center", position: "absolute", bottom: "5%"}]}>
          <TouchableOpacity
            style={[styles.navButton, styles.prevButton]}
            title="Back"
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.text]}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, styles.nextButton]}
            title="Next"
            onPress={() => navigation.navigate('Profile Details')}
          >
            <Text style={[styles.text, {color:"white"}]}>Next</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default CommunityNorms;