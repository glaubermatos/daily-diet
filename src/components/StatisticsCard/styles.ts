import { TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";

export type StatisticsCardTypeStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT"

type Props = {
    type: StatisticsCardTypeStyleProps;
}

export const Container = styled.View<Props>`
  width: 100%;

  padding: 24px;

  border-radius: 8px;

  background-color: ${({theme, type}) => type === "DEFAULT" ? theme.COLORS.GRAY_200 : type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  align-items: center;
  justify-content: center;
`;

export const Value = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_700};
    `}
`;

export const Description = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_600};
    `}
`;