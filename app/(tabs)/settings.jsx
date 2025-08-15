import MySwitch from '@/components/switch';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Appearance, ScrollView, StyleSheet, View } from "react-native";
import { Card, Text } from 'react-native-paper';


export default function SettingsScreen(){
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const deviceColorScheme = Appearance.getColorScheme();
    return(
        <ScrollView styles={styles.container}>
            <Card style={styles.card}>
                <Card.Title titleStyle= {{fontWeight: '600'}} titleVariant="titleLarge" title="Appearance" />
                <Card.Content>
                    <View style = {styles.rowContainer}>
                        {deviceColorScheme === 'dark' ?
                            <Feather name="sun" size={24} color="black" />
                            :
                            <Feather name="moon" size={24} color="black" />
                        }
                        <View style = {styles.textContainer}>
                            <Text variant= "bodyLarge">{deviceColorScheme === 'dark'? 'Light Mode' : 'Dark Mode'}</Text>
                            <Text variant = "bodySmall">{deviceColorScheme === 'dark' ? 'Switch to light mode': 'Switch to dark mode'}</Text>
                        </View>
                        <MySwitch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                </Card.Content>
            </Card>
        </ScrollView>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    card: {
        marginTop: '10%',
        width: '90%',
        maxWidth: 400,
        padding: 16,
        borderRadius: 10,
        elevation: 3,
        alignSelf: 'center'

    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'column',
        marginRight: 16,
    },
})
