import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import { globalStyles } from '../styles/AppStyles'

const Portfolio = ({ navigation, route }) => {

  useEffect(() => {
    return () => {
      console.log('Portfolio démonté')
    };
  },[]);

  const name =route.params.name;
  const country =route.params.country;
  const totalImg =route.params.totalImg;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Portfolio de ${name}`,
      
    })
  },[navigation])

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{name}</Text>
      <Text style={globalStyles.text}>{country}</Text>
      <Text style={globalStyles.text}>{totalImg}</Text>
      <Button 
        onPress={() => navigation.navigate('Photo')}
        title='Vers Photo'
      />
    </View>
  )
}

export default Portfolio


