import { styled } from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.WHITE};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;