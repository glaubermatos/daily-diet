import { ButtonIcon } from '@components/ButtonIcon';
import { Container, Value, Description, PercentTypeStyleProps } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  value: number;
  description: string
}

const BASE_VALUE = 60; //60%

export function Percent({value, description, ...rest}: Props) {
  const type: PercentTypeStyleProps =  value >= BASE_VALUE ? "PRIMARY" : "SECONDARY";

  return (
    <Container
      type={type}
      {...rest}
    >
      <ButtonIcon
        type={type}
      />

      <Value>{
        value}%
      </Value>

      <Description>
        {description}
      </Description>
    </Container>
  );
}
