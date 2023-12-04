import * as React from 'react';
import { TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid } from 'react-native';
import { useState } from 'react';
import { IndexPath, Layout, Select, SelectItem, Text, Tooltip } from '@ui-kitten/components';
import styles from '../styles';

const accountTypes = ["Learner", "Host"]

const Register = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState([
  ]);
  const [visible, setVisible] = React.useState(false);

  const renderToggleButton = () => (
    <TouchableOpacity onPress={() => setVisible(true)} style={{position: "absolute",right: "20%",  top: "48%", width: 60, height: 60,borderRadius: 110}}>
      <Image source={require('../../assets/elems/question.png')} style={{top: -55, width: 60, resizeMode: 'contain', borderRadius: 110}}/>
    </TouchableOpacity>
  )
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.container, styles.flexColumn, {justifyContent: "center", alignItems: "center"}]}>
        <View style={[styles.container, styles.banner,{width:"100%", position: "absolute", top:0, left:0}]}>
          <Text style={[styles.text, styles.bannerText]}>Registration</Text>
        </View>
        <View style={[{width:"75 %", height: "20%", backgroundColor:"#E1AE41", borderRadius:15, alignItems: 'center', padding:20}]}>
          <Text style={[styles.text, {fontSize:19}]}>Choose and account type</Text>
        </View>
        <Select
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}
          value={accountTypes[selectedIndex-1]}
          style={[{position: "absolute", top: "49%", left: "20%",width: "40%", height: "60%", resizeMode: 'contain', borderRadius:22,}]}
          placeholder='Options'
        >
          <SelectItem title={"Learner"}/>
          <SelectItem title={"Host"}/>
        </Select>
        <View style={[{position: "absolute", top: "48%", right:"20%"}]}>
          <Tooltip
            anchor={renderToggleButton} // Attach the tooltip to the correct toggle button
            visible={visible}
            onBackdropPress={() => setVisible(false)}
            placement={"bottom end"}
            style={{width: 300, height: 110, borderRadius: 15}}
           
          >
            A Learner is someone looking to participate in a language learning experience to further their understanding. 
            A Host is someone with expertise in a specific language & culture who’s offering local learning experiences.
          </Tooltip>
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
              onPress={() => navigation.navigate('Sign Up')}
            >
              <Text style={[styles.text, {color:"white"}]}>Next</Text>
            </TouchableOpacity>
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Register;

