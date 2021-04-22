import React from 'react';
import { Text,StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import HomeScreen from '../authScreen/HomeScreen';
import Search from '../authScreen/Search';
import Library from '../authScreen/Library';
import Spotify from '../authScreen/Spotify';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: '#000d',
        activeBackgroundColor: '#000c',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: () => (
            <Text style={styles.title}>Home</Text>
          ),
          tabBarIcon: () => (
            <Icon name="home" type="font-awesome" color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: () => (
            <Text style={styles.title}>Search</Text>
          ),
          tabBarIcon: () => (
            <Icon name="search" type="font-awesome" color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: () => (
            <Text style={styles.title}>Your Library</Text>
          ),
          tabBarIcon: () => (
            <Icon name="photo-video" type="font-awesome-5" color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Spotify"
        component={Spotify}
        options={{
          tabBarLabel: () => (
            <Text style={styles.title}>Spotify</Text>
          ),
          tabBarIcon: () => (
            <Icon name="spotify" type="font-awesome-5" color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigation;
const styles = StyleSheet.create({
  title:{
    color: 'white',
    fontSize: 12,
    fontFamily: 'arial',
    fontWeight: 'bold'
  }
})