import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function Nfc_screen() {

  return (

    // View container
    <View
      style={styles.container}
    >


      <View style={styles.view_separator}>
        <Shadow distance={20} paintInside={true} startColor={'#1fff62a2'} offset={[0, 5]}>

          <View style={styles.view_card}>
            <Text style={styles.text}>
              PULSERA DE EVENTO NO DETECTADA ...
            </Text>
              <Image
                source={require('../images/central_nfc_prohibited.png')
                }
                resizeMode='contain'
                style={{
                  width: 50,
                  height: 50,
                }}
              />

          </View>
        </Shadow>


      </View>


         {/* Another view separator */}
          <View style={styles.view_separator}>
            <Shadow distance={4} startColor={'#1FFF62'} endColor={'#ff00ff10'} offset={[0, 2]}>
            <TouchableOpacity 
            style={{backgroundColor:'#000000', width:300,height:50,justifyContent:'center',alignItems:'center', borderRadius: 15}}>
            <Text style={{color:'#FFFFFF',fontWeight:600}}>Vincular</Text>
          </TouchableOpacity>
            </Shadow>

          </View>
        {/* End view separator */}



    </View>


    // End view Container
  );
}


// Styles 

const styles = StyleSheet.create({

  text: {
    justifyContent:'center',
    textAlign:'center',
    color: '#ffffffff',
    fontSize: 15,
    fontWeight:'bold',
    letterSpacing:3
  },
  view_card: {
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#1FFF62',
    width: '100%',
    padding: 30,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'rgba(12, 12, 12, 0.14)',


  },

  view_separator: {
    marginTop: '15%',
    width: '70%',
    alignItems: 'center',
    // height:'5%'
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  }
})
