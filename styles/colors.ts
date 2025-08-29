import { StyleSheet } from "react-native";

export const COLORS = {
    primary: '#004c4c',
    primaryDark: "#004c4c",
    secondary: '#ffd200',
    primaryLight: '#015b5b',
    primaryLightText: "#00b2b2",
    secondaryLight: '#fff5b3',
    danger: '#ff4d4d',
    dangerText: '#f73232',
    white: '#ffffff',
    darkText: '#222',
    backgroundDark: "#001212",
    darkInput: "#303d3d",
    darkPlaceholderColor: "#93a0a0",
    darkBorder: "#2d2d2d"
};

export const SIZES = {
    space0: 0,
    space4: 4,
    space8: 8,
    space12: 12,
    space16: 16,
    space20: 20,
    space24: 24,
    space28: 28,
    space32: 32,
    space36: 36,
    space40: 40,
    space80: 80,
}

export const fontColor = StyleSheet.create({
    white: {
        color: COLORS.white
    },
    darkText: {
        color: COLORS.darkText,
    }
});