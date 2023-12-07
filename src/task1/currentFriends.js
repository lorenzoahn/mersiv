import * as React from 'react';
import { ScrollView, FlatList, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid, Pressable } from 'react-native';
import { useState } from 'react';
import { Text, Button, IndexPath, MenuItem, OverflowMenu, Select, SelectItem } from '@ui-kitten/components';
import { CommonActions } from '@react-navigation/native';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
import {Experiences, Users} from './data.js';

const CurrentFriends = ({route, navigation}) => {
  let user;
  if (route?.params) {
    user = route.params.user;
  }

  let unfriended;
  if (route?.params) {
    unfriended = route.params.unfriended;
  }

  const generateFriendsList = () => {
    const filteredList = [{key: 'Itbaan'}, ...(user ? (user !== 'Lorenzo' && user !== 'Itbaan' ? [{key: user}] : []) : [])];
    if (unfriended && filteredList.some(friend => friend.key === unfriended)) {
      return filteredList.filter(friend => friend.key !== unfriended);
    }
    return filteredList;
  }

  const generateFriends = ({item}) => {
    return (
      <TouchableOpacity onPress={()=> navigation.navigate('Current Friend Profile', {user: item.key})} style={[styles.flexRow, {width:"80%", justifyContent: 'flex-start', alignSelf: 'center'}]}>
        <Image source={Users[item.key].image} style={{borderRadius:100000, width: 100, aspectRatio:1, marginVertical: 20}}/>
        <View style={[styles.flexColumn, {justifyContent: 'center', alignItems: 'flex-start', marginHorizontal: 20, flexShrink: 1}]}>
          <Text style={[styles.experienceTitle, {fontSize:25, fontWeight:'bold', textAlign: 'left'}]}>{Users[item.key].username}</Text>
          <Text style={[styles.experienceTitle, {fontSize:16, fontWeight: 10, color: "grey", textAlign: 'left'}]}>{Users[item.key].location}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return(
    <View style={{ alignItems: "center", flexDirection: 'column', display: 'flex', width: "100%", justifyContent: 'center'}}>
      <FlatList data={generateFriendsList()} renderItem={({item})=>generateFriends({item})} style={{width: "100%", }} contentContainerStyle={{height: "100%"}}/>
    </View>

  )
}

export default CurrentFriends