import { Button, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Home from './screens/Home';
import Photo from './screens/Photo';
import Portfolio from './screens/Portfolio';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  useFonts,
  InriaSans_300Light,
  InriaSans_300Light_Italic,
  InriaSans_400Regular,
  InriaSans_400Regular_Italic,
  InriaSans_700Bold,
  InriaSans_700Bold_Italic,
} from '@expo-google-fonts/inria-sans';
import Colors from './styles/Colors';
import Faq from './screens/Faq';

//Keep the splashScreen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
//drawer dans le home
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.lightBrown
        },
        headerTintColor: Colors.white
      }}
    >
      <Drawer.Screen name='Home' component={Home} options={{ title: 'Accueil'}}/>
      <Drawer.Screen name='Faq' component={Faq} options={{ title: 'FAQ'}} />
    </Drawer.Navigator>
  );
}

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
//Création du stack
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'olive',
          },
          headerTintColor: Colors.white
        }}
      >
        <Stack.Screen 
          name='Drawer' 
          component={MyDrawer} 
          options={{
          //title: 'Accueil',
          headerShown: false
        }} />
        <Stack.Screen 
          name='Portfolio' 
          component={Portfolio} 
          options={({ route }) => {
            return {
              title: `Portfolio de ${route.params.name.toUpperCase()}` , 
              headerStyle: {
                backgroundColor: route.params.favColor,
            },
            
          }
        }} />
        <Stack.Screen name='Photo' component={Photo} options={{
          title: 'Photo',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

