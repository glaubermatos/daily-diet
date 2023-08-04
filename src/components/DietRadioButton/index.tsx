import { Dimensions } from 'react-native';
import { Container, DietRadioButtonTypeStyleProps, Label, RadioButton, RadioGroud, Status, Text } from './styles';
import { useState } from 'react';
import { Button } from '@components/Button';

type Props = {
  insideTheDiet: boolean;
  onSwitchInsideTheDiet: (insideDiet: boolean) => void;
}

export function DietRadioButton({insideTheDiet, onSwitchInsideTheDiet}: Props) {
  const windowWidth = Dimensions.get('window').width;

  return (
    <Container>
        <Label>Está dentro da dieta?</Label>
        
        <RadioGroud>
          <RadioButton
            onPress={() => onSwitchInsideTheDiet(true)}
            style={{ width: ((windowWidth / 2) - 30)}}
            isActive={insideTheDiet ? true : false}
            type="PRIMARY"  
          >
            <Status
              type="PRIMARY"
            />

            <Text>
              Sim
            </Text>
          </RadioButton>

          <RadioButton
            onPress={() => onSwitchInsideTheDiet(false)}
            style={{ width: ((windowWidth / 2) - 30)}}
            isActive={insideTheDiet ? false : true}
            type="SECONDARY"  
          >
            <Status
              type="SECONDARY"
            />

            <Text>
              Não
            </Text>
          </RadioButton>
        </RadioGroud>
    </Container>
  );
}

