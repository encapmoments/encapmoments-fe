import { Colors, Fontsizes, Spacing, Typography } from "../../styles/stylesIndex";
import { StyleSheet } from "react-native";

const getUpdateModalStyles = (width, height) => StyleSheet.create({
    modalContainer: {
        backgroundColor: 'rgba(96, 64, 41, 0.3)',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        overflow: 'hidden',
    },
    editButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#B8A082',
    },
    deleteButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editText: {
        fontSize: width * 0.035,
        fontFamily: 'BMJUA_ttf',
        color: '#1B1E28',
    },
    deleteText: {
        fontSize: width * 0.035,
        fontFamily: 'BMJUA_ttf',
        color: '#F50000',
    },
});

export default getUpdateModalStyles;
