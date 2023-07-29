import { css, styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;

  margin-top: -24px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({theme}) => theme.COLORS.WHITE};

  padding: 32px 24px;

  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Grid = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
`;