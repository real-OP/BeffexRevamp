import { ThemeContext } from '@/context/ThemeContext';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';

export default function ProgressScreen(){
    const { theme,colorScheme } = useContext(ThemeContext);
    const styles = createStyles(theme , colorScheme)

    return(
        <View style={styles.container}>
            <View style = {{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                <Card style={[styles.card ,styles.curstreakcard, {backgroundColor: theme.curStreakCardColor} ]}>
                    <Card.Title titleStyle={{fontWeight: '600', color: '#ddd7d7ff'}} titleVariant="titleSmall" title="Current Streak" 
                    left= {(props) => <FontAwesome5 name="fire" size={24} color={theme.textColor} />}/>
                    <Card.Content>
                    </Card.Content>
                </Card>
                <Card style={[styles.card ,styles.beststreakcard, {backgroundColor: theme.highestStreakCardColor} ]}>
                    <Card.Title titleStyle={{fontWeight: '600', color: '#ddd7d7ff'}} titleVariant="titleSmall" title="Best Streak" 
                    left= {(props)=><Foundation name="target" size={24} color={theme.textColor} /> }/>
                    <Card.Content>
                    </Card.Content>
                </Card>
            </View>
            <View>
                <Card style={[styles.card , {backgroundColor: theme.tasksCompletedCardColor} ]}>
                    <Card.Title titleStyle={{fontWeight: '600', color: '#ddd7d7ff'}} titleVariant="titleSmall" title="Total Tasks Completed"
                    left= {(props) => <MaterialCommunityIcons name="progress-star" size={24} color={theme.textColor} />}/>
                    <Card.Content>
                    </Card.Content>
                </Card>
            </View>

        </View>
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
      borderWidth: 2,
      borderColor: theme.dividerColor,

    },
    curstreakcard:{
        maxWidth: '50%',
        marginRight: 10,
    },
    beststreakcard:{
        maxWidth: '50%',

    },
    taskcompletedcard:{ }
})
}