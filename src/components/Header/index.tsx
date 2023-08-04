import { useNavigation } from '@react-navigation/native'

import { Container, HeaderTypeStyleProps, Title } from './styles';
import { BackButton } from '@components/BackButton';

export type HeaderTitleTypeProps = "Nova refeição" | "Refeição" | "Editar refeição";

type Props = {
  title: HeaderTitleTypeProps;
  type?: HeaderTypeStyleProps;
} 

export function Header({title, type = "DEFAULT"}: Props) {
  const navigation = useNavigation();

  function handleGoBackHome() {
    navigation.goBack()
  }

  return (
    <Container
      type={type}
    >
      <BackButton
        onPress={handleGoBackHome}
      />

      <Title>
        {title}
      </Title>
    </Container>
  ); 
}
