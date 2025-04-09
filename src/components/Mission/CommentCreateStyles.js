import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CommentCreateStyles = StyleSheet.create({
    commentCreateWrapper: {
        backgroundColor: Colors.inputtext,
        width: width * 0.9,
        height: height * 0.1,
        alignSelf: 'center',
        marginTop: height * 0.02,
        borderRadius: Spacing.sm,
    },
});

export default CommentCreateStyles;
