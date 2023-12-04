import * as React from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import styles from '../styles';

const Landing = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.container, {width:"100%"}] }>
        <Image style={[styles.img]} resizeMode="contain" source={require('../../assets/logos/mersiv-logo-name.png')} />
      </View>
      <View style={[styles.container]}>
        <TouchableOpacity
          style={[styles.button, styles.RegisterButton]}
          title="Register"
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={[styles.text, {color:"white"}]}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.text}>OR</Text>
        <TouchableOpacity
          style={[styles.button, styles.SignInButton]}
          title="Sign In"
          onPress={() => navigation.navigate('Sign In')}
        >
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Landing;