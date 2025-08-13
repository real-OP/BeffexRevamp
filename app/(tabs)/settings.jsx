import MySwitch from '@/components/switch';
import React from 'react';
import { ScrollView, StyleSheet } from "react-native";
import { Card, Text } from 'react-native-paper';
export default function SettingsScreen(){
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return(
        <ScrollView styles={styles.container}>
            <Card style={styles.card}>
                <Card.Title variant="displayMedium" title="Appearance" />
                <Card.Content>
                    <Text variant="bodyMedium">Theme</Text>
                    <MySwitch value={isSwitchOn} onValueChange={onToggleSwitch} />
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

    }
})