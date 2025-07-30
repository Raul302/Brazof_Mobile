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
      <Stack.Screen name="login" options={ { headerShown:true ,  title:'Login' } }></Stack.Screen>
      <Stack.Screen name="home" options={ { headerShown:true , title:'Home' } }></Stack.Screen>
      <Stack.Screen name="profile" options={ { headerShown:true , title:'Profile' } }></Stack.Screen>
      <Stack.Screen name="inbox" options={ { headerShown:true , title:'Inbox' } }></Stack.Screen>
    </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
