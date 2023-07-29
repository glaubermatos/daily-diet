
import { PercentHeader } from '@components/PercentHeader';
import { Container, Content, Grid, Title } from './styles';
import { StatisticsCard } from '@components/StatisticsCard';
import { FlatList } from 'react-native';

export function Statistics() {

  return (
    <Container>
      <PercentHeader
        value={90.86}
        description="das refeições dentro da dieta"
      />

      <Content>
        <Title>Estatísticas gerais</Title>

        <StatisticsCard
          style={{marginTop: 24}}
          value={22}
          description="melhor sequência de pratos dentro da dieta"
        />

        <StatisticsCard
          style={{marginTop: 12}}
          value={109}
          description="refeições registradas"
        />

        <FlatList
          style={{marginTop: 12}}
          data={[{value: 99, description: "refeições dentro da dieta"}, {value: 10, description: "refeições fora da dieta"}]}
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
    </Container>
  );
}
