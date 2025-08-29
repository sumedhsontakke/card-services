import { StyleSheet } from "react-native";
import { COLORS } from "../../../../styles/colors";
import margin from "../../../../styles/margin";
import padding from "../../../../styles/padding";

const styles = StyleSheet.create({ 
    accountContainer: {
        ...padding.pb16,
        ...padding.pt16,
        ...padding.pr16,
        ...padding.pl16,
    },
    accountCard: {
        // backgroundColor: COLORS.secondary,
        // backgroundColor: "#ddb600",
        backgroundColor: COLORS.darkBorder,
        ...padding.pb12,
        ...padding.pt12,
        ...padding.pl16,
        ...padding.pr16,
        ...margin.mb8,
    },
    title: {
        color: COLORS.white,
        fontWeight: "bold"
    },
    accountName: {
        alignItems: "center",
        flexDirection: "row"
    },
    accountBalance: {
        alignItems: "flex-start",
    },
    cardStyle: {
        ...margin.mt8
    }
});

export default styles;