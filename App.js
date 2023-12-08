import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HostCurrent, Post, VerificationConfirmation, Verification, ChatRequest, ChatLanding, MyProfile, DiscoverFriends, CurrentFriends, CompletedExperience, FriendProfile,  Upcoming, Completed, Landing, SignIn, SignUp, CommunityNorms, ExperienceSignup, ExperienceConfirmation, ProfileDetails, ProfileTags, LocationDetails, Confirmation, Welcome, Register, WelcomeBack, Cooking1, Cooking2, CookingConfirmation, Home, ExperienceCancelation, ExperienceCancelationConfirmation , CurFriendProfile, ChatConversation, Hooray} from './src/task1';
import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout, Text, IconRegistry } from "@ui-kitten/components"
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HistoryTab = createMaterialTopTabNavigator();
const FriendsTab = createMaterialTopTabNavigator();
const ChatsTab = createMaterialTopTabNavigator();
const HostTab = createMaterialTopTabNavigator();

const HostTabs = () => {
  return (
    <HostTab.Navigator 
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: '#E15F41',
      labelStyle: {
        marginTop: 95, // Adjust the top margin to move the labels down
      },
      indicatorStyle: {
        height: null,
        top: '60%',
        bottom: '10%',
        width: '28%',
        left: '2.5%',
        borderRadius: 100,
        backgroundColor: '#E15F41',
      },
      style: {
      alignSelf: "center",
      width: '100%',
      borderRadius: 35,
      borderColor: "blue",
      backgroundColor: "white",
      height: 150,
      },
      tabStyle: {
          borderRadius: 100,
      },
    }}
    >
      <HostTab.Screen name="Current" component={HostCurrent} />
      <HostTab.Screen name="Upcoming" component={ChatRequest} />
      <HostTab.Screen name="Past" component={ChatRequest} />
    </HostTab.Navigator>
  );
}


const ChatsTabs = () => {
  return (
    <ChatsTab.Navigator 
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: '#E15F41',
      labelStyle: {
        marginTop: 95, // Adjust the top margin to move the labels down
      },
      indicatorStyle: {
        height: null,
        top: '60%',
        bottom: '10%',
        width: '45%',
        left: '2.5%',
        borderRadius: 100,
        backgroundColor: '#E15F41',
      },
      style: {
      alignSelf: "center",
      width: '100%',
      borderRadius: 35,
      borderColor: "blue",
      backgroundColor: "white",
      height: 150,
      },
      tabStyle: {
          borderRadius: 100,
      },
    }}
    >
      <ChatsTab.Screen name="Friends" component={ChatLanding} />
      <ChatsTab.Screen name="Requests" component={ChatRequest} />
    </ChatsTab.Navigator>
  );
}

const FriendsTabs = () => {
  return (
    <FriendsTab.Navigator 
    tabBarOptions={{
      activeTintColor: '#E15F41',
      inactiveTintColor: 'white',
      labelStyle: {
        marginTop: 95, // Adjust the top margin to move the labels down
      },
      indicatorStyle: {
        height: null,
        top: '60%',
        bottom: '10%',
        width: '45%',
        left: '2.5%',
        borderRadius: 100,
        backgroundColor: 'white',
      },
      style: {
      alignSelf: "center",
      width: '100%',
      borderRadius: 35,
      borderColor: "blue",
      backgroundColor: "#E15F41",
      height: 150,
  },
  tabStyle: {
      borderRadius: 100,
  },
    }}
    >
      <FriendsTab.Screen name="Current Friends" component={CurrentFriends} />
      <FriendsTab.Screen name="Discover Friends" component={DiscoverFriends} />
    </FriendsTab.Navigator>
  );
}


const HistoryTabs = () => {
  return (
    <HistoryTab.Navigator 
    tabBarOptions={{
      activeTintColor: '#E15F41',
      inactiveTintColor: 'white',
      labelStyle: {
        marginTop: 95, // Adjust the top margin to move the labels down
      },
      indicatorStyle: {
        height: null,
        top: '60%',
        bottom: '10%',
        width: '45%',
        left: '2.5%',
        borderRadius: 100,
        backgroundColor: 'white',
      },
      style: {
      alignSelf: "center",
      width: '100%',
      borderRadius: 35,
      borderColor: "blue",
      backgroundColor: "#E15F41",
      height: 150,
  },
  tabStyle: {
      borderRadius: 100,
  },
    }}
    >
      <HistoryTab.Screen name="Upcoming" component={Upcoming} />
      <HistoryTab.Screen name="Completed" component={Completed} />
    </HistoryTab.Navigator>
  );
}

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
      <Tab.Screen name="History" component={HistoryTabs} options={{ headerShown: false }}/>
      <Tab.Screen name="Chat" component={ChatsTabs} options={{ headerShown: false }}/>
      <Tab.Screen name="Friends" component={FriendsTabs} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={MyProfile} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

const HostHomeTabs = () => {
  return (
    
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        
        if (route.name === 'Host Home') {
          iconName = focused ? require('./assets/elems/active-home.png') : require('./assets/elems/inactive-home.png');
        } else if (route.name === 'Post') {
          iconName = focused ? require('./assets/elems/active-post.png') : require('./assets/elems/inactive-post.png');
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
      <Tab.Screen name="Host Home" component={HostTabs} options={{ headerShown: false }}/>
      <Tab.Screen name="Post" component={Post} options={{ headerShown: false }}/>
      <Tab.Screen name="Chat" component={ChatsTabs} options={{ headerShown: false }}/>
      <Tab.Screen name="Friends" component={FriendsTabs} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={MyProfile} options={{ headerShown: false }}/>
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
            <Stack.Screen name="Landing" component={Landing}/>
            <Stack.Screen name="HostHomeTabs" component={HostHomeTabs} />
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="VerificationConfirmation" component={VerificationConfirmation}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Sign In" component={SignIn}/>
            <Stack.Screen name="Sign Up" component={SignUp}/>
            <Stack.Screen name="Community Norms" component={CommunityNorms}/>
            <Stack.Screen name="Profile Details" component={ProfileDetails}/>
            <Stack.Screen name="Profile Tags" component={ProfileTags}/>
            <Stack.Screen name="Location Details" component={LocationDetails}/>
            <Stack.Screen name="Confirmation" component={Confirmation}/>
            <Stack.Screen name="Post" component={Post}/>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Hooray" component={Hooray}/>
            <Stack.Screen name="Welcome Back" component={WelcomeBack}/>
            <Stack.Screen name="Experience Signup" component={ExperienceSignup} />
            <Stack.Screen name="Experience Confirmation" component={ExperienceConfirmation} />
            <Stack.Screen name="Experience Cancelation" component={ExperienceCancelation} />
            <Stack.Screen name="Experience Cancelation Confirmation" component={ExperienceCancelationConfirmation} />
            <Stack.Screen name="Completed Experience" component={CompletedExperience} />
            <Stack.Screen name="Friend Profile" component={FriendProfile} />
            <Stack.Screen name="Current Friend Profile" component={CurFriendProfile} />
            <Stack.Screen name="Chat Conversation" component={ChatConversation} />
            <Stack.Screen name="Verification" component={Verification}/>
            <Stack.Screen name="Chat Tabs" component={ChatsTabs}/>
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
