import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/utils/theme";
import loadFonts from "./src/helpers/fonts";
import Input from "./src/components/common/input/input";

export default function App() {
  if (!loadFonts()) return;

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Input />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
