import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/AppStyles'
import { useLayoutEffect } from 'react'

const Photo = ( { navigation, route }) => {

  const url = route.params.url;
  const title = route.params.title;
  const photoDesc = route.params.photoDesc;
//on peut tout a fait le destructurer
//const {url, title, photoDesc} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({title: title})
  },[navigation, title])

  return (
    <ScrollView style={globalStyles.container}>
      <Image 
        style={styles.selectedImage}
        source={{uri: url}}
      />
      <View style={styles.photoDescription}>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={styles.textDescription}>{photoDesc}</Text>
        <Text style={styles.textDescription}>{photoDesc}</Text>
      </View>
      <Button 
        onPress={() => navigation.goBack()}
        title='Vers Portfolio'
      />
      <Button 
        onPress={() => navigation.navigate('Home')}
        title='Vers Home'
      />
    </ScrollView>
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
  selectedImage: {
    width: '100%',
    height: 300,
  },
  photoDescription: {
    padding: 15,
    fontSize: 25,
    fontFamily: 'InriaSans_400Regular',
  },
  textDescription:{
    fontFamily: 'InriaSans_400Regular',
    fontSize: 20,
    padding: 9,
  }
})