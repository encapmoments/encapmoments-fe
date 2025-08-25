import { StyleSheet } from "react-native";
import { Colors, Typography, Spacing, Fontsizes } from "../../styles/stylesIndex";

const SelectMemberStyles = (width, height) => StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        paddingVertical: height * 0.01,
    },
    membersWrapper: {
        flexGrow: 0,
    },
    membersContainer: {
        paddingHorizontal: width * 0.02,
        alignItems: 'center',
    },
});

export default SelectMemberStyles;
