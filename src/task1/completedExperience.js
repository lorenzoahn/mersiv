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

const CompletedExperience = ({route, navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const { experienceIndex } = route.params;
  const experience = Experiences[experienceIndex];

  const generateExperiences = ({navigation}) => {
    return Experiences.map((experience, index) => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Experience Signup", { experienceIndex: index })}>
          <View key={index} style={[styles.experienceContainer, {}]}>
            <View>
              <Image source={experience.experienceImg} style={styles.experienceImg}/>
            </View>
            <Text style={styles.experienceTitle}>{experience.title}</Text>
            <Text style={styles.experienceDescription}>{experience.language}: {experience.level}</Text>
          </View>
          <View style={{position: 'absolute', backgroundColor: '#E15F41', borderTopRightRadius: 15, borderBottomLeftRadius: 15, top: 30, right: 0, width: 60, height: 40, justifyContent: 'center', alignItems:'center'}}>
            <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>{experience.distance}mi</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  const createAttendees = () => {
    const attendees = experience.completionInfo.attendees.slice(0, 3);
    return attendees.map((attendee, index) => {
      return (
      <TouchableOpacity style={[styles.flexColumn]} onPress={() => navigation.navigate('Friend Profile', {user: attendee})}>
        <Image key={index} source={Users[attendee]?.image} style={styles.attendeeImage} />
        <Text style={{textAlign: 'center', fontWeight: 10, fontSize: 16}}>{attendee}</Text>
        {/* <Image key={index} source={require('../../assets/elems/add-icon.png')} style={{width: 35, height: 35, position: 'absolute', bottom:30, right:10}} /> */}
      </TouchableOpacity>
      );
  });
  }

  const createStarts = () => {
    return(
    <View style={[styles.stars, { }]}>
      <MaterialIcons
        name={experience.completionInfo.hostRating >= 1 ? 'star' : 'star-border'}
        size={60}
        style={experience.completionInfo.hostRating >= 1 ? styles.starSelected : styles.starUnselected}
      />
      <MaterialIcons
        name={experience.completionInfo.hostRating >= 2 ? 'star' : 'star-border'}
        size={60}
        style={experience.completionInfo.hostRating >= 2 ? styles.starSelected : styles.starUnselected}
      />
      <MaterialIcons
        name={experience.completionInfo.hostRating >= 3 ? 'star' : 'star-border'}
        size={60}
        style={experience.completionInfo.hostRating >= 3 ? styles.starSelected : styles.starUnselected}
      />
      <MaterialIcons
        name={experience.completionInfo.hostRating >= 4 ? 'star' : 'star-border'}
        size={60}
        style={experience.completionInfo.hostRating >= 4 ? styles.starSelected : styles.starUnselected}
      />

      <MaterialIcons
        name={experience.completionInfo.hostRating >= 5 ? 'star' : 'star-border'}
        size={60}
        style={experience.completionInfo.hostRating >= 5 ? styles.starSelected : styles.starUnselected}
      />
    </View>
    );
  }

  const createTwoButtonAlert = () =>
    {Alert.alert(
      '',
      'Are you sure you want to cancel your attendance?',
      [
        {
          text: 'Yes',
          onPress: () => navigation.navigate("Experience Cancelation Confirmation", { experienceIndex: experienceIndex }),
        },
        {
          text: 'No',
          onPress: () => console.log('cancelled'),
        },
      ],
      { cancelable: true }
    );}

  

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
              <Text style={[styles.modalText, styles.text, { fontSize: 16, color:'white'}]}>Comments from Host</Text>
              <View style={{ height: 2, backgroundColor: 'white', width: '100%', marginTop: 30, position: 'absolute', top: "20%" }} />
              <Text style={[styles.modalText,styles.text, { fontSize: 16, color:'white', fontWeight: 20}]}>{experience.completionInfo.hostReview}</Text>
              <TouchableOpacity
                style={[styles.navButton, styles.prevButton, {width:100}]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={[styles.text, {fontSize: 15}]}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible2(!modalVisible2);
          }}>
          <View style={[styles.centeredView]}>
            <View style={[styles.modalView, styles.flexColumn, {marginTop:270, backgroundColor: "grey"}]}>
              <Text style={[styles.modalText, styles.text, { fontSize: 16, color:'white'}]}>Host Reviews</Text>
              <View style={{ height: 2, backgroundColor: 'white', width: '100%', marginTop: 30, position: 'absolute', top: "20%" }} />
              <Text style={[styles.modalText,styles.text, { fontSize: 16, color:'white', fontWeight: 20}]}>After you participate in a immersive language learning experience, your host will rate your language ability in a scale of 1-5 and a leave you feedback. Click on Read More to access it.</Text>
              <TouchableOpacity
                style={[styles.navButton, styles.prevButton, {width:100}]}
                onPress={() => setModalVisible2(!modalVisible2)}>
                <Text style={[styles.text, {fontSize: 15}]}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


          <Image source={experience.experienceImg} style={[styles.experienceSignupImg, {opacity: 0.5,height: "25%"}]}/>
          

          <Text style={[styles.experienceTitle, {fontSize:24}]}>{experience.title}</Text>
          <Text style={[styles.experienceTitle, {fontSize:16, width: "80%", fontWeight: 20}]}>{experience.location} • {experience.date}</Text>
          <View style={{ height: 2, backgroundColor: '#E1AE41', width: '80%', marginTop: 20 }} />
          <View style={{width:"80%", height: 60, marginTop: 30, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between'}}>
            <Image source={Users[experience.host].image} style={{height: 90, width: undefined, aspectRatio: 1, borderRadius: 100, marginRight: 10}}/>
            <View style={{flexDirection: "column", alignItems: "flex-start", justifyContent: "center", flexGrow: 1}}>
              <Text style={[styles.experienceTitle, {fontSize:16, fontWeight: 10, color: "grey", textAlign: 'left'}]}>Host:</Text>
              <Text style={[styles.experienceTitle, {fontSize:24, textAlign: 'left'}]}>{experience.host}</Text>
            </View>
            <TouchableOpacity style={[styles.navButton, styles.nextButton, {aspectRatio: 1.3/1, width: 80, shadowColor: '#000',
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
          <TouchableOpacity onPress={() => setModalVisible2(true)} style={{ marginTop: 10, flexDirection: "row", alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20}}>
            <Text style={[ {fontSize:16, fontWeight: 'bold', color: "grey", flexShrink: 1, paddingHorizontal: 10}]}>Your review by: {experience.host}</Text>
            <Image source={require('../../assets/elems/question.png')} style={{height: 30, width: undefined, aspectRatio: 1}}/>
          </TouchableOpacity>
          {createStarts()}
          <TouchableOpacity onPress={() => setModalVisible(true)} style={{ marginTop: 10, flexDirection: "row", alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20}}>
            <Text style={[ {fontSize:16, fontWeight: 'bold', color: "#E15F41", flexShrink: 1, paddingHorizontal: 10, textDecorationLine: "underline"}]}>Read More</Text>
          </TouchableOpacity>
          <View style={{ height: 2, backgroundColor: '#E1AE41', width: '80%', marginTop: 10, marginBottom: 10 }} />
          <Text style={[ {fontSize:16, fontWeight: 'bold', color: "grey", flexShrink: 1, paddingHorizontal: 10}]}>Atendees:</Text>
          <View style={styles.flexRow}>
            {createAttendees()}
          </View>
          <TouchableOpacity
            style={[styles.navButton, styles.prevButton, {width:"90%", height: 60, aspectRatio: 374/70}]}
            title="Back"
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.text]}>Back</Text>
          </TouchableOpacity>
      </View>
  
  )
}

export default CompletedExperience