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
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
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
import FeedScreen from './src/navigation/Feed';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      {/*  
        Drawer: 

        - navigation.openDrawer();
        - navigation.closeDrawer();
        - navigation.toggleDrawer();

        背後做的事情:

        - navigation.dispatch(DrawerActions.openDrawer());
        - navigation.dispatch(DrawerActions.closeDrawer());
        - navigation.dispatch(DrawerActions.toggleDrawer());

        check drawer is open:

        import { useIsDrawerOpen } from '@react-navigation/drawer';
        const isDrawerOpen = useIsDrawerOpen();
      */}
      {/* <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Details" component={DetailsScreen} />
        </Drawer.Navigator>
      </NavigationContainer> */}
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
          
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              title: 'Overview',
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#bbb"
                />
              ), 
            }} />
          
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
          
          <Stack.Screen name="CreatePost" component={CreatePostScreen} options={({ route }) => ({ title: route.params.name })} />
          
          <Stack.Screen name="Profile" component={ProfileScreen} />

          <Stack.Screen name="Feed" component={FeedScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
