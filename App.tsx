import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/utils/theme";
import loadFonts from "./src/helpers/fonts";
import { SafeAreaView } from "react-native";
import Login from "./src/screens/login";

export default function App() {
  if (!loadFonts()) return;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1, paddingVertical: 20 }}>
        <Login />
      </SafeAreaView>
    </ThemeProvider>
  );
}
