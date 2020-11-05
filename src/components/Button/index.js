import React, { Component } from 'react';
import { Button } from 'react-native';

export default class CustomButton extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'red'}}>
        <Button onPress={this.props.onPress} />
      </View>
    );
  }
};