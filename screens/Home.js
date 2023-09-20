import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//on destructure navigation
const Home = ({ navigation }) => {
  


const handlePress = () => {
  navigation.navigate('Portfolio')
  //on peut utiliser la methode push 
  //navigation.push('Portfolio')
}

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button 
        onPress={handlePress}
        title='Vers Portfolio'
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text : {
        fontFamily: 'InriaSans_700Bold_Italic',
        fontSize: 20,
    }
})