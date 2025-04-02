import { Colors, Typography } from '../../styles/stylesIndex';

import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const SearchBarStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.inputtextarea,
    },
});

export default SearchBarStyles;
