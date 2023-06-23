import { styled } from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.white};
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
