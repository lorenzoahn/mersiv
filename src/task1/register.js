import * as React from 'react';
import { TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Alert, Modal } from 'react-native';
import { useState } from 'react';
import { IndexPath, Layout, Select, SelectItem, Text, Tooltip } from '@ui-kitten/components';
import styles from '../styles';

const accountTypes = ["Learner", "Host"]

const Register = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState([
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableWithoutFeedback>
      <View style={[styles.container, styles.flexColumn, {justifyContent: "center", alignItems: "center"}]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={[styles.centeredView]}>
            <View style={[styles.container, styles.modalView, styles.flexColumn, {marginTop:200, marginBottom:200, backgroundColor: "#E1AE41"}]}>
              <Text style={[styles.modalText,styles.text, { fontSize: 30}]}>Two Options:</Text>
              <View style={[styles.container, {backgroundColor: "#E1AE41"}]}>
                <View style={[styles.flexRow, {justifyContent: 'center',
    alignItems: 'center',  marginBottom:20, marginTop:20}]}>
                  <View style={{ flex: 1, height: null}}>
                    <Image source={require("../../assets/elems/learner-head-icon.png")} style={{flex: 1, width: 80, height: "auto", resizeMode: 'contain'}}/>
                  </View>
                  <View style={{ flex: 2}}>
                    <Text style={{ }}>A Host is someone with expertise in a specific language & culture who’s offering local learning experiences.</Text>
                  </View>
                </View>
                <View style={{backgroundColor: "white", height: 2, width: "100%", position: "absolute", top:"52%"}}>
                </View>
                <View style={[styles.flexRow, { justifyContent: 'center',
    alignItems: 'center'}]}>
                  <View style={{ flex: 1, height: null}}>
                    <Image source={require("../../assets/elems/host-house-icon.png")} style={{flex: 1, width: 80, height: "auto", resizeMode: 'contain'}}/>
                  </View>
                  <View style={{ flex: 2}}>
                    <Text style={{ }}>A Host is someone with expertise in a specific language & culture who’s offering local learning experiences.</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={[styles.navButton, styles.prevButton, {width:100}]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={[styles.text, {fontSize: 15}]}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{position: "absolute",right: "20%",  top: "48%", width: 60, height: 60,borderRadius: 110}}>
          <Image source={require('../../assets/elems/question.png')} style={{top: -55, width: 60, resizeMode: 'contain', borderRadius: 110}}/>
        </TouchableOpacity>


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
              onPress={() => {
                console.log(accountTypes[selectedIndex-1])
                if (accountTypes[selectedIndex-1] === "Host") {
                  navigation.navigate('Verification');
                } else {
                  navigation.navigate('Sign Up', {userType: 'learner'});
                }
              }}
            >
              <Text style={[styles.text, {color:"white"}]}>Next</Text>
            </TouchableOpacity>
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Register;

