import { ActivityIndicator, StatusBar} from 'react-native';
import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito'

import { Feedback } from '@screens/Feedback';

import { ThemeProvider } from 'styled-components/native';
import defaultTheme from './src/theme/defaultTheme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <Feedback />  : <ActivityIndicator />}
    </ThemeProvider>
  );
}