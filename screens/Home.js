import { 
  Button, FlatList, StyleSheet,
  Text, View, Image, Pressable }
from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/AppStyles';
import Colors from '../styles/Colors';
import PressableItems from '../components/PressableItems';
import { DATA } from '../data/usersData';
//on destructure navigation
const Home = ({ navigation }) => {
  



const handlePress = () => {
  navigation.navigate('Portfolio')
  //on peut utiliser la methode push 
  //navigation.push('Portfolio')
}

const renderProfiles = ({ item }) => {
  return <PressableItems 
    item={item}
    //handleNavigate={() => navigation.navigate('Portfolio', item)}
    
  />
}   
//si envie de fiare un bouton pour ouvrir le drawer
/*const handleDrawer = () => {
  navigation.toggleDrawer();
} A placer avant la flatlist
<Button 
        title='Drawer'
        onPress={handleDrawer}
      />
*/

//la data en item
  return (
    <View style={globalStyles.container}>
      
      <FlatList
        data={DATA}
        renderItem={renderProfiles}
        keyExtractor={(item) => item.id }
      />
    </View>
  )
}

export default Home

