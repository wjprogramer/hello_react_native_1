import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Noodles from './components/Noodles';
import Hamburgers from './components/Hamburgers';

const Tab = createBottomTabNavigator();

function FeedScreen({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Noodles" component={Noodles} />
      <Tab.Screen name="Hamburgers" component={Hamburgers} />
    </Tab.Navigator>
  );
};

export default FeedScreen;