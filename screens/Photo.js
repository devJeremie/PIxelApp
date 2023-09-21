import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/AppStyles'

const Photo = ( { navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Photo</Text>
      <Button 
        onPress={() => navigation.goBack()}
        title='Vers Portfolio'
      />
      <Button 
        onPress={() => navigation.navigate('Home')}
        title='Vers Home'
      />
    </View>
  )
}

export default Photo

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'orange',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  text : {
      fontFamily: 'InriaSans_700Bold_Italic',
      fontSize: 20,
    }
})