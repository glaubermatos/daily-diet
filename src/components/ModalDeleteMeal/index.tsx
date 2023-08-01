import { Button } from '@components/Button';
import { Container, ModalActions, ModalTitle, Overlay } from './styles';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

export function ModalDeleteMeal({children}: Props) {
  return (
    <Overlay>
      <Container>
        <ModalTitle>
          Deseja realmente excluir o registro da refeição?
        </ModalTitle>

        <ModalActions>
          {children}
        </ModalActions>
      </Container>
    </Overlay>
  );
}

