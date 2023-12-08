import * as React from 'react';
import { ScrollView, FlatList, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, Platform, PermissionsAndroid, Pressable, KeyboardAvoidingView } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { Text, Button, IndexPath, MenuItem, OverflowMenu, Input, SelectItem } from '@ui-kitten/components';
import { CommonActions } from '@react-navigation/native';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
import {Experiences, Users} from './data.js';

const ChatConversation = ({route, navigation}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messageInputRef = React.useRef();

  let user;
  if (route?.params) {
    user = route.params.user;
  }

  useEffect(() => {
    // Send "hello" message when component mounts
    const initialMessage = {
      _id: messages.length + 1,
      text: 'hello',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    };
    setMessages(prevMessages => [...prevMessages, initialMessage]);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts


  const onSend = useCallback(() => {
    const newMessage = {
      _id: messages.length + 1,
      text: message,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'User',
        avatar: 'https://placeimg.com/140/140/any',
      },
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessage('');
    
    const responseMessage = {
      _id: messages.length + 2,
      text: message, // Use the same message as the user
      createdAt: new Date(),
      user: {
        _id: 2, // Assuming the other user's ID is 2
        name: 'React Native', // Replace with the other user's name
        avatar: 'https://placeimg.com/140/140/any', // Replace with the other user's avatar
      },
    };
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, responseMessage]);
    }, 1000);
  }, [message, messages])
  return(
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{ alignItems: "center", flexDirection: 'column', display: 'flex', width: "100%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        <SafeAreaView style={{ alignItems: "center", flexDirection: 'column', display: 'flex', width: "100%", justifyContent: 'space-between', alignItems: 'center', height: "100%"}}>
          <View style={[styles.flexRow, {width: "100%", justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 10, marginBottom: 10}]}>
            <TouchableOpacity onPress={() =>navigation.goBack()} style={{ width: 40, aspectRatio: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../../assets/elems/back-arrow-icon.png')} style={{borderRadius:10000, width: 30, height: 30, resizeMode:'contain'}}/>
            </TouchableOpacity>
            <Image source={Users[user].image} style={{borderRadius:10000, width: 70, aspectRatio:1, resizeMode:'contain', marginHorizontal: 20}}/>
            <Text style={[styles.experienceTitle, {fontSize:25, fontWeight:'bold', textAlign: 'center', width: 'auto', marginHorizontal: 20}]}>{user}</Text>
            <TouchableOpacity style={{ width: 50, aspectRatio: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 30}}>
              <Image source={require('../../assets/elems/phone-icon.png')} style={{borderRadius:10000, width: 50, height: 50, resizeMode:'contain'}}/>
            </TouchableOpacity>
            <View style={{backgroundColor: '#14FF00', borderRadius: 10000, width: 30, aspectRatio: 1, position: 'absolute', bottom:0, left: 120}}/>
          </View>
          <View style={{ height: 2, backgroundColor: '#E1AE41', width: '100%'}} />
          
          <FlatList
            data={messages}
            keyExtractor={item => item._id.toString()}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5, justifyContent: item.user._id === 1 ? 'flex-end' : 'flex-start' }}>
                {item.user._id !== 1 && (
                  <Image source={Users[item.user._id === 1 ? 'Lorenzo' : user].image} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} />
                )}
                <View style={{ backgroundColor: item.user._id === 1 ? '#4169E1' : '#E1AE41', padding: 10, borderRadius: 10, maxWidth: 200 }}>
                  <Text style={{ color: item.user._id === 1 ? 'white' : 'black' }}>{item.text}</Text>
                </View>
                {item.user._id === 1 && (
                  <Image source={Users[item.user._id === 1 ? 'Lorenzo' : user].image} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }} />
                )}
              </View>
            )}
            style={{ width: '100%', paddingHorizontal: 10 , height: '70%',flex: 1, flexGrow: 1 }}
          />

          <View style={[styles.flexRow, {width: "100%", justifyContent: 'space-between', alignItems: 'flex-start', paddingHorizontal: 10, bottom: 0,  backgroundColor:'white', height: 'auto'}]}>
              <Input
                ref={messageInputRef}
                value={message}
                placeholder='Message'
                onChangeText={nextValue => setMessage(nextValue)}
                style={{width:"70%", borderWidth: 1, borderColor: 'black', borderRadius: 15, height: 50, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 5}}
                textStyle={{height:40, color: 'grey'}}
                />
            <TouchableOpacity style={{ width: 50, aspectRatio: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../../assets/elems/mic-icon.png')} style={{ width: 40, height: 40, resizeMode:'contain'}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSend} style={{ width: 50, aspectRatio: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../../assets/elems/send-icon.png')} style={{ width: 40, height: 40, resizeMode:'contain'}}/>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
}

export default ChatConversation




