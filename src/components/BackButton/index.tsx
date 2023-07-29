import { TouchableOpacityProps } from 'react-native';
import { ButtonIconTypeStyleProps, Container, IconArrowLeft } from './styles';

type Props = TouchableOpacityProps & {
  type? : ButtonIconTypeStyleProps
}

export function BackButton({type = "PRIMARY"}: Props) {
  return (
    <Container>
      <IconArrowLeft type={type} />
    </Container>
  );
}
