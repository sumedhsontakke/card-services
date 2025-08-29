import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

const common = StyleSheet.create({
    darkBackground: {
        backgroundColor: COLORS.backgroundDark
    },
    row: {
        flexDirection: "row"
    }
})

export default common;