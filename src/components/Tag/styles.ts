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
  max-width: 144px;
  padding: 8px 16px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 9999px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Status = styled.View<StatusProps>`
  width: 8px;
  height: 8px;

  border-radius: 999px;
  
  background-color: ${({theme, type}) => type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;