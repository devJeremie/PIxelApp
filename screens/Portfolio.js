import { StyleSheet, Text, View, Button, Platform } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import { globalStyles } from '../styles/AppStyles'
import Colors from '../styles/Colors'


const Portfolio = ({ navigation, route }) => {

  useEffect(() => {
    return () => {
      console.log('Portfolio démonté')
    };
  },[]);

  const name =route.params.name;
  const country =route.params.country;
  const totalImg =route.params.totalImg;
  const favColor =route.params.favColor;

  const handlePress = () =>{
    //HTTP Request si besoin
    return alert('Cliqué')
  }
//Différent affichage si IOS ou ANDROID
//backgroundColor: Platform.OS === 'android' ? Colors.lightBrown : Colors.white,
  
useLayoutEffect(() => {
    navigation.setOptions({
      //title: `Portfolio de ${name}`,
      //headerStyle: {
        //backgroundColor: favColor,
        headerRight: () => <Button title='Right' onPress={handlePress}/>
    })
  },[navigation])

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{name}</Text>
      <Text style={globalStyles.text}>{country}</Text>
      <Text style={globalStyles.text}>{totalImg}</Text>
      <Text style={globalStyles.text}>{favColor}</Text>
      <Button 
        onPress={() => navigation.navigate('Photo')}
        title='Vers Photo'
      />
    </View>
  )
}

export default Portfolio


