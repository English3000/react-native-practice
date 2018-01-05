import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const MenuButton = ({ navigation }) => (
  <Text style={{width: 50, paddingTop: 30}} onPress={() => navigation.navigate('DrawerToggle')} title="Open Drawer">
    <Ionicons name={'md-menu'} size={24} style={{color: 'black'}}/>
  </Text>);

const HomeScreen = ({ navigation }) => (<View>
  <MenuButton navigation={navigation}/>
  <Text style={{width: 50}}>Home</Text>
  <ScrollView>
    <Text style={{fontSize: 100}}>Open up App.js to start working on your app!</Text>
    <Text style={{fontSize: 100}}>Changes you make will automatically reload.</Text>
    <Text style={{fontSize: 100}}>Shake your phone to open the developer menu.</Text>
  </ScrollView>
</View>);
const ProfileScreen = ({ navigation }) => (<View style={{paddingTop: 30}}>
  <MenuButton navigation={navigation}/>
  <Text style={{width: 50}}>Profile</Text>
</View>);

export default DrawerNavigator({
  Home: { screen: HomeScreen,
          navigationOptions: { drawerLabel: 'Home',
                               drawerIcon: ({ tintColor, focused }) => (
            <Ionicons name={'md-home'} size={20} style={{color: tintColor}}/> )}
  }, Profile: { screen: ProfileScreen,
                navigationOptions: { drawerLabel: 'Profile',
                                     drawerIcon: ({ tintColor, focused }) => (
                  <Ionicons name={'md-person'} size={20} style={{color: tintColor}}/> )}
  }
});

const styles = StyleSheet.create({
  container: { flex: 1,
               backgroundColor: '#fff',
               alignItems: 'center',
               justifyContent: 'center' },
  screen: { flex: 1,
            flexDirection: 'row',
            paddingTop: 30,
            height: 75,
            backgroundColor: 'red' },
});
