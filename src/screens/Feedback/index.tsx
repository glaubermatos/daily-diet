
import { useNavigation, useRoute } from '@react-navigation/native'

import { Highlight } from '@components/Highlight';
import { Container } from './styles';

import InsideTheDietImage from '@assets/Illustration-1.svg'
import OffTheDietImage    from '@assets/Illustration-2.svg'

import { Button } from '@components/Button';
import { View } from 'react-native';

type RouteParams = {
  insideTheDiet: boolean,
}

export function Feedback() {
  const navigation = useNavigation()
  
  const route = useRoute()
  const { insideTheDiet } = route.params as RouteParams;

  function handleNavigationToHome() {
    navigation.navigate("home")
  }

  return (
    <Container>
      <Highlight
        type={insideTheDiet ? "PRIMARY" : "SECONDARY"}
      />

      { insideTheDiet ? (
          <InsideTheDietImage
            width={224}
            height={288}
          />
        ) : (
          <OffTheDietImage
            width={224}
            height={288}
          />
        )
      }

      <View
        style={{
          marginTop: 32,
        }}
      >
        <Button 
          onPress={handleNavigationToHome}       
          text="Ir para a página inicial"
        />
      </View>
    </Container>
  );
}
