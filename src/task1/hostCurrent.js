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
    
    
    const generateExperiences = ({navigation}) => {
        console.log("new experience")
        console.log(image)
        console.log(experienceTitle)
        console.log('params true', route?.params?.image)
        if (route.params) {
            console.log("new experience!!!!!")
            return (
                <TouchableOpacity>
                <View style={[styles.experienceContainer, {}]}>
                <View>
                    <Image source={route.params?.image} style={styles.experienceImg}/>
                </View>
                <Text style={styles.experienceTitle}>{route.params?.eventTitle}</Text>
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
            console.log(route.params?.image)
            if (route.params?.image) {
                setImage(route.params?.image);
                console.log(image)
            }
            if (route.params?.eventTitle) {
                setExperienceTitle(route.params?.eventTitle);
                console.log(experienceTitle)
            }
            console.log('values updated')
        }, [route.params?.image, route.params?.eventTitle, generateExperiences({navigation})]);
    
    const renderToggleButton = () => (
        <Pressable onPress={() => setVisible(true)}>
      <Image source={require('../../assets/elems/menu-icon.png')} style={{width: 40, height: 40, resizeMode: 'contain'}}/>
    </Pressable>
  );

  return(
    <SafeAreaView>
      <View style={{ alignItems: "center", flexDirection: 'column', display: 'flex', width: "100%"}}>
        <ScrollView style={{width:"100%", height: "100%", paddingHorizontal: 30}} contentContainerStyle={{ alignItems: 'center', flex: 1, flexGrow: 1, minHeight: '410%' }}>
          {generateExperiences({navigation})}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HostCurrent