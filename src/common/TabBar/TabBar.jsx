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
                        source={require('../../assets/icons/home.png')}
                    />
                    <Text style={TabBarStyles.tabBarText}>미션</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Album')}>
                    <Image
                        style={TabBarStyles.tabBarMissionIcon}
                        source={require('../../assets/icons/calendar.png')}
                    />
                    <Text style={TabBarStyles.tabBarText}>앨범</Text>
                </TouchableOpacity>

                {/* TODO : 마켓 가는 아이콘 하나 추가해서 총 4개로 만들기 */}

                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image
                        style={TabBarStyles.tabBarMissionIcon}
                        source={require('../../assets/icons/profile.png')}
                    />
                    <Text style={TabBarStyles.tabBarText}>프로필</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default TabBar;
