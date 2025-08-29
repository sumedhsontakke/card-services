import { StyleSheet } from "react-native";
import common from "../../styles/common";

const styles = StyleSheet.create({ 
    container: {
        alignContent: "flex-start",
        paddingVertical: 0,
        paddingHorizontal: 0,
        ...common.darkBackground
    }
});

export default styles;