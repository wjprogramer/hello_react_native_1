import React from 'react';

import {
  View,
  Text,
  SectionList,
  Image,
  ScrollView,
} from 'react-native';

import {
  ListItem
} from 'react-native-elements';

import {
  noodelsList
} from './data';
import styles from './style';
import { IMG_NOODLES_LIST } from '../../../../assets';

function NoodlesScreen({ navigation }) {
  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: 20, margin: 8 }}>【懶人包 2020】台北十大精選牛肉麵。名店秘店都在這篇一網打盡</Text>
        {/* https://www.niniyeh.com/2020/03/top-10-beef-noodles-in-taipei.html */}

        <SectionList 
          renderItem={({item, index}) => 
            <>
              {item.map((e, i) => 
                <ListItem bottomDivider>
                  <Image
                    style={styles.cover} 
                    source={IMG_NOODLES_LIST[i % IMG_NOODLES_LIST.length]} 
                  />
                  <ListItem.Content>
                    <ListItem.Title>{e.name}</ListItem.Title>
                    <ListItem.Subtitle>{e.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>)
              }
            </>
          }
          renderSectionHeader={({section}) => <Text style={{ margin: 8 }}>{section.key}</Text>}
          sections={[ // homogeneous rendering between sections
            { data: [ noodelsList ], key: '牛肉麵' },
            // { data: [ noodelsList ], key: '牛肉麵 - 1' },
            // { data: [ noodelsList ], key: '牛肉麵 - 2' },
            // ...
          ]}
        />
      </View>
    </ScrollView>
  );
};

export default NoodlesScreen;