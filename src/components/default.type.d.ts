import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface DefaultProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}
