import { PercentHeader } from '@components/PercentHeader';
import { Container, Content, Title } from './styles';
import { StatisticsCard } from '@components/StatisticsCard';
import { ActivityIndicator, FlatList } from 'react-native';
import { MealListTypeProps } from 'src/@types/meal';
import { useCallback, useState } from 'react';
import { getAllMeals } from '@storage/meal/getAllMeals';
import { useFocusEffect } from '@react-navigation/native';

export function Statistics() {
  const [meals, setMeals] = useState<MealListTypeProps[]>([])

  const statisticsInitial = {
    mealsRegistered: 0,
    mealsInsideTheDiet: 0,
    mealsOutsideTheDiet: 0,
    mealsPercentsInsideTheDiet: 0,
  }

  const statistics = meals.map(day => day).reduce((statisticsInitial, day) => {
    const mealsRegistered = statisticsInitial.mealsRegistered + day.data.length;
    const mealsInsideTheDiet = statisticsInitial.mealsInsideTheDiet + day.data.filter(meal => meal.insideTheDiet === true).length
    const mealsOutsideTheDiet = statisticsInitial.mealsOutsideTheDiet + day.data.filter(meal => meal.insideTheDiet === false).length

    const mealsPercentsInsideTheDiet = (mealsInsideTheDiet / mealsRegistered) * 100;

    return {
      mealsRegistered,
      mealsInsideTheDiet,
      mealsOutsideTheDiet,
      mealsPercentsInsideTheDiet,
    }
  }, statisticsInitial)

  const bestSequenceOfMealsInsideTheDiet = calculateBestSequenceInsideTheDiet()

  useFocusEffect(useCallback(() => {
    fetchData()
  }, []))

  async function fetchData() {
    const stored = await getAllMeals()

    setMeals(stored)
  }

  function calculateBestSequenceInsideTheDiet() {
    let bestSequenceOfMealsInsideTheDiet = 0

    let bestSequence = 0
    meals.map(day => {
      day.data.map(meal => {
        if (meal.insideTheDiet === true) {
          bestSequence++
          bestSequenceOfMealsInsideTheDiet = bestSequenceOfMealsInsideTheDiet < bestSequence ? bestSequence : bestSequenceOfMealsInsideTheDiet
        } else {
          bestSequence = 0
        }
      })
    })

    return bestSequenceOfMealsInsideTheDiet
  }

  return (
    <Container>
      {meals ? (
        <>
          <PercentHeader
            value={statistics.mealsPercentsInsideTheDiet}
            description="das refeições dentro da dieta"
          />

          <Content>
            <Title>Estatísticas gerais</Title>

            <StatisticsCard
              style={{marginTop: 24}}
              value={bestSequenceOfMealsInsideTheDiet}
              description="melhor sequência de pratos dentro da dieta"
            />

            <StatisticsCard
              style={{marginTop: 12}}
              value={statistics.mealsRegistered}
              description="refeições registradas"
            />

            <FlatList
              style={{marginTop: 12}}
              data={[{value: statistics.mealsInsideTheDiet, description: "refeições dentro da dieta"}, {value: statistics.mealsOutsideTheDiet, description: "refeições fora da dieta"}]}
              renderItem={({ item, index }) => (
                <StatisticsCard
                  type={index === 0 ? "PRIMARY" : "SECONDARY"} 
                  style={{ width: '48.258%'}}
                  value={item.value}
                  description={item.description}
                />
              )}
              //Setting the number of column
              numColumns={2}
              columnWrapperStyle={{gap: 12}}
              keyExtractor={(item, index) => item.description + index}
            />
          </Content>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </Container>
  );
}
