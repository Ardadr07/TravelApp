import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function DetailsScreen({ route, navigation }) {
  const { place, rating } = route.params;

  const message =
    rating === 5
      ? 'This is a top-rated destination!'
      : 'Nice choice! This place is worth visiting.';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {place}</Text>
      <Text style={styles.subtitle}>Rating: {rating} / 5</Text>
      <Text style={styles.message}>{message}</Text>

      <View style={styles.buttonWrapper}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonWrapper: {
    width: '100%',
  },
});

export default DetailsScreen;
