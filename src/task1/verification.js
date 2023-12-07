import * as React from 'react';
import { Modal, TouchableWithoutFeedback, SafeAreaView, Alert, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid } from 'react-native';
import { useState } from 'react';
import { Radio, RadioGroup, Icon, IconElement, Input, Text } from '@ui-kitten/components';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";

const Verification = ({navigation}) => {

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





  return (
    <View style={[styles.flexColumn, {justifyContent: 'space-between', alignItems: "center", width: "100%", height: "100%"}]}>

<Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={[styles.centeredView,]}>
            <View style={[styles.modalView, styles.flexColumn, {marginTop:100, backgroundColor: "#4169E1"}]}>
              <Text style={[styles.modalText, styles.text, { fontSize: 20, color:'white'}]}>Take a Photo of Your Government ID</Text>
              <View style={{ height: 2, backgroundColor: 'white', width: '100%' }} />
              <Text style={[styles.text, { color:'white', textAlign: 'center'}]}>This is required by our platform in order to ensure the safety of you and our language learners by verifying your personal information. All data is held secure and solely used for verification. </Text>
              <TouchableOpacity
                style={[styles.prevButton, {width:250, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 15, backgroundColor: "#E15F41", borderWidth: 0, marginTop: 10}]}
                onPress={createThreeButtonAlert}>
                <Text style={[styles.text, {fontSize: 15, textAlign:'center', color: 'white'}]}>Upload</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.navButton, styles.prevButton, {width:100}]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={[styles.text, {fontSize: 15}]}>Cancel</Text>
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
          <View style={[styles.centeredView,]}>
            <View style={[styles.modalView, styles.flexColumn, {marginTop:100, backgroundColor: "#4169E1"}]}>
              <Text style={[styles.modalText, styles.text, { fontSize: 20, color:'white'}]}>Voluntary Self-Identification of Disability</Text>
              <View style={{ height: 2, backgroundColor: 'white', width: '100%' }} />
              <Text style={[styles.text, { color:'white', textAlign: 'left'}]}>You are considered to have a disability if you have a physical or mental impairment or medical condition that substantially limits a major life activity, or if you have a history or record of such an impairment or medical condition. 
              {"\n"}{"\n"}Disabilities include, but are not limited to:
              {"\n"}{"\n"}• Blindness
                {"\n"}• Autism
                {"\n"}• Cancer 
              </Text>

              <RadioGroup
                selectedIndex={selectedIndex3}
                onChange={index => setSelectedIndex3(index)}
                style={{flexDirection: 'column', width: "100%", justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 20}}
              >
                <Radio style={{backgroundColor:'white', borderColor: 'black', borderWidth: .2, borderRadius: 15, height: 40, width: 250, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, justifyContent: 'flex-start', marginHorizontal: 20, paddingHorizontal: 10}}>
                  Yes, I have a disability
                </Radio>
                <Radio style={{backgroundColor:'white', borderColor: 'black', borderWidth: .2, borderRadius: 15, height: 40, width: 250, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, justifyContent: 'flex-start', marginHorizontal: 20, paddingHorizontal: 10}}>
                  No, I don't have a disability
                </Radio>
                <Radio style={{backgroundColor:'white', borderColor: 'black', borderWidth: .2, borderRadius: 15, height: 40, width: 250, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, justifyContent: 'flex-start', marginHorizontal: 20, paddingHorizontal: 10}}>
                  I don't wish to disclose
                </Radio>
              </RadioGroup>

              <TouchableOpacity
                style={[styles.prevButton, {width:100, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 15, backgroundColor: "#E15F41", borderWidth: 0, marginTop: 10}]}
                onPress={() => {setModalVisible2(!modalVisible2);setDisabilitySelected(true);}}>
                <Text style={[styles.text, {fontSize: 15, textAlign:'center', color: 'white'}]}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>




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
        </View>
    </View>
  )
}

export default Verification;