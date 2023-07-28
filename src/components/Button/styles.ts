import { ArrowUpRight, PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  min-height: 50px;

  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY" ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
  `};

  ${({ theme, type }) => type === "SECONDARY" &&  css`
    border: 1px solid ${theme.COLORS.GRAY_700};
  `};

  border-radius: 6px;

  flex-direction: row;

  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Label = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const IconPlus = styled(Plus).attrs<Props>(({theme, type = "PRIMARY"}) => ({
    size: 18,
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
}))`
`;

export const IconPencilSimpleLine = styled(PencilSimpleLine).attrs<Props>(({theme, type = "PRIMARY"}) => ({
    size: 18,
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
}))`
`;

export const IconTrash = styled(Trash).attrs<Props>(({theme, type = "PRIMARY"}) => ({
    size: 18,
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
}))`
`;