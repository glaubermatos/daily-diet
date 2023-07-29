import { ButtonIcon } from '@components/ButtonIcon';
import { Container, Value, Description, PercentTypeStyleProps } from './styles';
import { BackButton } from '@components/BackButton';

type Props = {
  value: number;
  description: string
}

const BASE_VALUE = 60; //60%

export function PercentHeader({value, description}: Props) {
  const type: PercentTypeStyleProps =  value >= BASE_VALUE ? "PRIMARY" : "SECONDARY";

  return (
    <Container
      type={type}
    >
      <BackButton
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
