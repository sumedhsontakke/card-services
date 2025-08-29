import { Animated, Dimensions, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useRef, useState } from "react";
import SidebarPanel from "./components/SidebarPanel";
import { useAuth } from "../../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../styles/colors";

const { width } = Dimensions.get("window");

const Sidebar = () => {
    const { state } = useAuth();
    const [open, setOpen] = useState(false);
    const slideAnim = useRef(new Animated.Value(width)).current;
    const toggleSidebar = () => {
        Animated.timing(slideAnim, {
            toValue: open ? width : 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setOpen(!open));
    };

    return (
        <>
            {
                state.user &&
                <TouchableOpacity style={styles.personIcon} onPress={toggleSidebar}>
                    <Ionicons name="person" size={SIZES.space16} color={COLORS.secondary} />
                </TouchableOpacity>
            }

            <Animated.View
                style={[
                    styles.sidebarContainer,
                    { transform: [{ translateX: slideAnim }] },
                ]}
            >
                <SidebarPanel open={open} toggleSidebar={toggleSidebar} />
            </Animated.View>
        </>
    );
}

export default Sidebar;