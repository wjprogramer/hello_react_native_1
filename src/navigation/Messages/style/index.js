import React from 'react';

import {
  StyleSheet,
  Platform,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const style = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    color: '#fff',
    backgroundColor: 'rgba(50,50,50,0.3)',
    fontSize: 40,
    textAlign: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'rgba(50,50,50,0.3)',
      },
      android: {
        backgroundColor: 'rgba(50,50,50,0.3)',
      },
    })
  },
  textInput: {
    height: 40, 
    borderColor: 'gray',
    backgroundColor: Colors.white,
    minWidth: 200,
    maxWidth: "80%",
    borderWidth: 1,
    color: Colors.black,
    fontSize: 14,
  }
});

export default style; 