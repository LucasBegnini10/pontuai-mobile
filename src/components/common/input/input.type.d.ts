import { ReactNode } from "react";
import { InputModeOptions } from "react-native";

export interface InputProps {
  ref?: React.Ref<TextInput>;
  label?: string;
  helperText?: string;
  editable?: boolean = true;
  onChangeText?: (e: string) => void;
  value?: string;
  inputMode?: InputModeOptions = "text";
  secureTextEntry?: boolean;
  iconElement?: ReactNode;
}
