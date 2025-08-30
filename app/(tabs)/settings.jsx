import MySwitch from '@/components/switch';
import { ThemeContext } from '@/context/ThemeContext';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useContext } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { Card, Text } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



export default function SettingsScreen(){

    const {theme,colorScheme ,setColorScheme} = useContext(ThemeContext);
    const styles = createStyles(theme , colorScheme);
    
    const isSwitchOn = colorScheme === 'dark';
  
    const onToggleSwitch = () => {
        setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
    };

    return(

        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: theme.paperColor }}>
                <StatusBar
                backgroundColor={theme.backgroundColor}
                barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
            />
            <ScrollView style = {styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar  backgroundColor='black' barStyle='light-content'/>
                <View style = {styles.container}>
                <Card style={styles.card}> 
                    <Card.Title titleStyle= {{fontWeight: '600',color: theme.textColor}} titleVariant="titleLarge" title="Appearance" />
                    <Card.Content>
                        <View style = {styles.rowContainer}>
                            {colorScheme === 'dark' ?
                                <Feather name="sun" size={24} color={theme.textColor} />
                                :
                                <Feather name="moon" size={24} color={theme.textColor} />
                            }
                            <View style = {styles.textContainer}>
                                <Text style = {styles.text} variant= "bodyLarge">{colorScheme === 'dark'? 'Dark Mode' : 'light Mode'}</Text>
                                <Text style = {styles.text} variant = "bodySmall">{colorScheme === 'dark' ? 'Switch to light mode': 'Switch to dark mode'}</Text>
                            </View>
                            <MySwitch value = {isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Title titleStyle= {{fontWeight: '600',color: theme.textColor }} titleVariant="titleLarge" title="Data Management" />
                    <Card.Content>
                        <View style = {styles.dataManagementItems}>
                            <Entypo style= {{padding: 5, marginRight: 10 , color:theme.textColor }} name="share" size={24} color={theme.iconColor} />
                            <View style = {{flexDirection: 'column', alignSelf: 'center' ,}}>
                                <Text style = {styles.text}>Share Tasks</Text>
                                <Text style = {styles.text} variant = "bodySmall">Export your tasks</Text>

                            </View>
                        </View>
                        <View style = {styles.dataManagementItems}>
                            <MaterialIcons style= {{padding: 5, marginRight: 10}} name="delete-forever" size={24} color="rgba(255, 0, 0, 1)" />
                            <View style =  {{flexDirection: 'column', alignSelf: 'center' ,}}>
                                <Text style={{color: 'red'}}>Clear All Tasks</Text>
                                <Text style = {styles.text} variant = "bodySmall">This action cannot be undone</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </View>
            
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
        
        
    );
    
}
function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        container: {
            flexGrow: 1,
            padding: 16,
            backgroundColor: theme.paperColor,
        },
        card: {
            marginTop: '10%',
            width: '90%',
            maxWidth: 400,
            padding: 16,
            borderRadius: 10,
            elevation: 3,
            alignSelf: 'center',
            backgroundColor: theme.backgroundColor,
    
        },
        rowContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8,
        },
        textContainer: {
            flexDirection: 'column',
            marginRight: 16,
            padding: 5,
        },
        dataManagementItems:{
            marginBlock:10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 8,
            borderRadius: 12,
            borderColor:'gray',
            borderWidth: 1,
            
        },
        text:{
            color: theme.textColor,
            
        }
    });
}


