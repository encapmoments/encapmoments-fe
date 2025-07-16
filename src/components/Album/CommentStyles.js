import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CommentStyles = StyleSheet.create({
    commentWrapper: {
        backgroundColor: Colors.missions,
        width: width * 0.7,
        height: height * 0.12,
        marginLeft: width * 0.05,
        borderTopLeftRadius: Spacing.lg,
        borderTopRightRadius: Spacing.lg,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: Spacing.lg,
        marginTop: height * 0.02,
    },

    commentMember: {
        flexDirection: 'row',
    },


    commentMemberIconWrapper : {
        marginLeft: width * 0.05,
        marginTop: height * 0.01,
        width: width * 0.07,
        height: width * 0.08,
        borderRadius: Fontsizes.mm,
        backgroundColor: Colors.white,
        borderColor: Colors.white,
        borderWidth: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    commentMemberIcon: {
        width: width * 0.06,
        height: width * 0.06,
        resizeMode: 'cover',
    },
    commentMemberName: {
        ...Typography.bamin1,
        fontSize:Fontsizes.md,
        marginTop: height * 0.02,
        marginLeft: width * 0.02,
    },
    commentMemberComment: {
        color: Colors.black,
        ...Typography.bamin2,
        fontSize: Fontsizes.md,
        marginLeft: width * 0.055,
    },
});

export default CommentStyles;
