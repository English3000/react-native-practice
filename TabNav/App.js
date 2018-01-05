import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

const Welcome = () => <View><Text>Welcome!</Text></View>;
class Other extends React.Component {
  static navigationOptions = {tabBarLabel: 'Other', tabBarIcon: () => (
    <Text style={{color: 'blue'}}>-o-</Text>
  )};
  render() { return <View><Text>Other...</Text></View>; }
}

//https://reactnavigation.org/docs/navigators/tab#tabBarOptions-for-TabBarTop-default-tab-bar-on-Android
const Screens = TabNavigator({
  Home: { screen: Welcome,
          navigationOptions: { tabBarLabel: 'Welcome', tabBarIcon: () => (
            <Text style={{color: 'blue'}}>W</Text>
          )} },
  Other: { screen: Other }
}, {
  tabBarOptions: { activeTintColor: 'red', showIcon: true,
                   iconStyle: {height: 12, width: 20},
                   indicatorStyle: {backgroundColor: 'red'},
                   style: {backgroundColor: 'green', paddingTop: 20} }
});

export default class App extends React.Component {
  render() {
    return (
      <Screens/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
