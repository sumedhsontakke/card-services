import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";

const styles = StyleSheet.create({ 
    container: { 
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 16,
        minHeight: '100%',
        backgroundColor: COLORS.primary
    },
});

export default styles;