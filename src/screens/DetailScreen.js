import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { player } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{player.nombre} {player.apellidos}</Text>
      <Text style={styles.sub}>Pantalla de detalle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E9E9E9', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '700', color: '#000000', marginBottom: 24 },
  sub: { fontSize: 16, color: '#888' },
});