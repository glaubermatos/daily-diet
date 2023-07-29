import { ButtonIcon } from '@components/ButtonIcon';
import { Container, Value, Description, StatisticsCardTypeStyleProps } from './styles';
import { BackButton } from '@components/BackButton';
import { ViewProps } from 'react-native';

type Props = ViewProps & {
  type?: StatisticsCardTypeStyleProps;
  value: number;
  description: string
}

const BASE_VALUE = 60; //60%

export function StatisticsCard({type = "DEFAULT", value, description, ...rest}: Props) {

  return (
    <Container
      type={type}
      {...rest}
    >
      <Value>
        {value}
      </Value>

      <Description>
        {description}
      </Description>
    </Container>
  );
}
