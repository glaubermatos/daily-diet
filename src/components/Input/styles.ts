import { ArrowUpRight, PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";

type Props = {
  isFocused: boolean;
};

export const Container = styled.View`
  width: auto;

  gap: 4px;
`;

export const Input = styled(TextInput).attrs<Props>(({multiline}) => ({
  style: {height: 48}
}))`
  padding: 14px 14px;

  ${({ multiline }) => !multiline ? css`height: 48px;` : css`max-height: 120px;`};

  ${({ theme, isFocused }) => css`
    background-color: ${theme.COLORS.WHITE};

    border: 1px solid ${isFocused ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_300};

    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};

  border-radius: 6px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;