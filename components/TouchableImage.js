import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TouchableImage = ({imgUrl}) => {
  return (
    <View style={styles.photoContainer}>
      <ImageBackground
        source={{uri: imgUrl}}
        style={styles.bgPhoto}
      >
        <View>

        </View>
      </ImageBackground>
    </View>
  )
}

export default TouchableImage

const styles = StyleSheet.create({
    photoContainer: {
        width: '100%',
        height: 350,
        marginBottom: 19,
    },
    bgPhoto: {
        width: '100%',
        height: '100%',
    }
})