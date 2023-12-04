import * as React from 'react';
import { TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid } from 'react-native';
import { useState } from 'react';
import { IndexPath, Layout, Select, SelectItem, Text } from '@ui-kitten/components';
import styles from '../styles';

const languages = [
  'English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese',
    'Russian', 'Arabic', 'Portuguese', 'Hindi', 'Italian', 'Dutch',
    'Swedish', 'Korean', 'Turkish', 'Indonesian', 'Polish', 'Vietnamese',
    'Czech', 'Greek', 'Danish', 'Finnish', 'Hungarian', 'Norwegian',
    'Romanian', 'Thai', 'Bengali', 'Hebrew', 'Malay', 'Persian', 'Tagalog',
    'Serbian', 'Slovak', 'Slovenian', 'Croatian', 'Bulgarian', 'Mongolian',
    'Ukrainian', 'Lithuanian', 'Latvian', 'Estonian', 'Georgian', 'Armenian',
    'Albanian', 'Macedonian', 'Bosnian', 'Montenegrin', 'Kurdish', 'Pashto',
    'Swahili', 'Amharic', 'Yoruba', 'Igbo', 'Hausa', 'Zulu', 'Xhosa', 'Afrikaans'
]

const personal = [
  "Vegan", "Vegetarian", "Pescatarian", "Keto", "Paleo", "Gluten-Free", "Halal", "Kosher", "None"
]

const ProfileTags = ({navigation}) => {
  const [selectedLanguages, setSelectedLanguages] = useState([
  ]);
  const [selectedPersonal, setSelectedPersonal] = useState([
  ]);


  return (
    <TouchableWithoutFeedback>
      <View style={[styles.container, styles.flexColumn, {justifyContent: "center", alignItems: "center"}]}>
        <View style={[styles.container, styles.banner,{width:"100%", position: "absolute", top:0, left:0}]}>
          <Text style={[styles.text, styles.bannerText]}>Profile Tags</Text>
        </View>
        <Image source={require('../../assets/elems/tag.png')} style={{position: "absolute", top: "30%", width: 150, height: 150, resizeMode: 'contain'}}/>
        <Select
          multiSelect={true}
          selectedIndex={selectedLanguages}
          onSelect={(index) => setSelectedLanguages(index)}
          value={selectedLanguages.map(index => languages[index-1]).join(', ')}
          style={[{position: "absolute", top: "55%", width: "85%", height: "60%", resizeMode: 'contain', borderRadius:22,}]}
          placeholder='Languages of Interest'
        >
          {languages.map((language, index) => (
            <SelectItem key={index} title={language} />
          ))}
        </Select>
        <Select
          multiSelect={true}
          selectedIndex={selectedPersonal}
          onSelect={(index) => setSelectedPersonal(index)}
          value={selectedPersonal.map(index => personal[index-1]).join(', ')}
          style={[{position: "absolute", top: "65%", width: "85%", height: "40%", resizeMode: 'contain'}]}
          placeholder='Personal'
        >
          {personal.map((tag, index) => (
            <SelectItem key={index} title={tag} />
          ))}
        </Select>
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
              onPress={() => navigation.navigate('Location Details')}
            >
              <Text style={[styles.text, {color:"white"}]}>Next</Text>
            </TouchableOpacity>
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ProfileTags;

