import { TouchableOpacityProps } from 'react-native';

import { ButtonIconTypeStyleProps, Container, IconArrowLeft } from './styles';

type Props = TouchableOpacityProps & {
  type? : ButtonIconTypeStyleProps
}

export function BackButton({type = "DEFAULT", ...rest}: Props) {
  return (
    <Container
      {...rest}
    >
      <IconArrowLeft
        type={type}
      />
    </Container>
  );
}
