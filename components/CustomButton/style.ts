import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../styles/colors";
import padding from "../../styles/padding";
const styles = StyleSheet.create({
    primaryBtn: {
        backgroundColor: COLORS.secondary,
        borderRadius: 4,
        ...padding.pt12,
        ...padding.pb12,
        ...padding.pl12,
        ...padding.pr12,
        alignItems: 'center',
    },
    text: {
        color: COLORS.darkText,
        fontSize: SIZES.space16,
        fontWeight: 'bold',
    }
});

export default styles;
