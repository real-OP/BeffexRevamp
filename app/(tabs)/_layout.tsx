import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{title: "home"}} />
      <Tabs.Screen name="progress" options={{title: "progress"}} />
      <Tabs.Screen name="settings" options={{title: "settings"}} />
    </Tabs>
  )
}
