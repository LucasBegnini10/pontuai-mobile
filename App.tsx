import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Button from "./src/components/common/button/index";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/utils/theme";
import loadFonts from "./src/helpers/fonts";
import { useEffect, useState } from "react";

export default function App() {
  if (!loadFonts()) return;

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Button title="Clique aqui" onClick={() => null} />
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
  },
});
