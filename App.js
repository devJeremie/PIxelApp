import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Home from './screens/Home';
import Photo from './screens/Photo';
import Portfolio from './screens/Portfolio';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  InriaSans_300Light,
  InriaSans_300Light_Italic,
  InriaSans_400Regular,
  InriaSans_400Regular_Italic,
  InriaSans_700Bold,
  InriaSans_700Bold_Italic,
} from '@expo-google-fonts/inria-sans';

//Keep the splashScreen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontLoaded] = useFonts({
  InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
  })
  //si la font est chargé dans assets
  /* "InriaSans_bold":require('Le chemin de la font')*/


  if (!fontLoaded) {
    return undefined
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Portfolio' component={Portfolio} />
        <Stack.Screen name='Photo' component={Photo} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

