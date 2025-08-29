import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../Logo";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import margin from "../../styles/margin";

type CustomHeaderProps = {
    title?: string;
}

const CustomHeader = ({ title }: CustomHeaderProps) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            {navigation.canGoBack() ? (
                <TouchableOpacity onPress={() => navigation.goBack()} style={margin.mr8}>
                    <Ionicons testID="arrow-back" name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
            ) : null}
            <Logo />
        </SafeAreaView>
    );
};


export default CustomHeader;