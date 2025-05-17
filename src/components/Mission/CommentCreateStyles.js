import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const CommentCreateStyles = StyleSheet.create({
    commentCreateWrapper: {
        backgroundColor: Colors.inputtext,
        width: width * 0.9,
        height: height * 0.1,
        alignSelf: 'center',
        marginTop: height * 0.02,
        borderRadius: Spacing.md,
    },
    commentCreateMember: {
        ...Typography.bamin1,
        color: Colors.white,
        fontSize: Fontsizes.sm,
        marginTop: height * 0.02,
        marginLeft: width * 0.02,
    },
    commentCreateDescription: {
        ...Typography.bamin1,
        color: Colors.white,
        fontSize: Fontsizes.sm,
        marginLeft: width * 0.02,
    },

});

export default CommentCreateStyles;
