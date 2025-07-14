import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'

export default function TabLayout() {
  return (

          
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle:{
        borderColor:'#1FFF62',
        position:'absolute',
        backgroundColor:'#2E2E2F',
        borderTopWidth:5,
        shadowColor: "#1FFF62",

        ...styles.shadow 
      }
    }}>

      <Tabs.Screen
      name="index"
      
      />

      <Tabs.Screen
      name="search"
      />

      <Tabs.Screen
      name="inbox"
      />

      <Tabs.Screen
      name="profile"
      />

     

    </Tabs>

  )
}

const styles = StyleSheet.create({
  shadow:{
    shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 50,
  }
})
