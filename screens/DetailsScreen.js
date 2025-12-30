import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { place, rating } = route.params ?? { place: "Unknown", rating: 0 };

  const message =
    rating === 5
      ? "Top pick! 5-star destination."
      : rating === 4
      ? "Great choice! 4-star destination."
      : "Explore and enjoy.";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.text}>Welcome to {place}.</Text>
      <Text style={styles.badge}>Rating: {rating} / 5</Text>
      <Text style={styles.message}>{message}</Text>

      <View style={{ marginTop: 16 }}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 8 },
  text: { fontSize: 18, marginBottom: 8 },
  badge: { fontSize: 16, marginBottom: 8 },
  message: { fontSize: 14, opacity: 0.8, textAlign: "center", paddingHorizontal: 16 },
});
