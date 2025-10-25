import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Pressable  } from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from '@/components/statusbar';

export default function HomeScreen() {
  const { theme, colorScheme, setColorScheme } = useContext(ThemeContext);
  const styles = createStyles(theme, colorScheme);
  const router = useRouter();
  const [iconName, setIconName] = useState("sun");

  useEffect(() => {
    const currentHour = new Date().getHours();
    setIconName(currentHour >= 6 && currentHour <= 18 ? "sun" : "moon");
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <CustomStatusBar />

      <SafeAreaView style={{ flex: 1, backgroundColor: theme.paperColor }}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <View>
            <View
              style={{
                padding: 16,
                backgroundColor: theme.headerColor,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text variant="titleLarge" style={{ color: theme.textColor }}>
                  Today
                </Text>
                <Text variant="titleSmall" style={{ color: theme.textColor }}>
                  Wednesday, August 6
                </Text>
              </View>
              <Feather name={iconName} size={24} color={theme.textColor} />
            </View>

            <LinearGradient
              colors={["#A259FF", "#3F87F5"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.gradientCard]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <View style={[styles.glowEffect, styles.purpleGlow]}>
                  <FontAwesome5 name="fire" size={26} color="white" />
                </View>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Current Streak
                </Text>
                <Pressable onPress={() => router.push("/(tabs)/progress")}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      borderColor: "white",
                      borderWidth: 1,
                      padding: 3,
                      borderRadius: 4,
                    }}
                  >
                    <Feather name="calendar" size={24} color={"white"} />
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        marginLeft: 5,
                      }}
                    >
                      View Progress
                    </Text>
                  </View>
                </Pressable>
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.paperColor,
    },
    gradientCard: {
      borderRadius: 12,
      margin: 16,
      padding: 16,
      borderColor: theme.borderColor,
      borderWidth: 2,
    },
    glowEffect: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#52E09B",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 8,
      elevation: 6,
    },
    purpleGlow: {
      backgroundColor: "#B57EDC",
    },
  });
}
