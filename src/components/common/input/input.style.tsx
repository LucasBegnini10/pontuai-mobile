import { Dimensions } from "react-native";
import { styled } from "styled-components/native";

export const Container = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputContainer = styled.View`
  position: relative;
  width: 100%;
  background-color: ${(props: any) => props.theme.secondary};
  border-radius: 10px;
  border-color: ${(props: any) => {
    if (props.isError) return props.theme.error;
    if (props.isFocused) return props.theme.primary;
    return "transparent";
  }};
  border-width: 1px;
`;

export const MyInput = styled.TextInput`
  width: 88%;
  border: none;
  padding: 10px 16px;
`;

export const ViewIcon = styled.View`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-12px);
`;

export const Label = styled.Text`
  font-size: 14px;
  font-family: "Nunito_700Bold";
  font-weight: 400;
  line-height: 22px;
  color: ${(props: any) =>
    props.isError ? props.theme.error : props.theme.primary};
  margin-bottom: 2px;
  margin-left: 2px;
`;

export const Helper = styled.Text`
  font-size: 12px;
  font-family: "Nunito_400Regular";
  font-weight: 400;
  line-height: 22px;
  color: ${(props: any) =>
    props.isError ? props.theme.error : props.theme.primary};
  margin-top: 2px;
  margin-left: 4px;
`;
