import { useNavigation } from '@react-navigation/native'
import { Container, Value, Description, PercentTypeStyleProps } from './styles';
import { BackButton } from '@components/BackButton';

type Props = {
  value: number;
  description: string
}

const BASE_VALUE = 60; //60%

export function PercentHeader({value, description}: Props) {
  const navigation = useNavigation()

  const type: PercentTypeStyleProps =  value >= BASE_VALUE ? "PRIMARY" : "SECONDARY";

  function handleGoBack() {
    navigation.navigate("home")
  }

  return (
    <Container
      type={type}
    >
      <BackButton
        onPress={() => handleGoBack()}
        type={type}
      />

      <Value>
        {value}%
      </Value>

      <Description>
        {description}
      </Description>
    </Container>
  );
}
