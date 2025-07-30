import { StyleSheet, View } from "react-native";

export default function Nfc_screen() {

  return (

    // View container
    <View
      style={styles.container}
    >

      <View style={ styles.view_card }>
        <Text>
          Vinculando ...
        </Text>

      </View>

    </View>

    // End view Container
  );
}


// Styles 

const styles = StyleSheet.create({
  view_card:{

  },
  
 

  container: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  }
})
