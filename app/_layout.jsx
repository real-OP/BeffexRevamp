import { ThemeProvider } from "@/context/ThemeContext";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent = {true}
        />
        <Stack>
          <Stack.Screen name="(tabs)" options={{headerShown: false}}  />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
