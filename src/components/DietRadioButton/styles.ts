import { Dimensions, TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";

export type DietRadioButtonTypeStyleProps = "DEFAULT" | "PRIMARY" | "SECONDARY";

type Props = {
  type: DietRadioButtonTypeStyleProps;
  isActive: boolean;
}

type StatusProps = {
  type: DietRadioButtonTypeStyleProps;
}

export const Container = styled.View`
  width: 100%;

  gap: 4px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_600};
  `}
`;

export const RadioGroud = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 12px;
`;

export const RadioButton = styled(TouchableOpacity)<Props>`
  width: auto;
  height: 50px;

  border-radius: 6px;

  ${({theme, type, isActive}) => css`
    background-color: ${!isActive ? theme.COLORS.GRAY_200 : type === "PRIMARY" && isActive ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  `};

  ${({theme, type, isActive}) => isActive && css`
    border: ${type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `};

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px
`;

export const Text = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_700};
  `}  
`;

export const Status = styled.View<StatusProps>`
  width: 8px;
  height: 8px;

  border-radius: 999px;
  
  background-color: ${({theme, type}) => type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;