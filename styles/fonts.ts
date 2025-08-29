import { StyleSheet } from "react-native";
import { SIZES } from "./colors";

const font = StyleSheet.create({
    size8: {
        fontSize: SIZES.space8
    },
    size12: {
        fontSize: SIZES.space12
    },
    size16: {
        fontSize: SIZES.space16
    },
    size20: {
        fontSize: SIZES.space20
    },
    bold: {
        fontWeight: "bold"
    }
});

export default font;