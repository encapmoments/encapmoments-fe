import { Colors, Typography, Spacing, Fontsizes } from "../../styles/stylesIndex";
import { StyleSheet } from "react-native";

const SelectMissionStyles = (width, height) => StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.white,
        borderRadius: Spacing.lg,
        width: width * 0.74,
        height: height * 0.2,
        alignSelf: 'center',
        justifyContent: 'center',
        gap: height * 0.03,
    },
    missionSelect: {
        flexDirection: 'row',
        marginHorizontal: width * 0.04,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: height * 0.005,
    },
    missionText: {
        ...Typography.bamin1,
        fontSize: Fontsizes.xs,
        color: Colors.black,
        textAlign: 'left',
        flex: 1,
        marginRight: width * 0.03,
    },
    commonButton: {
        width: width * 0.2,
        height: height * 0.04,
        fontSize: Fontsizes.xs,
        flexShrink: 0,
    },
});

export default SelectMissionStyles;
