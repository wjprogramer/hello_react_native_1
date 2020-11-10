import React from 'react';

import {
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';

import {
  ListItem, Avatar,
} from 'react-native-elements';

import {
  IMG_BURGER_BIG_MAC,
  IMG_BURGER_DOUBLE_QUARTER,
  IMG_BURGER_QUARTER,
} from '../../../../assets';

function HamburgersScreen({ navigation }) {
  const burgers = [
    { id: 1, name: 'Big Mac', image: IMG_BURGER_BIG_MAC },
    { id: 2, name: 'Quarter Pounder®* with Cheese', image: IMG_BURGER_QUARTER },
    { id: 3, name: 'Double Quarter Pounder®* with Cheese', image: IMG_BURGER_DOUBLE_QUARTER }
  ];

  return (
    <View>
      <Text>Hamburgers Screen</Text>
      <FlatList
        data={burgers}
        renderItem={({item}) => <ListItem bottomDivider>
          <Image source={item.image} />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>}
      />
    </View>
  );
};

export default HamburgersScreen;