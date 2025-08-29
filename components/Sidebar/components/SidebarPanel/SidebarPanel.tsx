import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles";
import { TSidebar } from "../../models";
import { useAuth } from "../../../../context/AuthContext";
import font from "../../../../styles/fonts";
import margin from "../../../../styles/margin";
import CustomButton from "../../../CustomButton";
import { Ionicons } from "@expo/vector-icons";

function SidebarPanel({toggleSidebar }: TSidebar) {
    const { state, logout } = useAuth();

    const handleOnPress = () => {
        toggleSidebar();
        logout();
    }

    return (
        <View style={styles.sidebar}>
            <TouchableOpacity onPress={toggleSidebar} style={styles.closeIcon}>
                <Ionicons name={"close"} size={24} color="black" />
            </TouchableOpacity>
            <View>
                <Text style={[font.bold, font.size16]}>{`Welcome ${state.user}`}</Text>
            </View>
            <CustomButton title="LOG OUT" onPress={handleOnPress} customStyles={[margin.mt8, styles.logoutButton]} />
        </View>
    );
};

export default SidebarPanel;