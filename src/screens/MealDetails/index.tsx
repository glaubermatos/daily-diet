import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { ActivityIndicator, Alert } from 'react-native';

import { Tag } from '@components/Tag';
import { Header } from '@components/Header';
import { Button } from '@components/Button';

import { Actions, Container, Content, Details, Label, MealName, Row, Text } from './styles';
import { ModalDeleteMeal } from '@components/ModalDeleteMeal';
import { Modal } from 'react-native';
import { useCallback, useState } from 'react';
import { mealGetById } from '@storage/meal/mealGetById';
import { MealListTypeProps, MealTypeProps } from 'src/@types/meal';
import { mealDeleteById } from '@storage/meal/delete/mealDeleteById';

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

type RouteParams = {
  id: string,
}

type MealDetailType = {
  id: string,
  meal: string,
  description: string,
  dateTime: string,
  insideTheDiet: boolean
}

export function MealDetails() {
  const navigation = useNavigation()

  const [meal, setMeal] = useState<MealDetailType>()
  const [modalDeleteMealIsOpen, setModalDeleteMealIsOpen] = useState(false)
  
  const route = useRoute()
  const { id } = route.params as RouteParams;

  useFocusEffect(useCallback(() => {
    fetchData()
  }, [id]))

  async function fetchData() {
    const stored = await mealGetById(id)
    const meal = formatMealData(stored)

    setMeal(meal)
  }

  function formatMealData(stored: MealListTypeProps) {
    const mealFormatted = {
      id: stored.data[0].id,
      meal: stored.data[0].meal,
      description: stored.data[0].description,
      dateTime: `${stored.date} às ${stored.data[0].time}`,
      insideTheDiet: stored.data[0].insideTheDiet
    }

    return mealFormatted
  }

  function handleOpenModalDeleteMeal() {
    setModalDeleteMealIsOpen(!modalDeleteMealIsOpen)
  }

  function handleCloseModalDeleteMeal() {
    setModalDeleteMealIsOpen(false)
  }

  function handleNavigateToEditMeal() {
    navigation.navigate('new', {id})
  }

  async function deleteMeal(id: string) {
    try {
      await mealDeleteById(id)

      navigation.navigate('home')
    } catch (error) {
      console.log(error)
      Alert.alert("Excluir refeição", "Não foi possível excluir a refeição")
    }
  }

  return (
    <Container>
      {meal ? (
        <>
          <Header
            type={meal.insideTheDiet ? "PRIMARY" : "SECONDARY" }
            title="Refeição"
          />

          <Content>
            <Details>
              <Row>
                <MealName>
                  {meal.meal}
                </MealName>

                <Text>
                  {meal.description}
                </Text>
              </Row>

              <Row>
                <Label>
                  Data e hora
                </Label>

                <Text>
                  {meal.dateTime}
                </Text>
              </Row>

              <Tag
                insideTheDiet={meal.insideTheDiet}
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
                onPress={() => deleteMeal(meal.id)}
                type="PRIMARY"
                text="Sim, excluir"
              />        
            </ModalDeleteMeal>
          </Modal>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </Container>
  );
} 
