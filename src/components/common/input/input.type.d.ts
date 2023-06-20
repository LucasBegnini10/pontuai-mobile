import { InputModeOptions } from "react-native";

export interface InputProps {
  label: string;
  placeholder?: string;
  helperText?: string;
  editable?: boolean = true;
  onChangeText: (e: string) => void;
  value: string;
  inputMode: InputModeOptions;
}
