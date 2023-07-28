import { ArrowUpRight } from "phosphor-react-native";
import { Text } from "react-native";
import { css, styled } from "styled-components/native";

export type MealCardTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: MealCardTypeStyleProps;
};

export const Container = styled.TouchableOpacity`
  width: 100%;
  min-height: 50px;
  max-height: 50px; 

  border-radius: 6px;

  padding: 0 16px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

  flex-direction: row;
  align-items: center;
  gap: 12px;

  margin-top: 8px;
`;

export const Time = styled.Text` 
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Divider = styled.View`
  width: 1px;
  height: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Meal = styled(Text).attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;

  border-radius: 999px;

  margin-left: 4px /* 12px + 4px = distancia total é 16px */; 
  
  background-color: ${({theme, type}) => type === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;