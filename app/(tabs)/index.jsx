import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";


export default function Index() {
  

  const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

  const scroll_data = [1,2,3,4,5,6,7,8];

  return (
    <View style={styles.container}>

      <ScrollView>

        { scroll_data.map((scroll) => (
           
            <View>
                   {/* Card  */}
      <View style={styles.card}>

        {/* View image background */}
        <ImageBackground source={require('../images/pal_norte_background.jpg')
        } resizeMode="cover" style={styles.background_img}>

          {/* View top ranking */}

          <View style={styles.ranking_top}>
            <View>
              
            </View>
            <View>
              <Text style={{ color: '#FFFFFF' }}>

                4.1 (25,000) </Text>
            </View>
          </View>

          <View style={styles.details_bottom}>
            <View style={{ flexDirection: 'column', paddingTop: 10, paddingLeft: 10 }}>
              <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Torreon , Coahuila</Text>
              <View style={{ flexDirection: "row" ,paddingTop:10, justifyContent:'space-between' }}>
                <View>
                  <Text style={{ color: '#676D75' }}> COST </Text>
                  <Text style={{ color: '#FFFFFF' }}> $ 300 - 1800 </Text>
                </View>

                <View>
                  <Text style={{ color: '#676D75' }}> PLACE </Text>
                  <Text style={{ color: '#FFFFFF' }}> Torr , Coah </Text>
                </View>

                <View>
                  <Text style={{ color: '#676D75' }}> AVAILABLE </Text>
                  <Text style={{ color: '#FFFFFF' }}> Oct 24 - 26 </Text>
                </View>

              </View>
            </View>
          </View>



        </ImageBackground >
        {/* End View image background */}



      </View>
      {/* End Card */}

      <View style={{ marginTop:'5%'}}>

      </View>

            </View>
          
        ))}

      </ScrollView>


      
    </View>
  )




}


// Adding styles
const styles = StyleSheet.create({
  details_bottom: {
    backgroundColor: '#000000',
    width: '100%',
    height: '40%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  ranking_top: {
    backgroundColor: '#000000',
    width: '50%',
    height: '15%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    flexDirection: 'row',

  },
  background_img: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 15,
    //  paddingLeft:2,
    //  paddingRight:2

  },
  card: {
    width: '100%',
    height: Dimensions.get('window').height / 3,
    marginTop: '10%',
    backgroundColor: ' rgba(31, 255, 98, 0.66)',
    boxShadow: '0px 0px 10px 10px rgba(31, 255, 98, 0.66)',
    borderRadius: 15,
    paddingLeft: 5,
    paddingRight: 5

  },

  container: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    alignItems: 'center',

    // justifyContent:'center'
  }
})