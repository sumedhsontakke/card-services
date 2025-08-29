import { StyleSheet } from "react-native";
import { COLORS, fontColor, SIZES } from "../../styles/colors";
import padding from "../../styles/padding";

const styles = StyleSheet.create({ 
    container: {
        ...padding.pb40
    },
    input: {
        height: SIZES.space36,
        backgroundColor: COLORS.darkInput,
        borderRadius: SIZES.space4,
        ...fontColor.white,
        ...padding.pl36,
    },
    icon: {
        position: "absolute",
        left: SIZES.space8,
        zIndex: 1,
        top: SIZES.space8
    },
    closeIcon: {
        position: "absolute",
        right: SIZES.space8,
        zIndex: 1,
        top: SIZES.space8
    },
    addIcon: {
        position: "absolute",
        right: SIZES.space16,
        zIndex: 1,
        top: SIZES.space16
    },
    fixedHeader: {
        position: "static",
    }
});

export default styles;