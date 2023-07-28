import { Container, Divider, Meal, Status, Time } from './styles';

type Props = {
    time: string
    meal: string;
    insideTheDiet: boolean
}

export function MealCard({time, meal, insideTheDiet}: Props) {
  return (
    <Container>
        <Time>
          {time}
        </Time>

        <Divider />

        <Meal>
          {meal}
        </Meal>

        <Status
          type={insideTheDiet ? "PRIMARY" : "SECONDARY"}
        />
    </Container>
  );
}
