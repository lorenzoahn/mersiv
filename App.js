import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { History, Landing, SignIn, SignUp, CommunityNorms, ExperienceSignup, ExperienceConfirmation, ProfileDetails, ProfileTags, LocationDetails, Confirmation, Welcome, Register, WelcomeBack, Cooking1, Cooking2, CookingConfirmation, Home } from './src/task1';
import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout, Text, IconRegistry } from "@ui-kitten/components"
import { EvaIconsPack } from '@ui-kitten/eva-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
  
        if (route.name === 'Home') {
          iconName = focused ? require('./assets/elems/active-home.png') : require('./assets/elems/inactive-home.png');
        } else if (route.name === 'History') {
          iconName = focused ? require('./assets/elems/active-history.png') : require('./assets/elems/inactive-history.png');
        } else if (route.name === 'Chat') {
          iconName = focused ? require('./assets/elems/active-chat.png') : require('./assets/elems/inactive-chat.png');
        } else if (route.name === 'Friends') {
          iconName = focused ? require('./assets/elems/active-friends.png') : require('./assets/elems/inactive-friends.png');
        } else if (route.name === 'Profile') {
          iconName = focused ? require('./assets/elems/active-profile.png') : require('./assets/elems/inactive-profile.png');
        }
  
        // Return the image component with tag underneath
        return (
          <View>
            <Image
              source={iconName}
              style={{ width: 50, height: 50, resizeMode: 'contain' }}
            />
          </View>
        );
      },
      tabBarStyle: {
        borderTopWidth: 1.5,
        borderTopColor: 'black',
        height: 120
      }
    })}
    tabBarOptions={{
      activeTintColor: '#E15F41',
      inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="History" component={History} options={{ headerShown: false }}/>
      {/* <Tab.Screen name="Chat" component={Chat} options={{ headerShown: false }}/> */}
      {/* <Tab.Screen name="Friends" component={Friends} options={{ headerShown: false }}/> */}
      {/* <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/> */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="Experience Signup" component={ExperienceSignup} />
            <Stack.Screen name="Experience Confirmation" component={ExperienceConfirmation} />
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
