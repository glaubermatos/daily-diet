import { useNavigation } from '@react-navigation/native'

import { Tag } from '@components/Tag';
import { Header } from '@components/Header';
import { Button } from '@components/Button';

import { Actions, Container, Content, Details, Label, MealName, Row, Text } from './styles';
import { ModalDeleteMeal } from '@components/ModalDeleteMeal';
import { Modal } from 'react-native';
import { useState } from 'react';

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

export function MealDetails() {
  const navigation = useNavigation()
  
  const [modalDeleteMealIsOpen, setModalDeleteMealIsOpen] = useState(false)

  const { name, description, date, time, insideTheDiet} = meal

  function handleOpenModalDeleteMeal() {
    setModalDeleteMealIsOpen(!modalDeleteMealIsOpen)
  }

  function handleCloseModalDeleteMeal() {
    setModalDeleteMealIsOpen(false)
  }

  function handleNavigateToEditMeal() {
    navigation.navigate('new')
  }

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
            onPress={() => handleNavigateToEditMeal()}
            icon="edit"
            text="Editar refeição"
          />
          
          <Button
            icon="delete"
            text="Excluir refeição"
            type="SECONDARY"
            onPress={() => handleOpenModalDeleteMeal()}
          />
        </Actions>
      </Content>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalDeleteMealIsOpen}
        statusBarTranslucent
        onRequestClose={() => handleCloseModalDeleteMeal()}
      >
        <ModalDeleteMeal>
          <Button
            text="Cancelar" 
            type="SECONDARY"
            onPress={() => handleCloseModalDeleteMeal()}
          />

          <Button
            type="PRIMARY"
            text="Sim, excluir"
          />        
        </ModalDeleteMeal>
      </Modal>

    </Container>
  );
} 
