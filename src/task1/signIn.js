import * as React from 'react';
import { TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { useState } from 'react';
import { Icon, IconElement, Input, Text } from '@ui-kitten/components';

import styles from '../styles';

const AlertIcon = (props) => (
  <Icon
    {...props}
    name='alert-circle-outline'
  />
);

const passwordEntry = () => {
  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const inputRef = React.useRef();
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        {...props}
        name={secureTextEntry ? 'eye-off' : 'eye'}
      />
    </TouchableWithoutFeedback>
  );

  // const renderCaption = () => {
  //   return (
  //     <View style={styles.captionContainer}>
  //       {AlertIcon(styles.captionIcon)}
  //       <Text style={styles.captionText}>
  //       Should contain at least 8 symbols
  //       </Text>
  //     </View>
  //   );
  // };
  const dismissKeyboard = () => {
    inputRef.current.blur();
  };


  return (
    <Input
      ref={inputRef}
      value={value}
      label='      Password'
      placeholder=''
      // caption={renderCaption}
      accessoryRight={renderIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={nextValue => setValue(nextValue)}
      style={[styles.textInput]}
      textStyle={{height:30}}
    />
  );
}


const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('')
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();


  const dismissKeyboard = () => {
    emailInputRef.current.blur();
    passwordInputRef.current.blur();
  };
  
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.container, {flex:.6, width:"100%"}]}>
          <Image style={[styles.img, {height: "10%"}]} source={require('../../assets/elems/signin-man.png')} />
        </View>
        <View style={[styles.container, styles.flexColumn, {width:"100%", height:"3em"}]}>
          <View style={[styles.container, styles.flexColumn, {flex: 3, width:"100%", alignItems:"center", justifyContent: "center", gap:"10px"}]}>
            <View style={[styles.container, {width:"100%"}]}>
              <Input
                ref={emailInputRef}
                value={email}
                label='      Email'
                placeholder=''
                onChangeText={nextValue => setEmail(nextValue)}
                style={styles.textInput}
                textStyle={{height:30}}
                />
            </View>
            <View style={[styles.container, {width:"100%"}]}>
              {passwordEntry()}
            </View>
            <View style={[styles.container, {width:"100%"}]}>
              <Input
                ref={passwordInputRef}
                value={phone}
                label='      Phone (XXX-XXX-XXX)'
                placeholder=''
                onChangeText={nextValue => setPhone(nextValue)}
                style={styles.textInput}
                textStyle={{height:30}}
                />
            </View>
          </View>
          <Text style={[styles.text, {color:"#909090"}]}>-Or sign in with-</Text>
          <View style={[styles.container, styles.flexRow, { width: "80%", justifyContent: "space-between", alignItems:"center"}]}>
            <View style={[styles.container]}>
              <Image style={[styles.img, {width:"70%"}]} source={require('../../assets/logos/linkedin-logo.png')}/>
            </View>
            <View style={[styles.container]}>
              <Image style={[styles.img, {width:"70%"}]} source={require('../../assets/logos/google-logo.png')}/>
            </View>
            <View style={[styles.container]}>
              <Image style={[styles.img, {width:"70%"}]} source={require('../../assets/logos/airbnb-logo.png')}/>
            </View>
            <View style={[styles.container]}>
              <Image style={[styles.img, {width:"70%"}]} source={require('../../assets/logos/facebook-logo.png')}/>
            </View>
          </View>
          <View style={[styles.container, styles.flexRow, {width: "90%", justifyContent: "space-between", alignItems:"center"}]}>
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
              onPress={() => navigation.navigate('HomeTabs')}
              >
              <Text style={[styles.text, {color:"white"}]}>Next</Text>
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SignIn;