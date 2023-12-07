import * as React from 'react';
import { Modal, Alert, ScrollView, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid, Pressable } from 'react-native';
import { useState } from 'react';
import { Datepicker, Icon, IconElement, Layout, Text, Button, IndexPath, MenuItem, OverflowMenu, Select, SelectItem } from '@ui-kitten/components';
import { CommonActions } from '@react-navigation/native';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
import {Experiences, Users} from './data.js';
import { MaterialIcons } from '@expo/vector-icons';

const FriendProfile = ({route, navigation}) => {
  const { user } = route.params;
  const userObj = Users[user];

  const createTwoButtonAlert = () =>
    Alert.alert(
      '',
      'Are you sure you want to add' + user + 'as a friend?',
      [
        {
          text: 'Yes',
          onPress: () => navigation.navigate('HomeTabs', {user: user}),
        },
        {
          text: 'No',
          onPress: () => console.log('cancelled'),
        },
      ],
      { cancelable: true }
    );

  const createLanguageInterests = () => {
    const languages = userObj.languageInterests.slice(0, 3);
    return languages.map((language, index) => {
      const abbreviatedLanguage = language.substring(0, 2);
      return (
        <View style={[styles.flexColumn, {marginHorizontal: 10}]}>
          <View key={index} style={{backgroundColor:'white', borderColor:'black', borderWidth: 2, borderRadius: 1000, justifyContent: 'center', alignItems: 'center', width: 50, aspectRatio: 1}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16, textTransform:'uppercase'}}>{abbreviatedLanguage}</Text>
          </View>
          <Text style={{color:'white', textAlign: 'center', marginTop: 5}}>{language}</Text>
        </View>

      );
    });
  }

  return(
  <View style={{backgroundColor:'white'}}>
    <SafeAreaView>
    <View style={{ alignItems: "center", flexDirection: 'column', display: 'flex', width: "100%", height: "100%", backgroundColor: 'white', justifyContent: 'space-between'}}>
      <Image source={userObj?.image} style={{borderRadius:100000, width: 150, height: 150, marginVertical: 20}}/>
      <Text style={[styles.experienceTitle, {fontSize:25, fontWeight:'bold'}]}>{userObj.username}</Text>
      <Text style={[styles.experienceTitle, {fontSize:16}]}>{userObj?.location} • Knows: {userObj.languageKnowledge}</Text>
      <View style={[styles.modalView, styles.flexColumn, {backgroundColor: "#4169E1", paddingVertical: 6}]}>
        <Text style={[styles.modalText, styles.text, { fontSize: 25, color:'white'}]}>Personal Bio:</Text>
        <Text style={[styles.modalText,styles.text, { fontSize: 16, color:'white', fontWeight: 20}]}>{userObj.bio}</Text>
        <Text style={[styles.modalText, styles.text, { fontSize: 25, color:'white'}]}>Language Interests:</Text>
        <View style={styles.flexRow}>
            {createLanguageInterests()}
          </View>
      </View>
      <View style={[styles.flexRow, {alignItems:'center', justifyContent:'space-between', width: "90%", marginBottom: 30}]}>
        <TouchableOpacity
          style={[ styles.prevButton, {width: "30%", borderRadius: 20, justifyContent: 'center', alignItems: 'center', height: 55}]}
          title="Prev"
          onPress={() => navigation.goBack()}
          >
          <Text style={[styles.text, {}]}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ styles.nextButton, {width: "25%", borderRadius: 20, justifyContent: 'center', alignItems: 'center', height: 55}]}
          title="Prev"
          onPress={() => navigation.navigate('HomeTabs', {user: user})}
          >
          <Image source={require("../../assets/elems/inactive-chat.png")} style={{resizeMode: 'contain', height: 35,width: 35, tintColor: 'white'}}/>
          
        </TouchableOpacity>
        <TouchableOpacity
          style={[ styles.nextButton, {width: "30%", borderRadius: 20, justifyContent: 'center', alignItems: 'center', height: 55}]}
          title="Prev"
          onPress={createTwoButtonAlert}
          >
          <Text style={[styles.text, {color:'white'}]}>Add Friend</Text>
        </TouchableOpacity>
        
       
      </View>
      
    </View>
  </SafeAreaView>
  </View>
);}

export default FriendProfile;