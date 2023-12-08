import * as React from 'react';
import { Modal, Alert, ScrollView, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid, Pressable } from 'react-native';
import { useState } from 'react';
import { Datepicker, Icon, IconElement, Layout, Text, Button, IndexPath, MenuItem, OverflowMenu, Select, SelectItem } from '@ui-kitten/components';
import { CommonActions } from '@react-navigation/native';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
import {Experiences, Users} from './data.js';

const CalendarIcon = (props) => (
  <Icon
    {...props}
    name='calendar'
  />
);


const ExperienceSignup = ({route, navigation}) => {
  const [date, setDate] = React.useState(new Date());
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { experienceIndex } = route.params;
  const experience = Experiences[experienceIndex];

  const filter = (date) => date.getDay() !== 0 && date.getDay() !== 6;
  
  const timeList = [
    '8:00AM',
    '10:00AM',
    '12:00PM',
    '2:00PM',
    '4:00PM',
    '6:00PM',
    '8:00PM',
    '10:00PM'
  ];

  const createTwoButtonAlert = () =>
    Alert.alert(
      '',
      'Would you like to make any more changes?',
      [
        {
          text: 'Yes',
          onPress: () => console.log('cancelled'),
        },
        {
          text: 'No',
          onPress: () => navigation.navigate("Experience Confirmation", { experienceIndex: experienceIndex }),
        },
      ],
      { cancelable: true }
    );

  return(
    // <SafeAreaView>
      <View style={{ alignItems: "center", flexDirection: 'column', display: 'flex', width: "100%", height: "100%", backgroundColor: 'white'}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={[styles.centeredView,]}>
            <View style={[styles.modalView, styles.flexColumn, {marginTop:270, backgroundColor: "#4169E1"}]}>
              <Text style={[styles.modalText, styles.text, { fontSize: 16, color:'white'}]}>{experience.language}: {experience.level}</Text>
              <View style={{ height: 2, backgroundColor: 'white', width: '100%', marginTop: 30, position: 'absolute', top: "20%" }} />
              <Text style={[styles.modalText,styles.text, { fontSize: 16, color:'white', fontWeight: 20}]}>{experience.description}</Text>
              <TouchableOpacity
                style={[styles.navButton, styles.prevButton, {width:100}]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={[styles.text, {fontSize: 15}]}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* <ScrollView style={{width:"100%", height: "100%"}} contentContainerStyle={{ alignItems: 'center', flex: 1, flexGrow: 1, minHeight: '100%' }}> */}
          <Image source={experience.experienceImg} style={styles.experienceSignupImg}/>
          <Text style={[styles.experienceTitle, {fontSize:24}]}>{experience.title}</Text>
          <Text style={[styles.experienceTitle, {fontSize:16, width: "80%", fontWeight: 10, color: "grey"}]}>{experience.summary}</Text>
          <Text style={[styles.experienceTitle, {fontSize:16, width: "80%", fontWeight: 20}]}>{experience.location} • ~{experience.distance}mi away • {experience.spotsAvailable} spots available</Text>
          <View style={{ height: 2, backgroundColor: '#E1AE41', width: '80%', marginTop: 20 }} />
          <TouchableOpacity onPress={() => setModalVisible(true)} style={{width:"80%", height: 60, borderColor: "blue", borderWidth: 3, borderRadius: 30, marginTop: 20, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20}}>
            <Image source={require('../../assets/elems/globe-icon.png')} style={{height: 30, width: undefined, aspectRatio: 1}}/>
            <Text style={[ {fontSize:16, fontWeight: 10, color: "grey", flexShrink: 1, paddingHorizontal: 10}]}>{experience.language}: {experience.level}</Text>
            <Image source={require('../../assets/elems/question.png')} style={{height: 30, width: undefined, aspectRatio: 1}}/>
          </TouchableOpacity>
          <View style={{ height: 2, backgroundColor: '#E1AE41', width: '80%', marginTop: 20 }} />
          <View style={{width:"80%", height: 60, marginTop: 30, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between'}}>
            <Image source={Users[experience.host].image} style={{height: 90, width: undefined, aspectRatio: 1, borderRadius: 100, marginRight: 10}}/>
            <View style={{flexDirection: "column", alignItems: "flex-start", justifyContent: "center", flexGrow: 1}}>
              <Text style={[styles.experienceTitle, {fontSize:16, fontWeight: 10, color: "grey", textAlign: 'left'}]}>Host:</Text>
              <Text style={[styles.experienceTitle, {fontSize:24, textAlign: 'left'}]}>{experience.host}</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Chat Conversation', {user: experience.host})} style={[styles.navButton, styles.nextButton, {aspectRatio: 1.3/1, width: 80, shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,}]}>
              <Image source={require('../../assets/elems/inactive-chat.png')} style={{height: 40, width: 50, resizeMode: 'contain', tintColor: 'white'}}/>
            </TouchableOpacity>
          </View>
          <View style={{ height: 2, backgroundColor: '#E1AE41', width: '80%', marginTop: 30 }} />
          <View style={{width:"80%", height: 60, marginTop: 30, flexDirection: "row", alignItems: 'center', justifyContent: 'center'}}>
            <Datepicker
              label='Pick a date'
              placeholder='Pick Date'
              date={date}
              onSelect={nextDate => setDate(nextDate)}
              filter={filter}
              accessoryRight={CalendarIcon}
            />
            <Select
              placeholder='Pick a time'
              label='Pick a time'
              selectedIndex={selectedIndex}
              onSelect={index => {setSelectedIndex(index)}}
              style={{width: "50%", height: "100%", marginLeft: 10}}
              value={timeList[selectedIndex-1]}
            >
              <SelectItem title='8:00AM' />
              <SelectItem title='10:00AM' />
              <SelectItem title='12:00PM' />
              <SelectItem title='2:00PM' />
              <SelectItem title='4:00PM' />
              <SelectItem title='6:00PM' />
              <SelectItem title='8:00PM' />
              <SelectItem title='10:00PM' />
            </Select>
          </View>
        {/* </ScrollView> */}
          <View style={[styles.container, styles.flexRow, {width: "90%", justifyContent: "space-between", alignItems:"center",}]}>
            <TouchableOpacity
              style={[styles.navButton, styles.prevButton]}
              title="Back"
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.text]}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navButton, styles.nextButton]}
              title="Next"
              onPress={() => createTwoButtonAlert()}
            >
              <Text style={[styles.text, {color:"white"}]}>Next</Text>
            </TouchableOpacity>
        </View>
      </View>
    // </SafeAreaView>
  )
}

export default ExperienceSignup