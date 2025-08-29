import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  customStyles?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, customStyles }) => (
  <TouchableOpacity style={[styles.primaryBtn, customStyles]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;
