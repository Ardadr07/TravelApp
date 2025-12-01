import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Destinations</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Paris"
          onPress={() =>
            navigation.navigate('Details', { place: 'Paris', rating: 5 })
          }
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to London"
          onPress={() =>
            navigation.navigate('Details', { place: 'London', rating: 4 })
          }
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Tokyo"
          onPress={() =>
            navigation.navigate('Details', { place: 'Tokyo', rating: 5 })
          }
        />
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
    marginBottom: 24,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 12,
  },
});

export default HomeScreen;
