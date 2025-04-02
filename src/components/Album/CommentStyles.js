import { Colors, Typography } from '../../styles/stylesIndex';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CommentStyles = StyleSheet.create({
    commentWrapper: {
        backgroundColor: Colors.missions,
        width: width * 0.7,
        height: height * 0.15,
        marginLeft: width * 0.05,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 30,
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
        borderRadius: 18,
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
        fontSize:14,
        marginTop: height * 0.02,
        marginLeft: width * 0.02,
    },
    commentMemberComment: {
        color: Colors.black,
        ...Typography.bamin2,
        fontSize: 12,
        marginLeft: width * 0.055,
    },
});

export default CommentStyles;
