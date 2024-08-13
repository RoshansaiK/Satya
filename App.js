import React from "react";
import { WebView } from "react-native-webview";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://www.satyamdaily.net/" }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
