import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../styles/colors";
import padding from "../../../../styles/padding";

const styles = StyleSheet.create({ 
    accountContainer: {
        ...padding.pb16,
        ...padding.pt16,
        ...padding.pr16,
        ...padding.pl16,
    },
    title: {
        color: COLORS.white,
        fontWeight: "bold"
    },
    cardContainer: {
        backgroundColor: COLORS.primaryLight,
        ...padding.pb16,
        ...padding.pt16,
        ...padding.pr16,
        ...padding.pl16,
        minHeight: 100,
        borderTopRightRadius: SIZES.space4,
        borderTopLeftRadius:SIZES.space4,
    },
    cvvDetails: {
        alignItems: "center",
        flexDirection: "row",
    },
    cardDetails: {
        backgroundColor: COLORS.darkText,
        ...padding.pb16,
        ...padding.pt16,
        ...padding.pr16,
        ...padding.pl16,
        borderBottomRightRadius: SIZES.space4,
        borderBottomLeftRadius:SIZES.space4,
    }
});

export default styles;