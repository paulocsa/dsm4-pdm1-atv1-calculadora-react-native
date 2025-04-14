import React from "react";
import { View } from "react-native";
import styles from "./style";

type Props = {
  children: React.ReactNode;
};

export default function LayoutBotoesCalculadora({ children }: Props) {
  return <View style={[styles.container]}>{children}</View>;
}
