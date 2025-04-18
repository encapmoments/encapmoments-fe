import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/Login/SignUpScreen';
import FindPassWordScreen from '../screens/Login/FindPassWordScreen';
import SetProfileImageScreen from '../screens/Login/SetProfileImageScreen';
import MissionScreen from '../screens/Mission/MissionScreen';
import MissionCreateScreen from '../screens/Mission/MissionCreateScreen';
import MissionSelectScreen from '../screens/Mission/MissionSelectScreen';
import AlbumScreen from '../screens/Album/AlbumScreen';
import AlbumSelectScreen from '../screens/Album/AlbumSelectScreen';
import MissionPostScreen from '../screens/Mission/MissionPostScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ProfileAccountScreen from '../screens/Profile/ProfileAccountScreen';
import ProfileSetMemberScreen from '../screens/Profile/ProfileSetMemberScreen';
// import ProfileMissionScreen from '../screens/Profile/ProfileMissionScreen';


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
            <Stack.Screen name="MissionCreate"
                component={MissionCreateScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
            <Stack.Screen name="MissionSelect"
                component={MissionSelectScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
            <Stack.Screen name="MissionPost"
                component={MissionPostScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
            <Stack.Screen name="Album"
                component={AlbumScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
            <Stack.Screen name="AlbumSelect"
                component={AlbumSelectScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
             <Stack.Screen name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
            <Stack.Screen name="ProfileAccount"
                component={ProfileAccountScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
            {/* <Stack.Screen name="ProfileMission"
                component={ProfileMissionScreen}
                options={{ headerShown: false, animation: 'none'}}
            /> */}
             <Stack.Screen name="ProfileSetMember"
                component={ProfileSetMemberScreen}
                options={{ headerShown: false, animation: 'none'}}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
