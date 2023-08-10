import { ScrollView } from "react-native";
import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Content = styled(ScrollView).attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
  showsVerticalScrollIndicator: false
}))`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  margin-top: -24px;

  gap: 24px;

  padding: 32px 24px 24px 24px;
`;

export const Form = styled.View`
  flex: 1;

  gap: 24px;
`;

export const Row = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 24px;

`;