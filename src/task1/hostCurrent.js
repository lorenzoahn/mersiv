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
    const [experience, setExperience] = useState([{eventTitle: "Korean Cooking", image: require('../../assets/elems/korean.png')}])
    
    const generateExperiences = ({item}) => {
        console.log("new experience")
          console.log(image)
          console.log(experienceTitle)
          console.log('params true', route?.params?.image)
          return (
                <TouchableOpacity style={{alignSelf:'center', alignItems: 'center', justifyContent: 'center'}}>
                <View style={[styles.experienceContainer, {aspectRatio: 4/4}]}>
                  <View>
                      <Image source={item?.image} style={styles.experienceImg}/>
                  </View>
                  <Text style={styles.experienceTitle}>{item?.eventTitle}</Text>
                  <Text style={styles.experienceDescription}>English: Beginer</Text>
                </View>
            </TouchableOpacity>
            );
          if (route.params?.image && route.params?.eventTitle) {
              return (
                  <TouchableOpacity>
                  <View style={[styles.experienceContainer, {}]}>
                  <View>
                      <Image source={item.image} style={styles.experienceImg}/>
                  </View>
                  <Text style={styles.experienceTitle}>{item.eventTitle}</Text>
                  <Text style={styles.experienceDescription}>English: Beginer</Text>
                  </View>
                  <View style={{position: 'absolute', backgroundColor: '#E15F41', borderTopRightRadius: 15, borderBottomLeftRadius: 15, top: 30, right: 0, width: 60, height: 40, justifyContent: 'center', alignItems:'center'}}>
                  <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>9mi</Text>
                  </View>
              </TouchableOpacity>
              );
          } else if (route.params?.image) {
            return (
              <TouchableOpacity>
              <View style={[styles.experienceContainer, {}]}>
              <View>
                  <Image source={item.image} style={styles.experienceImg}/>
              </View>
              <Text style={styles.experienceTitle}>null title</Text>
              <Text style={styles.experienceDescription}>English: Beginer</Text>
              </View>
              <View style={{position: 'absolute', backgroundColor: '#E15F41', borderTopRightRadius: 15, borderBottomLeftRadius: 15, top: 30, right: 0, width: 60, height: 40, justifyContent: 'center', alignItems:'center'}}>
              <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>9mi</Text>
              </View>
          </TouchableOpacity>
          );
          } else if (route.params?.eventTitle) {
            return (
              <TouchableOpacity>
                  <View style={[styles.experienceContainer, {}]}>
                  <View>
                      <Image source={item.image} style={styles.experienceImg}/>
                  </View>
                  <Text style={styles.experienceTitle}>{item.eventTitle}</Text>
                  <Text style={styles.experienceDescription}>English: Beginer</Text>
                  </View>
                  <View style={{position: 'absolute', backgroundColor: '#E15F41', borderTopRightRadius: 15, borderBottomLeftRadius: 15, top: 30, right: 0, width: 60, height: 40, justifyContent: 'center', alignItems:'center'}}>
                  <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>9mi</Text>
                  </View>
              </TouchableOpacity>
          );
          }
      }


    useEffect(() => {
        const updateParams = async () => {
            console.log(route.params?.image + "!!!!IMAGE!!!!!!");
            if (route.params?.image) {
              setImage(route.params?.image);
              console.log(image);
            }
            if (route.params?.eventTitle) {
              setExperienceTitle(route.params?.eventTitle);
              console.log(experienceTitle);
            }
            console.log(route.params?.eventTitle + "!!!!!title");
            if (route.params?.image || route.params?.eventTitle) {
              console.log("params true!!!");
              setExperience(prevExperience => [
                { image: route.params?.image, eventTitle: route.params?.eventTitle },
                ...prevExperience
              ]);
            }
            console.log("values updated");
          };
        
          updateParams();
    }, [route.params?.image, route.params?.eventTitle, experience]);
    
    
    

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