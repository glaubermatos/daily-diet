import { css, styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.WHITE};

  position: relative;
`;

export const Content = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  margin-top: -24px;

  gap: 24px;

  padding: 32px 24px 24px 24px;
`;

export const Details = styled.View`
  flex: 1;

  gap: 24px;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Row = styled.View`
  width: 100%;
  gap: 8px;

`;

export const Actions = styled.View`
  width: 100%;
  gap: 8px;
`;