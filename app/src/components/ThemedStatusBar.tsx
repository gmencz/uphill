import { ThemeMode, useThemeMode } from "@rneui/themed";
import { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";

export function ThemedStatusBar() {
  const { mode, setMode } = useThemeMode();
  const colorMode = useColorScheme();

  useEffect(() => {
    setMode(colorMode as ThemeMode);
  }, [colorMode]);

  return (
    <StatusBar
      backgroundColor="transparent"
      barStyle={mode === "light" ? "dark-content" : "light-content"}
      translucent
    />
  );
}
