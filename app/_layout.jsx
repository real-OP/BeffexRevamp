import { ThemeProvider } from "@/context/ThemeContext";
import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        {/* Root container with dark background */}
        <View style={{ flex: 1, backgroundColor: "black" }}>

          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "black" },
            }}
          >
            {/* Include both (tabs) and other screens */}
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="test" />
          </Stack>
        </View>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
