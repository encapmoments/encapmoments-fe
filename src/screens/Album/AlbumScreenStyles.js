import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';

import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const AlbumScreenStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.basic,
        flex: 1,
    },

    backArrow: {
        width: width * 0.12,
        height: width * 0.12,
        position: 'absolute',
        top: height * 0.03,
        left: width * 0.03,
    },

    touchBackArrow: {
        position: 'absolute',
        top: height * 0.03,
        left: width * 0.03,
        width: width * 0.12,
        height: width * 0.12,
        zIndex: 10,
    },
    albumImage: {
        width: width * 1.0,
        height: height * 0.55,

    },
    albumInfo: {
        height:height * 0.7,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    albumText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.lg,
        marginTop: height * 0.03,
        marginLeft: width * 0.05,
    },
    albumListsWrapper: {
        backgroundColor: Colors.basic,
        borderRadius: Spacing.lg,
        alignSelf:'center',
        width:width * 0.8,
        height: height * 0.5,
        marginTop: height * 0.02,
    },
    albumLists: {
        marginTop: height * 0.02,
        borderRadius: Spacing.md,

    },
    albumListsRowColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.02,
    },
});

export default AlbumScreenStyles;

