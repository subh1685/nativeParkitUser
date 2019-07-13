import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';

export default class Profile extends Component {
  state={
    uri:'https://bootdey.com/img/Content/avatar/avatar6.png'
  }
  componentDidMount(){
    Linking.openURL("mailto:shubhamsngh067@gmail.com");
    this.props.navigation.navigate('Home')
  }


  render() {
    return (
      <View style={{marginTop:30}}></View>
    );
  }
}
