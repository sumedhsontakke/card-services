import { StyleSheet } from "react-native";
import { COLORS, fontColor, SIZES } from "../../../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: SIZES.space12
    },
    filterContainer: {
        width: "48%",
        zIndex: 1
    },
    filter: {
        borderWidth: 0,
        borderRadius: SIZES.space4,
        backgroundColor: COLORS.darkInput,
        ...fontColor.white,
    },
    textStyle: {
        ...fontColor.white,
    }
});

export default styles;