import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';
import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

const ProfileBoxStyles = StyleSheet.create({
    boxWrapper: {
        backgroundColor: Colors.white,
        borderRadius: Spacing.md,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: Spacing.xs,
        width: width * 0.8,
        height: height * 0.1,
        marginTop: height * 0.03,
    },
    boxText: {
        ...Typography.bamin2,
        fontSize: Fontsizes.md,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    arrow: {
        width: width * 0.05,
        height: width * 0.05,
        position: 'absolute',
        left: width * 0.7,
        justifyContent: 'center',
        marginTop: height * 0.008,
    },
});

export default ProfileBoxStyles;
