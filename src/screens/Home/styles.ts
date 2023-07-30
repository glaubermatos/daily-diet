import { SafeAreaView } from "react-native-safe-area-context";
import { css, styled } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.WHITE};

  padding: 24px;
`;

export const Header = styled.View`
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.WHITE};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const NewMeal = styled.View`
  margin-top: 40px;

  gap: 8px
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const SectionTitle = styled.Text`
  margin-top: 24px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;