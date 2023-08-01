import { css, styled } from "styled-components/native";

export const Overlay = styled.View`
  flex:1;

  padding: 24px;

  background-color: rgba(0, 0, 0, 0.25);

  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Container = styled.View`
  padding: 40px 24px 24px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  align-items: center;
  gap: 32px;

  border-radius: 8px;
`;

export const ModalTitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.LG}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_600};
  `}
`;

export const ModalActions = styled.View`
  flex-direction: row;
  gap: 12px;
`;