import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/utils/theme";
import loadFonts from "./src/helpers/fonts";
import Input from "./src/components/common/input/input";
import { useState } from "react";

export default function App() {
  if (!loadFonts()) return;

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Input label="E-mail" helperText="Preencha seu e-mail" />
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
