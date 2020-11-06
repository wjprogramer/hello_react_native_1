/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './src/navigation/Home';
import DetailsScreen from './src/navigation/Details';
import CreatePostScreen from './src/navigation/CreatePost';
import ProfileScreen from './src/navigation/Profile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
          
          <Stack.Screen name="Details" 
            component={DetailsScreen} 
            initialParams={{ itemId: 42 }}
            options={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} 
          />
          
          {/* 改變 header 名稱 */}
          <Stack.Screen name="CreatePost" component={CreatePostScreen} options={({ route }) => ({ title: route.params.name })} />
          
          <Stack.Screen name="Profile" component={ProfileScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
