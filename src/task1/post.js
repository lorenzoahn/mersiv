import * as React from 'react';
import {  Modal, TouchableWithoutFeedback, SafeAreaView, Alert, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid } from 'react-native';
import { useState } from 'react';
import { Radio, RadioGroup, Icon, IconElement, Input, Text } from '@ui-kitten/components';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";

const Post = ({navigation}) => {

  const [selectedIndex1, setSelectedIndex1] = React.useState(0);
  const [selectedIndex2, setSelectedIndex2] = React.useState(0);
  const [selectedIndex3, setSelectedIndex3] = React.useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [image, setImage] = useState(null);
  const [photoSelected, setPhotoSelected] = useState(false);
  const [disabilitySelected, setDisabilitySelected] = useState(false);

  const createThreeButtonAlert = () =>
    Alert.alert(
      '',
      'Choose your profile picture',
      [
        {
          text: 'Chose From Gallery',
          onPress: () => {pickImage(); setPhotoSelected(true);},
        },
        {
          text: 'Take a Photo',
          onPress: () => {takePicture(); setPhotoSelected(true);},
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );

  const pickImage = async () => {
    if (Platform.OS === 'android') {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permission to access media library',
          message: 'We need your permission to access your media library',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
        return;
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);
    setModalVisible(false);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const takePicture = async () => {
    if (Platform.OS === 'android') {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Permission to access camera',
          message: 'We need your permission to access your camera',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
        return;
      }
    }
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    if (status === "granted") {
      try {
        const result = await ImagePicker.launchCameraAsync({
          quality: 1,
        });

        if (!result.canceled) {
          setImage(result.uri);
          setPhotoSelected(true);
          setModalVisible(false);
        }
      } catch (error) {
        console.error("Error taking photo:", error);
      }
    } else {
      alert("Camera permission is required to take a photo.");
    }
    ;

    console.log(result);
    setModalVisible(false);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };



  const [val1, setVal1] = React.useState('');
  const [val2, setVal2] = React.useState('');
  const [val3, setVal3] = React.useState('');
  const [val4, setVal4] = React.useState('');
  const [val5, setVal5] = React.useState('');

  const val1InputRef = React.useRef();
  const val2InputRef = React.useRef();
  const val3InputRef = React.useRef();
  const val4InputRef = React.useRef();
  const val5InputRef = React.useRef();

  return (
    <View style={[styles.flexColumn, {justifyContent: 'space-between', alignItems: "center", width: "100%", height: "100%"}]}>
      <TouchableOpacity onPress={createThreeButtonAlert} style={[{width: "100%", height: 250, backgroundColor: '#E15F41', borderBottomLeftRadius:20, borderBottomRightRadius: 20, justifyContent: 'flex-start', alignItems:'flex-start'}]}>
        <Image source={image ? { uri: image } : require('../../assets/elems/addimage-icon.png')} style={{position: "absolute", top: "30%", width: "100%", height: 250, resizeMode: 'cover', position: 'absolute', top: 0, borderBottomLeftRadius:20, borderBottomRightRadius: 20,}}/>
      </TouchableOpacity>
      <Input
        ref={val1InputRef}
        value={val1}
        placeholder='Event Title'
        onChangeText={nextValue => setVal1(nextValue)}
        style={[styles.textInput, {marginVertical: 10}]}
        textStyle={{height:30}}
      />

      <Input
        ref={val2InputRef}
        value={val2}
        placeholder='Location'
        onChangeText={nextValue => setVal2(nextValue)}
        style={[styles.textInput, {marginVertical: 10}]}
        textStyle={{height:30}}
      />

      <Input
        ref={val3InputRef}
        value={val3}
        placeholder='Date'
        onChangeText={nextValue => setVal3(nextValue)}
        style={[styles.textInput, {marginVertical: 10}]}
        textStyle={{height:30}}
      />

      <Input
        ref={val4InputRef}
        value={val4}
        placeholder='Time'
        onChangeText={nextValue => setVal4(nextValue)}
        style={[styles.textInput, {marginVertical: 10}]}
        textStyle={{height:30}}
      />

      <Input
        ref={val5InputRef}
        value={val5}
        placeholder='Description'
        onChangeText={nextValue => setVal5(nextValue)}
        style={[styles.textInput, {marginVertical: 10}]}
        textStyle={{height:30}}
      />

      <View style={[styles.container, styles.flexRow, {width: "90%", justifyContent: "flex-end", alignItems:"center"}]}>
        <TouchableOpacity
          style={[styles.navButton, styles.nextButton]}
          title="Next"
          onPress={() => navigation.navigate('Hooray', {eventTitle: val1, location: val2, date: val3, time: val4, description: val5, image: image})}
          >
          <Text style={[styles.text, {color:"white"}]}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* <Input 
      style={{width:"80%", height: 70, borderColor: "blue", borderWidth: 3, borderRadius: 15, marginTop: 20, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20}}
      \> */}



{/* 
      <View style={[styles.banner,{width:"100%"}]}>
        <Text style={[styles.text, styles.bannerText]}>Verification</Text>
      </View>
      <Text style={[{fontSize: 20}]}>Please complete the following forms:</Text>

      <TouchableOpacity onPress={() => setModalVisible(true)} style={{width:"80%", height: 70, borderColor: "blue", borderWidth: 3, borderRadius: 15, marginTop: 20, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20}}>
        <Image source={require('../../assets/elems/id-icon.png')} style={{height: 30, width: 30,resizeMode: 'contain'}}/>
        <View style={{flexDirection: 'column', marginHorizontal: 10}}>
          <Text style={[{fontSize: 16}]}>Identification Document (ID)</Text>
          <Text style={[{fontSize: 12, color: photoSelected ? "green" : "red"}]}>{photoSelected ? "Uploaded" : "Required"}</Text>
        </View>
        <Image source={require('../../assets/elems/front-arrow-icon.png')} style={{height: 15, width: 15, resizeMode: 'contain'}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible2(true)} style={{width:"80%", height: 70, borderColor: "blue", borderWidth: 3, borderRadius: 15, marginTop: 20, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20}}>
        <Image source={require('../../assets/elems/form-icon.png')} style={{height: 30, width: 30,resizeMode: 'contain'}}/>
        <View style={{flexDirection: 'column', marginHorizontal: 10}}>
          <Text style={[{fontSize: 16}]}>Voluntary Self-Identification</Text>
          <Text style={[{fontSize: 12, color: disabilitySelected ? "green" : "red"}]}>{disabilitySelected ? "Uploaded" : "Required"}</Text>
        </View>
        <Image source={require('../../assets/elems/front-arrow-icon.png')} style={{height: 15, width: 15, resizeMode: 'contain'}}/>
      </TouchableOpacity>
      
      <Text style={[{fontSize: 20, textAlign: 'center'}]}>Have you ever hosted on a platform like Airbnb?</Text>
      <RadioGroup
        selectedIndex={selectedIndex1}
        onChange={index => setSelectedIndex1(index)}
        style={{flexDirection: 'row', width: "80%", justifyContent: 'center', alignItems: 'center', marginTop: 20}}
      >
        <Radio style={{backgroundColor:'white', borderColor: 'black', borderWidth: .2, borderRadius: 15, height: 40, width: 90, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, justifyContent: 'center', marginHorizontal: 20, }}>
          Yes
        </Radio>
        <Radio style={{backgroundColor:'white', borderColor: 'black', borderWidth: .2, borderRadius: 15, height: 40, width: 90, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, justifyContent: 'center', marginHorizontal: 20 }}>
          No
        </Radio>
      </RadioGroup>
      <Text style={[{fontSize: 20, textAlign: 'center'}]}>Do you have any pets?</Text>
      <RadioGroup
        selectedIndex={selectedIndex2}
        onChange={index => setSelectedIndex2(index)}
        style={{flexDirection: 'row', width: "80%", justifyContent: 'center', alignItems: 'center', marginTop: 20}}
      >
        <Radio style={{backgroundColor:'white', borderColor: 'black', borderWidth: .2, borderRadius: 15, height: 40, width: 90, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, justifyContent: 'center', marginHorizontal: 20, }}>
          Yes
        </Radio>
        <Radio style={{backgroundColor:'white', borderColor: 'black', borderWidth: .2, borderRadius: 15, height: 40, width: 90, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, justifyContent: 'center', marginHorizontal: 20 }}>
          No
        </Radio>
      </RadioGroup>


      <View style={[styles.flexRow, {width: "90%", justifyContent: "space-between", alignItems:"center", flexShrink: 1, marginBottom: 40}]}>
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
            onPress={() => navigation.navigate('VerificationConfirmation')}
          >
            <Text style={[styles.text, {color:"white"}]}>Next</Text>
          </TouchableOpacity>
        </View> */}
    </View>
  )
}

export default Post;