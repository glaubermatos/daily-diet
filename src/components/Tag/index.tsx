import { Container, Label, Status } from './styles';

type Props = {
  insideTheDiet: boolean
}

export function Tag({insideTheDiet}: Props) {
  return (
    <Container>
        <Status
          type={insideTheDiet ? "PRIMARY" : "SECONDARY"}
        />

        <Label>
          {insideTheDiet ? "dentro da dieta" : "fora da dieta"} 
        </Label>
    </Container>
  );
}

