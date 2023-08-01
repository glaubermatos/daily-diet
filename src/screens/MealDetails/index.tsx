import { Tag } from '@components/Tag';
import { Header } from '@components/Header';
import { Button } from '@components/Button';

import { Actions, Container, Content, Details, Label, MealName, Row, Text } from './styles';

export type Meal = {
  name: string;
  description: string;
  date: string;
  time: string;
  insideTheDiet: boolean;
}

type Props = {
  meal: Meal;
}

const meal = {
  name: "Sanduiche",
  description: "Sanduíche de pão integral com atum e salada de alface e tomate",
  date: "12/08/2022",
  time: "16:00",
  insideTheDiet: true,
}

export function MealDetails({ meal: {name, description, date, time, insideTheDiet} = meal}: Props) {

  return (
    <Container>
      <Header
        type={insideTheDiet ? "PRIMARY" : "SECONDARY" }
        title="Refeição"
      />

      <Content>
        <Details>
          <Row>
            <MealName>
              {name}
            </MealName>

            <Text>
              {description}
            </Text>
          </Row>

          <Row>
            <Label>
              Data e hora
            </Label>

            <Text>
              {date} às {time}
            </Text>
          </Row>

          <Tag
            insideTheDiet={insideTheDiet}
          />

        </Details>
        
        <Actions>
          <Button
            icon="edit"
            text="Editar refeição"
          />
          
          <Button
            icon="delete"
            text="Excluir refeição"
            type="SECONDARY"
          />
        </Actions>
      </Content>

    </Container>
  );
} 
