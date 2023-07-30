import { useState } from 'react';
import { Container, Label, Input as TextInput } from './styles';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  label: string;
}

export function Input({label, ...rest}: Props) {
  const [isFocused, setIsFocused] = useState(false)

 const  handleFocus = () => setIsFocused(true)
 const  handleBlur = () => setIsFocused(false)

  return (
    <Container>
        <Label>{label}</Label>
        <TextInput 
          onFocus={handleFocus}
          onBlur={handleBlur}
          isFocused={isFocused}
          blurOnSubmit
          style={{textAlignVertical: rest.multiline ? 'top' : 'center'}}
          {...rest}
        />
    </Container>
  );
}
