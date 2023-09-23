import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

//le style du pressed permet un effet au click de l'icone
const MaterialIconsHeader = ({ onPressIcon, iconName, iconColor }) => {
  return <Pressable 
        onPress={onPressIcon}
        style={({ pressed }) => pressed && styles.iconPressed}
    >
        <MaterialIcons 
            name={iconName}
            size={24} 
            color={iconColor} />
    </Pressable>
    
  
}
const styles = StyleSheet.create({
    iconPressed: {
        opacity: 0.2
    }
})

export default MaterialIconsHeader

