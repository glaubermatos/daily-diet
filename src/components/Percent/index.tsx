import { ButtonIcon } from '@components/ButtonIcon';
import { Container, Value, Description, PercentTypeStyleProps } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  value: number;
  description: string
}

const BASE_VALUE = 50; //50%

export function Percent({value, description, ...rest}: Props) {
  const type: PercentTypeStyleProps =  value >= BASE_VALUE ? "PRIMARY" : "SECONDARY";

  var option = {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };

  var formatter = new Intl.NumberFormat("pt-BR", option);

  const valuePercent = formatter.format(value/100)

  return (
    <Container
      type={type}
      {...rest}
    >
      <ButtonIcon
        type={type}
      />

      <Value>
        {valuePercent}
      </Value>

      <Description>
        {description}
      </Description>
    </Container>
  );
}
