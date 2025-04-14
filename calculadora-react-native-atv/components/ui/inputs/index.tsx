import React from "react";
import { TextInput, View } from "react-native";
import styles from "./style";

type Props = {
  hint?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function CustomInput({
  hint,
  onChangeText,
  value,
  ...props
}: Props) {
  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={hint}
        placeholderTextColor="#000000"
        {...props}
      />
    </View>
  );
}
