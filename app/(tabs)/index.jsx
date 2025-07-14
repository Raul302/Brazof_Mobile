import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";


export default function Index() {

  return (
    <View style= { styles.container }>

    <Link href={"/login"} style = { styles.menu_text }>
      - Login page example
    </Link>

     <Link href={"/profile"} style = { styles.menu_text }>
      - Profile page example
    </Link>

     <Link href={"/inbox"} style = { styles.menu_text }>
     - Inbox page example
    </Link>

     <Link href={"/home"} style = { styles.menu_text }>
      - Home page example
    </Link>
   
    </View>
  )


  
  
}


// Adding styles
const styles = StyleSheet.create({
  menu_text:{
  color:'#FFFFFF',
  marginTop:10,
  height:20,
  width:200,
  paddingLeft:5,
  justifyContent:'center',
  backgroundColor:'#fd1231ff'

  },
  container: {
  // backgroundColor: '#000000',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent:'center'
}
})