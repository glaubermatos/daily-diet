import { Dimensions } from 'react-native';
import { Container, DietRadioButtonTypeStyleProps, Label, RadioButton, RadioGroud, Status, Text } from './styles';
import { useState } from 'react';
import { Button } from '@components/Button';

export function DietRadioButton() {
  const windowWidth = Dimensions.get('window').width;

  return (
    <Container>
        <Label>Está dentro da dieta?</Label>
        
        <RadioGroud>
          <RadioButton
            style={{ width: ((windowWidth / 2) - 30)}}
            isActive={true}
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
            style={{ width: ((windowWidth / 2) - 30)}}
            isActive={false}
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

