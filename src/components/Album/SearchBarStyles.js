import { Colors, Typography } from '../../styles/stylesIndex';

import { StyleSheet } from 'react-native';

const getSearchBarStyles = (width, height) => StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.inputtextarea,
    },
});

export default getSearchBarStyles;
