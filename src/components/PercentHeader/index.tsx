import { useNavigation } from '@react-navigation/native'
import { Container, Value, Description, PercentTypeStyleProps } from './styles';
import { BackButton } from '@components/BackButton';

type Props = {
  value: number;
  description: string
}

const BASE_VALUE = 50; //50%

export function PercentHeader({value, description}: Props) {
  const navigation = useNavigation()

  const type: PercentTypeStyleProps =  value >= BASE_VALUE ? "PRIMARY" : "SECONDARY";

  function handleGoBack() {
    navigation.navigate("home")
  }

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
    >
      <BackButton
        onPress={() => handleGoBack()}
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
