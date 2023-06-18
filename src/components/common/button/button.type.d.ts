export interface PropsButton {
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  outline?: boolean;
  style?: StyleProp<ViewStyle>;
  title: string;
  secondary?: boolean;
  isLoading?: boolean;
}
