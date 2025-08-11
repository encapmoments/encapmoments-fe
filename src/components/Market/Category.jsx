import React, { useEffect, useState } from 'react';
import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import getCategoryStyles from './CategoryStyles';

const Category = ({ title, onPress }) => {
    const { width, height } = useWindowDimensions();
    const categoryStyles = getCategoryStyles(width, height);

    return (
        <TouchableOpacity 
            style={categoryStyles.backgroundStyle}
            onPress={onPress}
        >
            <Text style={categoryStyles.categoryText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Category;
