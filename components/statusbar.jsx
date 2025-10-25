import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function CustomStatusBar() {
  const { colorScheme } = useContext(ThemeContext);

  const isDark = colorScheme === "dark";

  return (
    <StatusBar
      style={isDark ? "light" : "dark"} // bar content color
      backgroundColor={isDark ? "black" : "white"} // bar background color
      translucent={false}
    />
  );
}
