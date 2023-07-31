import { ButtonIconTypeStyleProps } from "@components/ButtonIcon/styles";
import { TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";

export type HightlightTypeStyleProps = "PRIMARY" | "SECONDARY"

type Props = {
    type: HightlightTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  gap: 8px;

  margin-bottom: 40px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Strong = styled.Text`
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
`}
`;  