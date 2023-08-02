import { TouchableOpacityProps } from 'react-native';
import { Container, Divider, Meal, Status, Time } from './styles';

type Props = TouchableOpacityProps & {
    time: string
    meal: string;
    insideTheDiet: boolean
}

export function MealCard({time, meal, insideTheDiet, ...rest}: Props) {
  return (
    <Container
      {...rest}
    >
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
