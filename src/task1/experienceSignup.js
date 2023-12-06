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
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Landing", { experienceIndex: index })}>
          <View key={index} style={[styles.experienceContainer, {}]}>
            <View>
              <Image source={experience.experienceImg} style={styles.experienceImg}/>
            </View>
            <Text style={styles.experienceTitle}>{experience.title}</Text>
            <Text style={styles.experienceDescription}>{experience.language}: {experience.level}</Text>
          </View>
        </TouchableOpacity>
      );
    });
}

const ExperienceSignup = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const renderToggleButton = () => (
    <Pressable onPress={() => setVisible(true)}>
      <Image source={require('../../assets/elems/menu-icon.png')} style={{width: 40, height: 40, resizeMode: 'contain'}}/>
    </Pressable>
  );

  const navigateToLanding = () => {
    setVisible(false); // Close the overflow menu before navigating
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Landing' }] // Assuming your stack navigator is named 'LandingStack'
      })
    );
  };

  return(
    <SafeAreaView>
      <View style={{ alignItems: "center", flexDirection: 'column', display: 'flex', width: "100%"}}>
        <View style={{justifyContent: "space-between", alignItems: "center", flexDirection: 'row', display: 'flex', width: "100%", paddingRight: 30,  paddingLeft: 30}}>
          <Image source={require('../../assets/logos/mersiv-logo-name.png')} style={[{width: "50%", height: 70, resizeMode: 'contain'}, ]}/>
          <OverflowMenu
            anchor={renderToggleButton}
            visible={visible}
            placement={'bottom end'}
            onBackdropPress={() => setVisible(false)}
            >
            <MenuItem title='Community Alerts' />
            <MenuItem title='Become a Host' />
            <MenuItem title='Help' />
            <MenuItem title='Logout' onPress={() => {
              setVisible(false);
              navigation.navigate('Landing');
            }}/>
          </OverflowMenu>
        </View>
        <View style={{ height: 1.5, backgroundColor: 'black', width: '100%', marginTop: 20 }} />
        <ScrollView style={{width:"100%", height: "100%", paddingHorizontal: 30}} contentContainerStyle={{ alignItems: 'center', flex: 1, flexGrow: 1, minHeight: '400%' }}>
          <Image source={require('../../assets/elems/search-icon.png')} style={{width: "100%", aspectRatio: 3/1, height: undefined, resizeMode: 'contain'}}/>
          <Text style={{fontWeight: 'bold', textAlign: 'left', width: '100%', fontSize: 22, fontWeight: 10}}>Nearby Experiences: Dallas</Text>
          {generateExperiences({navigation})}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ExperienceSignup