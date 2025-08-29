import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../styles/colors";

const styles = StyleSheet.create({ 
    container: {
        alignItems: "center",
    },
    text: {
        color: COLORS.secondary,
        fontWeight: "bold",
        fontSize: SIZES.space16,
    }
});

export default styles;