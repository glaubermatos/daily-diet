import { Container, HightlightTypeStyleProps, Strong, Subtitle, Title } from './styles';

type Props = {
  type?: HightlightTypeStyleProps,
}

export function Highlight({type = "PRIMARY"}: Props) {
  return (
    <Container>
      { type === "PRIMARY" ? (
        <>
        <Title type={type}>Continue assim!</Title>
        <Subtitle>Você continua <Strong>dentro da dieta</Strong>. Muito bem!</Subtitle>
        </>
      ) : (
        <>
        <Title type={type}>Que pena!</Title>
        <Subtitle>Você <Strong>saiu da dieta </Strong> dessa vez, mas continue se esforçando e não desista!</Subtitle>
        </>
      )}
    </Container>
  );
}
