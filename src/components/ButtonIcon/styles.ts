import { ArrowUpRight } from "phosphor-react-native";
import { styled } from "styled-components/native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled.View`
  min-height: 24px;
  max-height: 24px;
  width: 24px;

  align-items: center;
  justify-content: center;

  position: absolute;
  top: 12px;
  right: 12px;
`;

export const IconUp = styled(ArrowUpRight).attrs<Props>(({theme, type = "PRIMARY"}) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
`;