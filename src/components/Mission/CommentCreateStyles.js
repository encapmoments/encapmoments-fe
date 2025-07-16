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
        borderRadius: Spacing.lg,
        paddingHorizontal: width * 0.03,
        paddingVertical: height * 0.01,
    },
    memberSelectButton: {
        marginBottom: height * 0.005,
    },
    commentCreateMember: {
        ...Typography.bamin1,
        color: Colors.white,
        fontSize: Fontsizes.sm,
        marginTop: height * 0.01,
    },
    commentCreateDescription: {
        ...Typography.bamin1,
        color: Colors.white,
        fontSize: Fontsizes.sm,
        flex: 1,
        textAlignVertical: 'top',
        paddingTop: height * 0.005,
        includeFontPadding: false,
    },
    // 모달 스타일
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: width * 0.05,
        width: width * 0.7,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    modalTitle: {
        ...Typography.bamin1,
        fontSize: Fontsizes.mdm,
        textAlign: 'center',
        marginBottom: height * 0.02,
        color: '#333',
    },
    memberOption: {
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.04,
        borderRadius: 10,
        marginVertical: height * 0.005,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
    },
    selectedMemberOption: {
        backgroundColor: Colors.orange,
    },
    memberOptionText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.sm,
        color: '#333',
    },
    selectedMemberOptionText: {
        color: 'white',
    },
    cancelButton: {
        marginTop: height * 0.02,
        paddingVertical: height * 0.015,
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        alignItems: 'center',
    },
    cancelButtonText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.sm,
        color: '#666',
    },
});

export default CommentCreateStyles;
