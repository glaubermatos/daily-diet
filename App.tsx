import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native';

import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito'

import * as Icon from 'phosphor-react-native' 

import defaultTheme from './src/theme/defaultTheme';
import { styled } from 'styled-components/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <Icon.AngularLogo weight='fill' size={64} color={defaultTheme.COLORS.RED_DARK} />
      <Text style={{fontSize: defaultTheme.FONT_SIZE._2XL, fontFamily: defaultTheme.FONT_FAMILY.BOLD}}>Glauber Matos</Text>
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: '#fff';
  align-items: center;
  justify-content: center;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
