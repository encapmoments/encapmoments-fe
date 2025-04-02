import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import TabBarStyles from './TabBarStyles';


const TabBar = ({ navigation }) => {
    return (

        <View style={TabBarStyles.tabBar}>
            <View style={TabBarStyles.tabBarWrapper} />
            <View style={TabBarStyles.tabBarIcons}>
                <TouchableOpacity onPress={() => navigation.navigate('Mission')}>
                    <Image
                        style={TabBarStyles.tabBarMissionIcon}
                        source={require('../../assets/icons/plusIcon.png')}
                    />
                    <Text style={TabBarStyles.tabBarText}>미션</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Album')}>
                    <Image
                        style={TabBarStyles.tabBarMissionIcon}
                        source={require('../../assets/icons/plusIcon.png')}
                    />
                    <Text style={TabBarStyles.tabBarText}>앨범</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Image
                        style={TabBarStyles.tabBarMissionIcon}
                        source={require('../../assets/icons/plusIcon.png')}
                    />
                    <Text style={TabBarStyles.tabBarText}>프로필</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default TabBar;
