import { StyleSheet, Text, View, Button, Platform, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import { globalStyles } from '../styles/AppStyles'
import Colors from '../styles/Colors'
import { MaterialIcons } from '@expo/vector-icons'
import MaterialIconsHeader from '../components/MaterialIconsHeader'
import TouchableImage from '../components/TouchableImage'


const Portfolio = ({ navigation, route }) => {

  useEffect(() => {
    return () => {
      console.log('Portfolio démonté')
    };
  },[]);

  const name =route.params.name;
  const country =route.params.country;
  const favColor =route.params.favColor;
  const profilImg =route.params.img;
  const desc =route.params.desc;
  const photoArray =route.params.photos;

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
        //Permet de mettre un icone clickable a droite pour la gauche se sera headerLeft
        headerRight: () => <MaterialIconsHeader 
          iconName='info-outline'
          iconColor='white'
          onPressIcon={handlePress}
          
        />
    })
  },[navigation])

  const selectPhoto = (photo) => {
    navigation.navigate('Photo', photo)
  }
  /*si besoin d'un bouton changement de page
  <Button 
        onPress={() => navigation.navigate('Photo')}
        title='Vers Photo'
      />*/
  return (
    <ScrollView style={globalStyles.container}>
      <View style={{backgroundColor: favColor, ...styles.profilInfos}}>
        <Image 
          style={styles.smallProfilImg}
          source={{uri: profilImg}}
        />
        <Text style={styles.profilName}>{name}</Text>
      </View>
      <View style={styles.profilDescription}>
        <Text style={styles.titleBioText}>Bio : </Text>
        <Text style={styles.textBio}>{desc}</Text>
      </View>
      <View>
        {
          photoArray.map( photo => (
            <TouchableImage 
              key={photo.id}
              imgUrl={photo.url}
              imgTitle={photo.title}
              onSelectPhoto={ () => selectPhoto(photo)}
            />
          ))
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  profilInfos: {
    alignItems: 'center',
    padding: 10,
  },
  smallProfilImg: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    margin: 9,
    borderWidth: 6,
    borderColor: Colors.white,
  },
  profilName: {
    fontFamily: 'InriaSans_700Bold',
    color: Colors.white,
    fontSize: 25,
  },
  profilDescription: {
    backgroundColor: Colors.ghost,
    padding: 15,
    fontSize: 25,
    fontFamily: 'InriaSans_400Regular',
  },
  titleBioText: {
    fontSize: 25,
    padding: 9,
    fontFamily: 'InriaSans_700Bold',
  },
  textBio: {
    fontFamily: 'InriaSans_400Regular',
    fontSize: 20,
    padding: 9,
  }
})

export default Portfolio


