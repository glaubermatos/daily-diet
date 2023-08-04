import { TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600 };
  `}
`;