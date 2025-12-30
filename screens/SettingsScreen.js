import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>App Version 1.0</Text>
      <Text style={styles.text}>TravelApp - React Navigation Lab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 6 },
});
