import React from 'react';

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

function DetailsScreen({ route, navigation }) {
  
  // Demo: 路由時傳遞值
  let itemId = '';
  let otherParam = '';

  if (route && route.params) {
    itemId = route.params.itemId ? route.params.itemId : '';
    otherParam = route.params.otherParam ? route.params.otherParam : '';
  }

  // Demo: 透過路由取得，退出時，取得值
  let valueFromPost = '';
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Text>Details Screen</Text>

      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />

      <Button
        title="Go to Details with Data"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
            // Don't do this
            // (this is an anti-pattern. Data such as user objects should be in your global store instead of the navigation state. Otherwise you have the same data duplicated in multiple places.)
            user: {
              id: 'jane',
              firstName: 'Jane',
              lastName: 'Done',
              age: 25,
            },
            // A better way is to pass only the ID of the user in params:
            userId: 'jane',
          });
        }}
      />

      <Text>Get value: {route.params?.post}</Text>
      <Button
        title="Create post and Get Value"
        onPress={() => navigation.navigate('CreatePost')}
      />

      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      
    </View>
  );
}

export default DetailsScreen;