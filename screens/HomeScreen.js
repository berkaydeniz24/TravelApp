import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Guide</Text>
      <Text style={styles.subtitle}>Choose a destination:</Text>

      <View style={styles.buttonGroup}>
        <Button
          title="Go to Paris"
          onPress={() => navigation.navigate("Details", { place: "Paris", rating: 5 })}
        />
      </View>

      <View style={styles.buttonGroup}>
        <Button
          title="Go to London"
          onPress={() => navigation.navigate("Details", { place: "London", rating: 4 })}
        />
      </View>

      <View style={styles.buttonGroup}>
        <Button
          title="Go to Istanbul"
          onPress={() => navigation.navigate("Details", { place: "Istanbul", rating: 5 })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 8, textAlign: "center" },
  subtitle: { fontSize: 16, marginBottom: 16, textAlign: "center" },
  buttonGroup: { marginVertical: 6 },
});
