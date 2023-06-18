import { ActivityIndicator } from "react-native";
import { styled } from "styled-components/native";

export const MyButton = styled.TouchableOpacity`
  background-color: ${(props: any) => {
    if (props.disabled) return props.theme.disabledField;
    if (props.outline) return props.theme.white;
    if (props.secondary) return props.theme.secondary;
    return props.theme.primary;
  }};
  padding: 15px 10px;
  min-height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: ${(props: any) => {
    if (props.disabled) return `none`;
    if (props.outline) return `2px solid ${props.theme.primary}`;
    return `none`;
  }};
`;

export const TextButton = styled.Text`
  text-transform: uppercase;
  color: ${(props: any) =>
    props.outline || props.secondary
      ? props.theme.primary
      : props.theme.primary};
  font-family: "Nunito_500Medium";
  font-size: 18px;
`;

export const Loader = () => (
  <ActivityIndicator size={"large"} color={"white"} />
);
