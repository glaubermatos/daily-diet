import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import { styled } from "styled-components/native";

export type ButtonIconTypeStyleProps = "DEFAULT" | "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled.TouchableOpacity`
  min-height: 32px;
  max-height: 32px;
  width: 32px;

  align-items: center;
  justify-content: center;

  position: absolute;
  top: 52px;
  left: 24px;
`;

export const IconArrowLeft = styled(ArrowLeft).attrs<Props>(({theme, type = "PRIMARY"}) => ({
    size: 24,
    color: type === "DEFAULT" ? theme.COLORS.GRAY_600 : type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
`;