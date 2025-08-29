import React from "react";
import { Platform, StatusBar } from "react-native";

export type TStatusBarStyle = {
    barStyle?: "default" | "light-content" | "dark-content";
    backgroundColor?: string;
};

const CustomStatusBar: React.FC<TStatusBarStyle> = ({ barStyle = "light-content", backgroundColor = "#004c4c" }) => {
  return (
    <StatusBar
      barStyle={barStyle}
      backgroundColor={Platform.OS === 'android' ? backgroundColor : undefined}
      translucent={false}
    />
  );
};

export default CustomStatusBar;