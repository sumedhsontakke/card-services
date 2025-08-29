import React, { ReactNode } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

type ContainerProps = {
  children: ReactNode;
  customStyles?: object;
};

const Container: React.FC<ContainerProps> = ({ children, customStyles }) => {

  return (
    <SafeAreaProvider>
      <SafeAreaView testID="container" style={[styles.container, customStyles]} edges={['top', 'left', 'right', 'bottom']}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Container;
