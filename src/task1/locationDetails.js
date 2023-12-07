import * as React from 'react';
import { TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid } from 'react-native';
import { useState } from 'react';
import { IndexPath, Layout, Select, SelectItem, Text} from '@ui-kitten/components';
import Slider from '@react-native-community/slider';
import styles from '../styles';

const LocationDetails = ({route, navigation}) => {
    const [sliderValue, setSliderValue] = useState(0);  
    const {userType} = route.params;
    const {profileImage} = route.params;
    const {bio} = route.params;
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.container, styles.flexColumn, {justifyContent: "center", alignItems: "center"}]}>
        <View style={[styles.container, styles.banner,{width:"100%", position: "absolute", top:0, left:0}]}>
          <Text style={[styles.text, styles.bannerText]}>Location Details</Text>
        </View>
        <Image source={require('../../assets/elems/location.png')} style={{position: "absolute", top: "30%", width: 150, height: 150, resizeMode: 'contain'}}/>
        <Text style={[{justifyContent:"center", fontSize:23, textAlign: "center", position: "absolute", top: "50%", width: "85%", height: "30%", resizeMode: 'contain'}]}>Filter for Nearby Experiences (miles):</Text>
        <Text style={[styles.sliderValue, styles.text, {position: "absolute", top: "60%"}]}>{sliderValue}</Text>
        <Slider
            style={{ width: 300, position: "absolute", top: "65%" }}
            step={1}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#DE5E41"
            maximumTrackTintColor="#EFAE9F"
            thumbTintColor="#EFAE9F"
            onValueChange={(value) => setSliderValue(value)}
        />
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
              onPress={() => navigation.navigate('Confirmation', {userType: userType, profileImage: profileImage, bio: bio})}
            >
              <Text style={[styles.text, {color:"white"}]}>Next</Text>
            </TouchableOpacity>
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default LocationDetails;

