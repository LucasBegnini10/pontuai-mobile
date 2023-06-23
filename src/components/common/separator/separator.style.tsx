import styled from "styled-components/native";

export const SeparatorContainer = styled.View`
  width: ${({ vertical }: any) => (vertical ? "1px" : "100%")};
  height: ${({ vertical }: any) => (vertical ? "100%" : "1px")};
  background-color: ${({ theme }) => theme.primary};
`;
