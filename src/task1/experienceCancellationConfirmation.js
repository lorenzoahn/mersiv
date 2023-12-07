import * as React from 'react';
import { Modal, ScrollView, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid, Pressable } from 'react-native';
import { useState } from 'react';
import { Datepicker, Icon, IconElement, Layout, Text, Button, IndexPath, MenuItem, OverflowMenu, Select, SelectItem } from '@ui-kitten/components';
import styles from '../styles';
import {Experiences, Users} from './data.js';

const ExperienceCancelationConfirmation = ({route, navigation}) => {

  const { experienceIndex } = route.params;
  const experience = Experiences[experienceIndex];

  return(
    <View style={{ alignItems: "center", flexDirection: 'column', display: 'flex', width: "100%", height: "100%", backgroundColor: 'white'}}>
        <Image source={experience.experienceImg} style={styles.experienceSignupImg}/>
        <Text style={[styles.experienceTitle, {fontSize:24}]}>{experience.title}</Text>
        <Text style={[styles.experienceTitle, {fontSize:20, width: "80%", fontWeight: 20, color: "#E15F41", marginTop: 50}]}>You have successfully canceled your attendance.</Text>
        <View style={[styles.flexColumn, {width: "90%", justifyContent: "center", alignItems:"center", height: "auto", marginTop: 40, top:"10%"}]}>
            <TouchableOpacity
              style={[styles.navButton, styles.nextButton, {width:"90%", height: 60, aspectRatio: 374/70}]}
              title="Cancel"
              onPress={() => navigation.navigate("Experience Signup", { experienceIndex: experienceIndex })}
            >
              <Text style={[styles.text, {color:"white"}]}>Reschedule</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.navButton, styles.prevButton, {width:"90%", height: 60, aspectRatio: 374/70}]}
                title="Next"
                onPress={() => navigation.navigate('HomeTabs', {screen: 'History', experienceIndex: experienceIndex})}
            >
                <Text style={[styles.text]}>Return Home</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ExperienceCancelationConfirmation