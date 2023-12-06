import * as React from 'react';
import { TouchableWithoutFeedback, SafeAreaView, Alert, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid } from 'react-native';
import { useState } from 'react';
import { Icon, IconElement, Input, Text } from '@ui-kitten/components';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";


const ProfileDetails = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [bio, setBio] = useState("");
  const inputRef = React.useRef();

  const createThreeButtonAlert = () =>
    Alert.alert(
      '',
      'Choose your profile picture',
      [
        {
          text: 'Chose From Gallery',
          onPress: () => pickImage(),
        },
        {
          text: 'Take a Photo',
          onPress: () => takePicture(),
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
        }
      } catch (error) {
        console.error("Error taking photo:", error);
      }
    } else {
      alert("Camera permission is required to take a photo.");
    }
    ;

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const dismissKeyboard = () => {
    inputRef.current.blur();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={[styles.container, styles.flexColumn, {justifyContent: "center", alignItems: "center"}]}>
        <View style={[styles.container, styles.banner,{width:"100%", position: "absolute", top:0, left:0}]}>
          <Text style={[styles.text, styles.bannerText]}>Profile Details</Text>
        </View>
        <TouchableOpacity onPress={createThreeButtonAlert} style={[{position:"absolute", top:"30%", left:"20%"}]}>
          <Image source={image ? { uri: image } : require('../../assets/elems/profilepic-placeholder.png')} style={{position: "absolute", top: "30%", width: 220, height: 220, resizeMode: 'contain', borderRadius: 110}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={createThreeButtonAlert} style={[{position:"absolute", top:"50%", right:"36%"}]}>
          <Image source={require('../../assets/elems/camera.png')} style={{position: "absolute", top: "50%", left:"66%", width: 50, height: 50, resizeMode: 'contain'}}/>
        </TouchableOpacity>
        <View style={[styles.container, {position: "absolute", top: "60%", width: "90%"}]}>
          <Input
            ref={inputRef}
            value={bio}
            label='Personal Bio'
            placeholder='Tell us more about your cultural background, hobbies, and passions...'
            onChangeText={nextValue => setBio(nextValue)}
            style={[styles.textInput]}
            textStyle={{minHeight: 120,}}
            multiline={true}
          />
        </View>
        <View style={[styles.container, styles.flexRow, {width: "90%", justifyContent: "space-between", alignItems:"center", position: "absolute", bottom: "5%"}]}>
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
              onPress={() => navigation.navigate('Profile Tags')}
            >
              <Text style={[styles.text, {color:"white"}]}>Next</Text>
            </TouchableOpacity>
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
export default ProfileDetails;
const takePicture = async () => {
  let result;
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
    result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  } else {
    result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  }

  console.log(result);

  if (!result.canceled) {
    setImage(result.uri);
  }
};

