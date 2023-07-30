import { Text } from 'react-native';

import { Container, HeaderTypeStyleProps, Title } from './styles';
import { BackButton } from '@components/BackButton';

export type HeaderTitleTypeProps = "Nova refeição" | "Refeição" | "Editar refeição";

type Props = {
  title: HeaderTitleTypeProps;
  type?: HeaderTypeStyleProps;
} 

export function Header({title, type = "DEFAULT"}: Props) {
  return (
    <Container
      type={type}
    >
      <BackButton />

      <Title>
        {title}
      </Title>
    </Container>
  );
}
