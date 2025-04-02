import { Colors, Typography } from '../../styles/stylesIndex';

import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const CardStyles = StyleSheet.create({
    backgroundStyle: {
        paddingLeft: width * 0.02,
        paddingRight: width * 0.02,
        backgroundColor: Colors.white,
        width: width * 0.3,
        borderRadius: 14,
        height: height * 0.25,
    },
    texts: {
        ...Typography.bamin2,
        fontSize: 11,
        textAlign: 'left',
        marginLeft: width * 0.03,
    },
    albumImage: {
        marginTop : height * 0.02,
        width : width * 0.2,
        height : height * 0.12,
        alignSelf: 'center',
        borderRadius: 14,
        resizeMode: 'cover',
    },
    locationRow: {
        flexDirection: 'row',
    },
    locationImage: {
        width: width * 0.04,
        height: width * 0.04,
        marginLeft: width * 0.025,

    },
    locationText: {
        color: Colors.graytext,
        ...Typography.bamin1,
        fontSize: 11,
        marginLeft: width * 0.01,
    },
    tagText: {
        color: Colors.graytext,
        ...Typography.bamin1,
        fontSize: 11,
        marginLeft: width * 0.025,
        marginTop: height * 0.01,
    },
});

export default CardStyles;
