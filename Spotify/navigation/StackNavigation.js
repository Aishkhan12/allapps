import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import Screens from '../screens/Screens';
import SignupScreen from '../screens/SignupScreen';
import TabNavigation from './TabNavigation';
import AlbumScreens from '../authScreen/AlbumScreen/AlbumScreens';
const Stack = createStackNavigator();
function StackNavigation(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Screen" component={Screens} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Home" component={TabNavigation} />
            <Stack.Screen name="Album" component={AlbumScreens} />
        </Stack.Navigator>
    );
}

export default StackNavigation;