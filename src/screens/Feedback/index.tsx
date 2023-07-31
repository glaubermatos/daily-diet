
import { Highlight } from '@components/Highlight';
import { Container } from './styles';

import InsideTheDietImage from '@assets/Illustration-1.svg'
import OffTheDietImage    from '@assets/Illustration-2.svg'

import { Button } from '@components/Button';
import { View } from 'react-native';

type Props = {
  insideTheDiet: boolean
}

export function Feedback({ insideTheDiet = true  }: Props) {
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
          text="Ir para a página inicial"
        />
      </View>
    </Container>
  );
}
