
import { useNavigation } from '@react-navigation/native'

import { Highlight } from '@components/Highlight';
import { Container } from './styles';

import InsideTheDietImage from '@assets/Illustration-1.svg'
import OffTheDietImage    from '@assets/Illustration-2.svg'

import { Button } from '@components/Button';
import { View } from 'react-native';

export function Feedback() {
  const navigation = useNavigation()

  const insideTheDiet = false

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
