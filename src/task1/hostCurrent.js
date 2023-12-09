import * as React from 'react';
import { FlatList, ScrollView, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { Text, Button, IndexPath, MenuItem, OverflowMenu, Select, SelectItem } from '@ui-kitten/components';
import { CommonActions } from '@react-navigation/native';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
import {Experiences, Users} from './data.js';


const HostCurrent = ({route, navigation}) => {
    const [visible, setVisible] = React.useState(false);
    const [image, setImage] = useState(null);
    const [experienceTitle, setExperienceTitle] = useState("Experience Title");
    const [experience, setExperience] = useState([])
    
    useEffect(() => {
      console.log("updating params");
      if (route?.params?.image || route?.params?.eventTitle) {
        console.log("params true!!!");
        console.log(route.params?.eventTitle + "!!!!!title");
        console.log(route.params?.image + "!!!!!image");
        setExperience(prevExperience => [
          { image: route?.params?.image, eventTitle: route?.params?.eventTitle },
          ...prevExperience
        ]);
      }
      console.log("values updated");
    }, [route?.params?.image, route?.params?.eventTitle]);

    const generateExperiences = ({item}) => {
        console.log("new experience")
          console.log(item.image + 'HERE"S THE IMAGE TO BE LOADED!!!!!')
          console.log(experienceTitle)
          console.log('params true', route?.params?.image)
      
          if (item.image && item.eventTitle) {
              return (
                  <TouchableOpacity style={{alignSelf:'center', alignItems: 'center', justifyContent: 'center', aspectRatio: 4/5, marginVertical: -30}}>
                  <View style={[styles.experienceContainer, {}]}>
                  <View>
                      <Image source={{ uri: item.image }} style={styles.experienceImg}/>
                  </View>
                  <Text style={styles.experienceTitle}>{item.eventTitle}</Text>
                  <Text style={styles.experienceDescription}>English: Beginer</Text>
                  </View>
              </TouchableOpacity>
              );
          } else if (item.image) {
            return (
              <TouchableOpacity style={{alignSelf:'center', alignItems: 'center', justifyContent: 'center', aspectRatio: 4/5, marginVertical: -30}}>
              <View style={[styles.experienceContainer, {}]}>
              <View>
                  <Image source={{ uri: item.image }} style={styles.experienceImg}/>
              </View>
              <Text style={styles.experienceTitle}>null title</Text>
              <Text style={styles.experienceDescription}>English: Beginer</Text>
              </View>

          </TouchableOpacity>
          );
          } else if (item.eventTitle) {
            return (
              <TouchableOpacity style={{alignSelf:'center', alignItems: 'center', justifyContent: 'center', aspectRatio: 4/5, marginVertical: -30}}>
                  <View style={[styles.experienceContainer, {}]}>
                  <View>
                      <Image source={'../../assets/elems/korean.png'} style={styles.experienceImg}/>
                  </View>
                  <Text style={styles.experienceTitle}>{item.eventTitle}</Text>
                  <Text style={styles.experienceDescription}>English: Beginer</Text>
                  </View>

              </TouchableOpacity>
          );
          }
          return (
            <TouchableOpacity style={{alignSelf:'center', alignItems: 'center', justifyContent: 'center', aspectRatio: 4/5, marginVertical: -30}}>
            <View style={[styles.experienceContainer, {aspectRatio: 4/4}]}>
              <View>
                  <Image source={item?.image} style={styles.experienceImg}/>
              </View>
              <Text style={styles.experienceTitle}>{item?.eventTitle}</Text>
              <Text style={styles.experienceDescription}>English: Beginer</Text>
            </View>
        </TouchableOpacity>
        );
      }    

  return(
    <SafeAreaView>
      <View style={{ alignItems: "center", flexDirection: 'column', display: 'flex', width: "100%"}}>
      <FlatList 
        data={experience} 
        renderItem={({item})=>generateExperiences({item})} 
        style={{width: "100%"}} 
        contentContainerStyle={{alignItems: "center", justifyContent: 'center'}}
      />
        {/* <ScrollView style={{width:"100%", height: "100%", paddingHorizontal: 30}} contentContainerStyle={{ alignItems: 'center', flex: 1, flexGrow: 1, minHeight: '410%' }}>
          {generateExperiences({navigation})}
        </ScrollView> */}
      </View>
    </SafeAreaView>
  )
}

export default HostCurrent