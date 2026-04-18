import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipo Basket 🏀</Text>

      <Button
        title="Ir a Detalle"
        onPress={() => navigation.navigate('Detalle')}
      />

      <Button
        title="Ir a Player"
        onPress={() => navigation.navigate('Player')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});