import * as React from 'react';
import { ScrollView, FlatList, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { Text, Button, IndexPath, MenuItem, OverflowMenu, Select, SelectItem } from '@ui-kitten/components';
import { CommonActions } from '@react-navigation/native';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
import {Experiences, Users} from './data.js';

const CurrentFriends = ({route, navigation}) => {
  const [friends, setFriends] = useState([{key: 'Itbaan'}, ]);
  
  useEffect(() => {
    if (route?.params?.user && !friends.includes({key: route.params.user})) {
      console.log('user', route.params.user)
      setFriends(prevFriends => [...prevFriends, {key: route.params.user}]);
    }
    else if (route?.params?.unfriended && friends.some(friend => friend.key === route.params.unfriended)) {
      console.log(route?.params?.unfriended)
      setFriends(prevFriends => prevFriends.filter(friend => friend.key !== route.params.unfriended));    }
    console.log(friends)
  }, [route.params?.user, route.params?.unfriended]);

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
    <FlatList 
      data={friends} 
      renderItem={({item})=>generateFriends({item})} 
      style={{width: "100%"}} 
      contentContainerStyle={{alignItems: "center", justifyContent: 'center'}}
    />

  )
}

export default CurrentFriends