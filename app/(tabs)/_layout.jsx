import { ThemeContext } from "@/context/ThemeContext";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import { useContext } from 'react';

export default function TabsLayout() {
  const {theme} = useContext(ThemeContext);

  return (
    <Tabs screenOptions={{tabBarActiveTintColor: theme.iconActiveColor , tabBarInactiveTintColor: theme.iconInactiveColor}}>
      <Tabs.Screen name="home" options={{title: "Home", tabBarIcon: ({color})=>(<FontAwesome5 name="home" size={24} color={color} />)}} />
      <Tabs.Screen name="addtask" options={{title: "Add", tabBarIcon: ({color})=>(<Entypo name="add-to-list" size={24} color={color} />)}} />
      <Tabs.Screen name="progress" options={{title: "Progress" , tabBarIcon: ({color})=>(<MaterialCommunityIcons name="progress-star" size={24} color={color} />)}} />
      <Tabs.Screen name="settings" options={{title: "Settings" , tabBarIcon: ({color})=>(<Ionicons name="settings-sharp" size={24} color={color} />)}} />
    </Tabs>
  )
}
