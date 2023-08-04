import { Alert, SectionList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Container, Header, Logo, NewMeal, SectionTitle, Title } from './styles';

import { Percent } from '@components/Percent';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';

import logoImg from '@assets/logo.png'
import { ListEmpty } from '@components/ListEmpty';
import { useCallback, useState } from 'react';
import { MealListTypeProps } from 'src/@types/meal';
import { getAllMeals } from '@storage/meal/getAllMeals';

const DATA = [
  {
    date: '12.08.22',
    data: [{
      time: '20:00', 
      meal: 'X-tudo', 
      description: "X-tudo",
      insideTheDiet: false
    }, {
      time: '20:00', 
      meal: 'Whey protein com leite', 
      description: "X-tudo",
      insideTheDiet: true
    }, {
      time: '20:00', 
      meal: 'Salada cesar com frango grelhado', 
      description: "X-tudo",
      insideTheDiet: true
    }, {
      time: '20:00', 
      meal: 'Vitamina de banana com abacate',
      description: "X-tudo", 
      insideTheDiet: true
    }],
  },{
    date: '11.08.22',
    data: [{
      time: '20:00', 
      meal: 'X-tudo', 
      description: "X-tudo",
      insideTheDiet: false,
    }, {
      time: '20:00', 
      meal: 'Whey protein com leite', 
      description: "X-tudo",
      insideTheDiet: true
    }, {
      time: '20:00', 
      meal: 'Salada cesar com frango grelhado', 
      description: "X-tudo",
      insideTheDiet: true
    }, {
      time: '20:00', 
      meal: 'Vitamina de banana com abacate', 
      description: "X-tudo",
      insideTheDiet: true
    }],
  },
];

export function Home() {
  const [meals, setMeals] = useState<MealListTypeProps[]>([])

  const navigation = useNavigation()

  const statisticsInitial = {
    mealsRegistered: 0,
    mealsInsideTheDiet: 0,
    mealsPercentsInsideTheDiet: 0,
  };

  const statistics = meals.map(day => day).reduce((statisticsInitial, day) => {
    const mealsRegistered = statisticsInitial.mealsRegistered + day.data.length;
    const mealsInsideTheDiet = statisticsInitial.mealsInsideTheDiet + day.data.filter(meal => meal.insideTheDiet === true).length

    const mealsPercentsInsideTheDiet = (mealsInsideTheDiet / mealsRegistered) * 100;

    return {
      mealsRegistered,
      mealsInsideTheDiet,
      mealsPercentsInsideTheDiet
    }
  }, statisticsInitial)

  useFocusEffect(useCallback(() => {
    fetchData()
  }, []))

  async function fetchData() {
    try {
      const allMeals = await getAllMeals()

      setMeals(allMeals)

    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao carregar os dados')
    }
  }

  function handleNavigateToStatistics() {
    navigation.navigate('statistics')
  }

  function handleNavigateToNewMeal() {
    navigation.navigate('new', {})
  }

  function handleNavigateMealDetails(id: string) {
    navigation.navigate("meal", {id})
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
      </Header>

      <Percent
        onPress={() => handleNavigateToStatistics()}
        style={{ marginTop: 32}}
        value={statistics.mealsPercentsInsideTheDiet}
        description="das refeições dentro da dieta"
      />

      <NewMeal>
        <Title>
          Refeições
        </Title>

        <Button
          onPress={handleNavigateToNewMeal}
          icon="add"
          text="Nova refeição"
        />
      </NewMeal>

      <SectionList
        style={{ marginTop: 16}}
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <MealCard
            onPress={() => handleNavigateMealDetails(item.id)}
            time={item.time}
            meal={item.meal}
            insideTheDiet={item.insideTheDiet}
          />
        )}
        renderSectionHeader={({section: {date}}) => (
          <SectionTitle>{date}</SectionTitle>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          meals.length === 0 && { flex: 1 }
        ]}
        ListEmptyComponent={() => (
          <ListEmpty
            message="Que tal cadastrar a primeira refeição?"
          />
        )}
      />
    </Container>
  );
}
