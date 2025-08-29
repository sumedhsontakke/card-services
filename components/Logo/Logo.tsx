import { Text, View } from "react-native";
import styles from "./style";

interface LogoProps {
    customStyles?: object;
}

const Logo = ({customStyles}: LogoProps) => {
    return (
        <View testID="logo" style={[styles.container, customStyles]}>
            <Text style={styles.text}>Card Services</Text>
        </View>
    )
}

export default Logo;