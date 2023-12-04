import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing, SignIn, SignUp, CommunityNorms, ProfileDetails, ProfileTags, LocationDetails, Confirmation, Welcome, Register, WelcomeBack, Cooking1, Cooking2, CookingConfirmation, Home } from './src/task1';
import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout, Text, IconRegistry } from "@ui-kitten/components"
import { EvaIconsPack } from '@ui-kitten/eva-icons';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Landing" component={Landing}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Sign In" component={SignIn}/>
            <Stack.Screen name="Sign Up" component={SignUp}/>
            <Stack.Screen name="Community Norms" component={CommunityNorms}/>
            <Stack.Screen name="Profile Details" component={ProfileDetails}/>
            <Stack.Screen name="Profile Tags" component={ProfileTags}/>
            <Stack.Screen name="Location Details" component={LocationDetails}/>
            <Stack.Screen name="Confirmation" component={Confirmation}/>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Welcome Back" component={WelcomeBack}/>

            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Cooking1" component={Cooking1}/>
            <Stack.Screen name="Cooking2" component={Cooking2}/>
            <Stack.Screen name="Cooking Confirmation" component={CookingConfirmation}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
