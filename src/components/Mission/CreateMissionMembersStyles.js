import { Colors, Typography, Spacing, Fontsizes } from '../../styles/stylesIndex';
import { StyleSheet } from 'react-native';

const getCreateMissionMembersStyles = (width, height) => StyleSheet.create({
    wrapper: {
        paddingVertical: height * 0.01,
    },
    backgroundStyle: {
        backgroundColor: Colors.white,
        width: width * 0.7,
        padding: Spacing.xs,
        borderRadius: Spacing.lg,
        marginHorizontal: width * 0.05,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.01,
    },
    memberText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.md,
        color: Colors.black,
        marginRight: width * 0.02,
        marginLeft: width * 0.02,
        marginTop: height * 0.002,
    },
    memberAge: {
        ...Typography.bamin2,
        fontSize: Fontsizes.md,
        color: Colors.black,
        borderColor: Colors.gray,
        width: width * 0.2,
        marginRight: width * 0.02,
        marginTop: -height * 0.01,

    },
    memberSex: {
        width: width * 0.15,
        height: height * 0.04,
        backgroundColor: Colors.button,
        borderRadius: Spacing.sm,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: width * 0.02,
    },
    memberSexText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.sm,
        color: Colors.white,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: height * 0.006,
        marginLeft: width * 0.3,
    },
    controlButton: {
        ...Typography.bamin1,
        backgroundColor: Colors.button,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.005,
        borderRadius: Spacing.sm,
        marginHorizontal: width * 0.02,
        marginTop: height * 0.01,
    },
    controlButtonText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.sm,
        color: Colors.white,
    },
    selectedSex: {
        backgroundColor: Colors.orange, // 선택된 버튼 강조색
    },

});


export default getCreateMissionMembersStyles;
