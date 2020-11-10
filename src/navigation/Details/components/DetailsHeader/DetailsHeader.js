import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { IMG_CHIHIRO_1 } from '../../../../assets';

function DetailsHeader() {
  return (
    <>
      {/* 使用 uri 一定要加上長寬 */}
      <Image 
        style={{ width: '100%', height: 200 }}
        source={{ uri: 'http://lorempixel.com/1920/1920/cats' }}
      />
      {/* 使用本地圖片則不用強制加上長寬 */}
      <Image 
        style={{ width: '100%', height: 200 }}
        source={ IMG_CHIHIRO_1 }
      />
    </>
  );
}

export default DetailsHeader;