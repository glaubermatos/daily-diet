import {Dimensions} from 'react-native';
import { Input } from '@components/Input';
import { Container, Content, Form, Row } from './styles';
import { Header } from '@components/Header';
import { DietRadioButton } from '@components/DietRadioButton';
import { Button } from '@components/Button';

export function NewMeal() {
  const windowWidth = Dimensions.get('window').width;

  return (
    <Container>
      <Header
        title="Nova refeição"
      />

      <Content>
        <Form>
          <Input
            label="Nome"
          />

          <Input
            label="Descrição"
            multiline
            numberOfLines={5}
          />

          <Row>
            <Input
              style={{width: ((windowWidth / 2) - 36) }}
              label="Data"
            />

            <Input
              style={{width: ((windowWidth / 2) - 36) }}
              label="Hora"
            />
          </Row>

          <DietRadioButton />
        </Form>
        
        <Button
          text='Cadastrar refeição'
        />
      </Content>

    </Container>
  );
}
