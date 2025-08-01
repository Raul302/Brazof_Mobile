
import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";


export default function profile() {
  
  const route = useRoute()

  
  return (
    <View><Text>{ route.name } </Text></View>
  )
}
