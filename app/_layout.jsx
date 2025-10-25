import { ThemeProvider } from "@/context/ThemeContext";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <StatusBar backgroundColor='black' barStyle='light-content' translucent={false}/>

        <Stack>
          <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}