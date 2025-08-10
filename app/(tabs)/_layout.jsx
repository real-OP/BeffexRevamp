import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import { useContext } from 'react';

export default function TabsLayout() {
  const {theme} = useContext(ThemeContext);

  return (
    <Tabs screenOptions={{tabBarActiveTintColor:"black"}}>
      <Tabs.Screen name="home" options={{title: "Home", tabBarIcon: ()=>(<FontAwesome5 name="home" size={24} color={focused ? theme.iconActiveColor : iconInactiveColor} />)}} />
      <Tabs.Screen name="addtask" options={{title: "Add", tabBarIcon: ()=>(<Entypo name="add-to-list" size={24} color="black" />)}} />
      <Tabs.Screen name="progress" options={{title: "Progress" , tabBarIcon: ()=>(<MaterialCommunityIcons name="progress-star" size={24} color="black" />)}} />
      <Tabs.Screen name="settings" options={{title: "Settings" , tabBarIcon: ()=>(<Ionicons name="settings-sharp" size={24} color="black" />)}} />
    </Tabs>
  )
}
