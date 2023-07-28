import { TouchableOpacityProps } from 'react-native';
import { ButtonIconTypeStyleProps, Container, IconUp } from './styles';

type Props = TouchableOpacityProps & {
  type? : ButtonIconTypeStyleProps
}

export function ButtonIcon({type = "PRIMARY"}: Props) {
  return (
    <Container>
      <IconUp type={type} />
    </Container>
  );
}
