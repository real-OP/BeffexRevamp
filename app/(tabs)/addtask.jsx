import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
export default function AddtaskScreen(){
    const {theme} = useContext(ThemeContext);

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: theme.backgroundColor}}>
            <Text style={{color: theme.textColor, fontSize: 18}}>Add Task Screen</Text>

        </View>
    )

    
}