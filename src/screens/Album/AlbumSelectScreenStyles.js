import { Colors, Typography } from '../../styles/stylesIndex';

import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const AlbumSelectScreenStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.basic,
        flex: 1,
    },
});

export default AlbumSelectScreenStyles;
