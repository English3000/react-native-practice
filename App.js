import React from 'react';
import Nav from './Nav';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
// ScrollView doesn't work as flexbox
export default class App extends React.Component {
  render() {
    return <Nav/>;
  }
}
