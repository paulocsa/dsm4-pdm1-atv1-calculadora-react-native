import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./style";

type Props = {
  children: React.ReactNode;
  onPress: () => void;
};

export default function CustomButton({ children, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button]}>
      <Text style={[styles.text]}>{children}</Text>
    </TouchableOpacity>
  );
}
