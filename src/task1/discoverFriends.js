import * as React from 'react';
import { ScrollView, FlatList, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { Text, Button, IndexPath, MenuItem, OverflowMenu, Select, SelectItem } from '@ui-kitten/components';
import { CommonActions } from '@react-navigation/native';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
import {Experiences, Users} from './data.js';

const DiscoverFriends = ({route, navigation}) => {
  let user;
  if (route?.params) {
    user = route.params.user;
  }
  console.log(user);

  let unfriended;
  if (route?.params) {
    unfriended = route.params.unfriended;
  }

  const [discoverFriends, setDiscoverFriends] = useState(
    Object.keys(Users)
      .filter(key => key !== 'Itbaan' && key !== 'Lorenzo')
      .map(key => ({ key }))
  );

  useEffect(() => {
    if (route?.params?.user && !discoverFriends.includes({key: route.params.user})) {
      console.log('user', route.params.user)
      setDiscoverFriends(prevFriends => [...prevFriends, {key: route.params.user}]);
    }
    else if (route?.params?.unfriended && discoverFriends.some(friend => friend.key === route.params.unfriended)) {
      console.log(route?.params?.unfriended)
      setDiscoverFriends(prevFriends => prevFriends.filter(friend => friend.key !== route.params.unfriended));    }
    console.log(discoverFriends)
  }, [route.params?.user, route.params?.unfriended]);


  const generateFriendsList = () => {
    const filteredList = Object.keys(Users).map(key => ({ key }));
    if (unfriended && filteredList.some(friend => friend.key === unfriended)) {
      return filteredList.filter(friend => friend.key !== unfriended && friend.key !== user && friend.key !== 'Itbaan');
    }
    return filteredList.filter(friend => friend.key !== user && friend.key !== 'Itbaan' && friend.key !== 'Lorenzo');
  }

  const generateFriends = ({item}) => {
    return (
      <TouchableOpacity onPress={()=> navigation.navigate('Friend Profile', {user: item.key})} style={[styles.flexRow, {width:"80%", justifyContent: 'flex-start', alignSelf: 'center'}]}>
        <Image source={Users[item.key].image} style={{borderRadius:100000, width: 100, aspectRatio:1, marginVertical: 20}}/>
        <View style={[styles.flexColumn, {justifyContent: 'center', alignItems: 'flex-start', marginHorizontal: 20, flexShrink: 1}]}>
          <Text style={[styles.experienceTitle, {fontSize:25, fontWeight:'bold', textAlign: 'left'}]}>{Users[item.key].username}</Text>
          <Text style={[styles.experienceTitle, {fontSize:16, fontWeight: 10, color: "grey", textAlign: 'left'}]}>{Users[item.key].location}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return(
    <View style={{ alignItems: "center", flexDirection: 'column', display: 'flex', width: "100%", justifyContent: 'center', height: "100%"}}>
      <FlatList data={discoverFriends} renderItem={({item})=>generateFriends({item})} style={{width: "100%", height: "100%"}} contentContainerStyle={{height: "100%"}}/>
    </View>

  )
}

export default DiscoverFriends