import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function Login() {

  const [credentials, set_credentials] = useState({ username: '', password: '' })
  return (

    // View container
    <View
      style={styles.container}
    >

{/* Image */}
      <Image
        style={styles.logo}
        source={require('../images/logowithouthbrackground.png')}
      />
      {/* End Image */}

      {/* Text */}
      <Text style={styles.textHeader}>Login</Text>
            <Text style={styles.normalText}>Discover an amazing experience with Us</Text>

    {/* End Texts */}


{/* View container content */}
      <View style={styles.container_content}>


{/* View separator */}
        <View style={styles.view_separator}>

          <Shadow distance={10} startColor={'#1FFF62'} endColor={'#ff00ff10'} offset={[0, 2]}>
              <TouchableOpacity 
            style={{backgroundColor:'#000000', width:300,height:50,justifyContent:'center',alignItems:'center', borderRadius: 15}}>
            <Text style={{color:'#FFFFFF',fontWeight:600}}>Login</Text>
          </TouchableOpacity>


          </Shadow>

          </View>

          {/* End View separator */}





        

        </View>
        {/* End View content container */}




    </View>

    // End view Container
  );
}


// Styles 

const styles = StyleSheet.create({
 
  container_content: {
    // backgroundColor: '#4b3ccfff',
    width: '77%',
    marginTop:'5%'

  },
  text_with_shadow: {
    color: '#FFFFFF',
    marginTop: '5%',
    marginLeft: 'auto',
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,

  },
  view_separator: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
    // height:'5%'
  },
  input: {
    width: 300,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,

    // // Shadows properties
    // shadowColor:'#1FFF62',
    //  shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
    // elevation: 16, // Android

    // // end shadow Properties


  },
  normalText: {
    marginTop: '20%',
    width: '70%',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
      textShadowColor: "#1FFF62",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },

  textHeader: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold'
  },

  logo: {
    width: 200,
    height: 200,
    marginTop: '10%'
  },

  container: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  }
})
