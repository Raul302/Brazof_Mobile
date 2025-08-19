import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  // return <Stack />;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex:1 }}>
    <Stack screenOptions={{ headerShown:false }} >
      {/* Example */}
      <Stack.Screen name="index" options={ { headerShown:true , title:'Menu de paginas [  Provisional ] ' } }></Stack.Screen>
     
    </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
