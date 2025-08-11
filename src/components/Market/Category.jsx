import React, { useEffect, useState } from 'react';
import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import getCategoryStyles from './CategoryStyles';

const Category = ({ title }) => {
    const { width, height } = useWindowDimensions();
    const categoryStyles = getCategoryStyles(width, height);

    return (
        <TouchableOpacity style={categoryStyles.backgroundStyle}>
            <Text style={categoryStyles.categoryText}>{title}</Text>
        </TouchableOpacity>

    )
};

export default Category;