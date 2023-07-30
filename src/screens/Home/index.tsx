import { SectionList } from 'react-native';

import { Container, Header, Logo, NewMeal, SectionTitle, Title } from './styles';

import { Percent } from '@components/Percent';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';

import logoImg from '@assets/logo.png'

const DATA = [
  {
    sectionTitle: '12.08.22',
    data: [{time: '20:00', meal: 'X-tudo', insideTheDiet: false}, {time: '20:00', meal: 'Whey protein com leite', insideTheDiet: true}, {time: '20:00', meal: 'Salada cesar com frango grelhado', insideTheDiet: true}, {time: '20:00', meal: 'Vitamina de banana com abacate', insideTheDiet: true}],
  },
  {
    sectionTitle: '11.08.22',
    data: [{time: '20:00', meal: 'X-tudo', insideTheDiet: false}, {time: '20:00', meal: 'Whey protein com leite', insideTheDiet: true}, {time: '20:00', meal: 'Salada cesar com frango grelhado', insideTheDiet: true}, {time: '20:00', meal: 'Vitamina de banana com abacate', insideTheDiet: true}],
  },
];

export function Home() {

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
      </Header>

      <Percent
        style={{ marginTop: 32}}
        value={90.86}
        description="das refeições dentro da dieta"
      />

      <NewMeal>
        <Title>
          Refeições
        </Title>

        <Button
          icon="add"
          text="Nova refeição"
        />
      </NewMeal>

      <SectionList
        style={{ marginTop: 16}}
        sections={DATA}
        keyExtractor={(item, index) => item.meal + index}
        renderItem={({item}) => (
          <MealCard
            time={item.time}
            meal={item.meal}
            insideTheDiet={item.insideTheDiet}
          />
        )}
        renderSectionHeader={({section: {sectionTitle}}) => (
          <SectionTitle>{sectionTitle}</SectionTitle>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          // players.length === 0 && { flex: 1 }
        ]}
      />
    </Container>
  );
}
