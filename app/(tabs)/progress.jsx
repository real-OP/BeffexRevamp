import { ThemeContext } from "@/context/ThemeContext";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

export default function StatsScreen() {
  const { theme, colorScheme } = useContext(ThemeContext);
  const styles = createStyles(theme, colorScheme);

  return (
    <View style={styles.container}>
      {/* Row with two cards */}
      <View style={styles.row}>
        <Card style={[styles.card, { backgroundColor: theme.curStreakCardColor }]}>
          <Card.Title
            title="Daily Streak"
            titleVariant="titleMedium"
            titleStyle={styles.title}
            left={() => (
            <View style={[styles.glowEffect, styles.purpleGlow]}>
              <FontAwesome5 name="fire" size={26} color='white' />
            </View>)}
            leftStyle={{ marginRight: 1 }}
          />
        </Card>

        <Card style={[styles.card, { backgroundColor: theme.highestStreakCardColor }]}>
          <Card.Title
            title="Best Streak"
            titleVariant="titleMedium"
            titleStyle={styles.title}
            left={() => (
              <View style={[styles.glowEffect, styles.blueGlow]}>
                <Foundation name="target" size={28} color='white'/>
              </View>)}
            leftStyle={{ marginRight: 1 }}
          />
        </Card>
      </View>

      {/* Full width card */}
      <Card style={[styles.fullCard, { backgroundColor: theme.tasksCompletedCardColor , borderWidth:2 , borderColor: theme.borderColor }]}>
        <Card.Title
          title="Total Tasks Completed"
          titleVariant="titleMedium"
          titleStyle={styles.title}
          left={() => (
            <View style={[styles.glowEffect, styles.greenGlow]}>
              <MaterialCommunityIcons name="progress-star" size={26} color='white' />
            </View>
          )}
          leftStyle={{ marginRight: 1 }}
        />
      </Card>
    </View>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.paperColor,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 16,
    },
    card: {
      flex: 1,
      marginHorizontal: 6,
      borderRadius: 12,
      elevation: 3,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: theme.borderColor,
    },
    fullCard: {
      width: "100%",
      borderRadius: 12,
      elevation: 3,
      paddingVertical: 8,
      marginTop: 8,
    },
    title: {
      fontWeight: "600",
      color: "#ddd7d7ff",
      
    },
    glowEffect: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#52E09B',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 8,
      elevation: 6, // for Android glow
    },
    greenGlow: {
      backgroundColor: '#52E09B',
    },
    purpleGlow: {
       backgroundColor: '#B57EDC',
    },
    blueGlow: {
      backgroundColor: '#5A94FF',
    },


  });
}
