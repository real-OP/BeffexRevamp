import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import { TextInput, Card, Text, RadioButton, Button, Divider, IconButton } from "react-native-paper";
import {LinearGradient} from 'expo-linear-gradient';
import { colors } from "@/constants/colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";


export default function HomeScreen(){
    const { theme, colorScheme, setColorScheme } = useContext(ThemeContext);
    const styles = createStyles(theme , colorScheme);
    return(
        <LinearGradient
        // Background Linear Gradient
        colors={["#A259FF", "#3F87F5"]}
        start= {{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        style={styles.gradientCard}
      >
            <View style={{flexDirection: 'row' , alignItems: 'center' , justifyContent: 'space-evenly'}}>    
            <View style={[styles.glowEffect, styles.purpleGlow,]}>
                <FontAwesome5 name="fire" size={26} color='white' />
            </View>
            <Text style= {{color: theme.textColor , }}>Current Streak</Text>
            <Pressable>
                <Text style= {{color: theme.textColor , fontWeight: '300'}}>
                    View Progress
                </Text>
            </Pressable>
            
            </View> 

      </LinearGradient>

    )

}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {

    },
    gradientCard:{
        borderRadius: 12,
        margin: 16,
        padding: 16,
        
    },
    streakCard:{
        backgroundColor: 'transparent',
        elevation: 0,   
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
    purpleGlow: {
        backgroundColor: '#A259FF',
    },
    
})
}