import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';

import { StyleSheet } from 'react-native';

const getAlbumScreenStyles = (width, height) => StyleSheet.create({
    safeArea: {
        flex: 1,
    },
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
        fontSize: Fontsizes.mm,
        marginTop: height * 0.05,
        marginLeft: width * 0.05,
    },
    albumListsWrapper: {
        backgroundColor: Colors.basic,
        borderRadius: Spacing.lg,
        alignSelf:'center',
        width:width * 0.9,
        height: height * 0.9,
        marginTop: height * 0.01,
    },
    albumLists: {
        marginTop: -height * 0.02,
        borderRadius: Spacing.lg,

    },
    albumListsRowColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.02,
    },
    searchBar: {
        alignSelf: 'center',
        width: width * 0.9,
        backgroundColor: Colors.white,
        marginTop: height * 0.03,
        borderRadius: Spacing.lg,
        height: height * 0.08,
    },
    searchBarInput: {
        textAlignVertical: 'center', // Android 전용
        fontSize: Fontsizes.sm,
        paddingVertical: 0,
        includeFontPadding: false,
    },
    searchBarContent: {
        textAlignVertical: 'center', // Android에서는 무시됨
        alignItems: 'center',        // iOS 정렬 대응
        height: height * 0.06 * 0.8,
    },
});

export default getAlbumScreenStyles;

