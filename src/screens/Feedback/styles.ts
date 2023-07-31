import { css, styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.WHITE};

  justify-content: center;
  align-items: center;
`;