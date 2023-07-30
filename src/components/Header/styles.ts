import { css, styled } from "styled-components/native";

export type HeaderTypeStyleProps = "DEFAULT" | "PRIMARY" | "SECONDARY";

type Props = {
  type: HeaderTypeStyleProps;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: 132px;

  background-color: ${({theme, type}) => type === "DEFAULT" ? theme.COLORS.GRAY_300 : type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_700};
    `}
`;