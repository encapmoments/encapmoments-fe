import { StyleSheet } from "react-native";
import { Colors, Typography, Spacing, Fontsizes } from "../../styles/stylesIndex";

const MemberStyles = (width, height) => StyleSheet.create({
    memberWrapper: {
        width: width * 0.25,
        aspectRatio: 1,
        borderRadius: Spacing.sm,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: width * 0.02,
        padding: width * 0.02,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    memberWrapperSelected: {
        borderColor: Colors.black,
        backgroundColor: Colors.white,
        opacity: 0.7,
    },
    memberImageContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: height * 0.01,
    },
    memberImg: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: width * 0.075,
        backgroundColor: '#f0f0f0',
    },
    memberText: {
        ...Typography.bamin1,
        color: Colors.black,
        fontSize: Fontsizes.md,
        textAlign: 'center',
        alignSelf: 'center',
    },
});

export default MemberStyles;
