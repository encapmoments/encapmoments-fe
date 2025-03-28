import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/Login/SignUpScreen';
import FindPassWordScreen from '../screens/Login/FindPassWordScreen';
import SetProfileImageScreen from '../screens/Login/SetProfileImageScreen';
import MissionScreen from '../screens/Mission/MissionScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login"
                component={LoginScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
            <Stack.Screen name="Mission"
                component={MissionScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
            <Stack.Screen name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
            <Stack.Screen name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
            <Stack.Screen name="FindPW"
                component={FindPassWordScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
            <Stack.Screen name="SetProfileImage"
                component={SetProfileImageScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
