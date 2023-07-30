import { TouchableOpacityProps } from 'react-native';
import { ButtonIconTypeStyleProps, Container, IconArrowLeft } from './styles';

type Props = TouchableOpacityProps & {
  type? : ButtonIconTypeStyleProps
}

export function BackButton({type = "DEFAULT"}: Props) {
  return (
    <Container>
      <IconArrowLeft type={type} />
    </Container>
  );
}
