import { Text, TouchableOpacityProps } from 'react-native';
import { Container, ButtonTypeStyleProps, Label, IconPlus, IconPencilSimpleLine, IconTrash } from './styles';

import { Plus } from 'phosphor-react-native'
import { ReactNode } from 'react';

type Props = TouchableOpacityProps & {
  text: string;
  icon?: "add" | "edit" | "delete";
  type?: ButtonTypeStyleProps;
}

export function Button({text, icon, type = "PRIMARY", ...rest}: Props) {
  let Icon;

  switch (icon) {
    case "add":
        Icon = <IconPlus type={type} />
        break;
  
    case "edit":
        Icon = <IconPencilSimpleLine type={type} />
        break;
  
    case "delete":
        Icon = <IconTrash type={type} />
        break;
  }

  return (
    <Container
      type={type}
      {...rest}
    >
        {icon && Icon}

        <Label
          type={type}
        >
          {text}
        </Label>
    </Container>
  );
}
