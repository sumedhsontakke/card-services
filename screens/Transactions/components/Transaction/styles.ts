import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../styles/colors";
import margin from "../../../../styles/margin";
import padding from "../../../../styles/padding";

const styles = StyleSheet.create({ 
    container: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.darkBorder,
        ...padding.pb16
    },
    circle: {
        width: SIZES.space24,
        height: SIZES.space24,
        backgroundColor: COLORS.darkPlaceholderColor,
        borderRadius: "100%",
        alignItems: "center",
        justifyContent: "center",
        ...margin.mb4
    },
    date: {
        color: COLORS.darkPlaceholderColor
    },
    txnDetails: {
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        ...margin.ml8
    },
    amountPositive: {
       color: COLORS.secondary
    }
});

export default styles;