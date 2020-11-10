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
  ImageBackground,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  IMG_CHIHIRO_2,
  IMG_CHIHIRO_3,
} from '../../assets';

import style from './style'

class MessagesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {
        name: {
          value: 'Hello',
        }
      }
    };
  }

  updateName = (name) => {
    const { controls } = this.state;
    controls.name.value = name;
    this.setState({ controls });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground style={[style.center, { flex: 1 }]} source={IMG_CHIHIRO_2}>
          <Text style={style.textCenter}>{this.state.controls.name.value}</Text>
        </ImageBackground>
        <ImageBackground style={[style.center, { height: '50%' }]} source={IMG_CHIHIRO_3}>
          <TextInput 
            style={[ style.textCenter, style.textInput]}
            onChangeText={(text) => this.updateName(text)}
            value={this.state.controls.name.value}
          />
        </ImageBackground>
      </View>
    );
  }
}

export default MessagesScreen;