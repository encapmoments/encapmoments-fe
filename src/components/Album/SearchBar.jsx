import React from 'react';
import { View, useWindowDimensions } from 'react-native';

import getSearchBarStyles from './SearchBarStyles';

const SearchBar = () => {
    const { width, height } = useWindowDimensions();
    const searchStyles = getSearchBarStyles(width, height);

    return (
        <View style={searchStyles.backgroundStyle}/>
    );
};

export default SearchBar;
