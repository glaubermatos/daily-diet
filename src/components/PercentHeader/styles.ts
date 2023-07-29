import { ButtonIconTypeStyleProps } from "@components/ButtonIcon/styles";
import { TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";

export type PercentTypeStyleProps = ButtonIconTypeStyleProps

type Props = {
    type?: PercentTypeStyleProps;
}

export const Container = styled.View<Props>`
  width: 100%;
  min-height: 200px;
  max-height: 200px;


  background-color: ${({theme, type}) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Value = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._2XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_700};
    `}
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_600};
    `}
`;