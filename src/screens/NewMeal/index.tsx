import { useCallback, useState } from 'react';
import {Alert, Dimensions, KeyboardAvoidingView} from 'react-native';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'

import { MealListTypeProps, MealTypeProps } from 'src/@types/meal';

import { Container, Content, Form, Row } from './styles';

import { Input } from '@components/Input';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { create } from '@storage/meal/create';
import { DietRadioButton } from '@components/DietRadioButton';
import { mealGetById } from '@storage/meal/mealGetById';
import { update } from '@storage/meal/update';


type RouteParams = {
  id?: string,
}

export function NewMeal() {
  const navigation = useNavigation();
  
  const route = useRoute()
  const { id } = route.params as RouteParams;

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [insideTheDiet, setInsideTheDiet] = useState<boolean>(true)

  const windowWidth = Dimensions.get('window').width;

  useFocusEffect(useCallback(() => {
    fetchData()
  }, [id]))

  async function fetchData() {
    if (id) {
      const stored = await mealGetById(id)

      const date = stored.date
      const meal = stored.data[0]

      setName(meal.meal)
      setDescription(meal.description)
      setDate(date)
      setTime(meal.time)
      setInsideTheDiet(meal.insideTheDiet)
    }
  }

  function handleCreateOrUpdate() {
    if (id) {
      updateMeal()
    } else {
      createNewMeal()
    }
  }

  async function createNewMeal() {
    try {
      const input = {
        meal: name,
        description,
        time,
        insideTheDiet
      }
  
      await create(input, date)
  
      navigation.navigate("feedback", {insideTheDiet});
    } catch (error) {
      console.log(error)
      Alert.alert("Nova refeição", "Não foi possível cadastrar a refeição")
    }
  }
  
  async function updateMeal() {
    try {
      if (!id) {
        return
      }

      const meal = {
        id,
        meal: name,
        description,
        time,
        insideTheDiet
      }
  
      await update(meal, date)
  
      navigation.navigate("feedback", {insideTheDiet});
    } catch (error) {
      console.log(error)
      Alert.alert("Nova refeição", "Não foi possível cadastrar a refeição")
    }
  }

  return (
    <Container>
        <Header
          title={id ? "Editar refeição" : "Nova refeição"}
        />

        <Content>
          <Form>
            <Input
              label="Nome"
              value={name}
              onChangeText={setName}
            />

            <Input
              label="Descrição"
              multiline
              numberOfLines={5}
              value={description}
              onChangeText={setDescription}
            />

            <Row>
              <Input
                style={{width: ((windowWidth / 2) - 36) }}
                label="Data"
                value={date}
                onChangeText={setDate}
              />

              <Input
                style={{width: ((windowWidth / 2) - 36) }}
                label="Hora"
                value={time}
                onChangeText={setTime}
              />
            </Row>

            <DietRadioButton 
              insideTheDiet={insideTheDiet}
              onSwitchInsideTheDiet={setInsideTheDiet}
            />
          </Form>
          
          <Button
            onPress={handleCreateOrUpdate}
            text={id ? "Salvar alterações" : "Cadastrar refeição"}
          />
        </Content>
    </Container>
  );
}
