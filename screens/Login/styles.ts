import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../styles/colors";
import padding from "../../styles/padding";

export const styles = StyleSheet.create({ 
    container: { 
        flex: 1,
        justifyContent: 'center',
        ...padding.pl40,
        ...padding.pr40,
    },
    input: {
        ...padding.pl12,
        ...padding.pr12,
        ...padding.pt12,
        ...padding.pb12,
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: COLORS.primaryLight,
        color: COLORS.white,
    },
    error: {
        color: COLORS.dangerText,
    },
    title: {
        fontSize: SIZES.space40,
        fontWeight: 'bold',
        color: COLORS.white,
        alignSelf: 'center',
        marginBottom: SIZES.space40,
    }
});