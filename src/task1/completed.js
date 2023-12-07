import * as React from 'react';
import { ScrollView, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid, Pressable } from 'react-native';
import { useState } from 'react';
import { Text, Button, IndexPath, MenuItem, OverflowMenu, Select, SelectItem } from '@ui-kitten/components';
import { CommonActions } from '@react-navigation/native';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
import {Experiences, Users} from './data.js';

const generateExperiences = ({navigation}) => {
  return Experiences.map((experience, index) => {

    if (experience.status === "Completed"){
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Completed Experience", { experienceIndex: index })}>
          <View key={index} style={[styles.experienceContainer, {}]}>
            <View>
              <Image source={experience.experienceImg} style={[styles.experienceImg, {opacity: 0.5}]}/>
            </View>
            <Text style={styles.experienceTitle}>{experience.title}</Text>
            <Text style={styles.experienceDescription}>{experience.language}: {experience.level}</Text>
          </View>
          <View style={{position: 'absolute', backgroundColor: '#E15F41', borderTopRightRadius: 15, borderBottomLeftRadius: 15, top: 30, right: 0, width: 60, height: 40, justifyContent: 'center', alignItems:'center'}}>
            <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>{experience.distance}mi</Text>
          </View>
        </TouchableOpacity>
      );
    }
  });
}

const Completed = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  return(
    <View style={{ alignItems: "center", flexDirection: 'column', display: 'flex', width: "100%"}}>
      <ScrollView style={{width:"100%", height: "100%", paddingHorizontal: 30}} contentContainerStyle={{ alignItems: 'center', flex: 1, flexGrow: 1, minHeight: '130%' }}>
        {generateExperiences({navigation})}
      </ScrollView>
    </View>

  )
}

export default Completed