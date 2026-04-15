import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>🏀 Equipo Basket </Text>
        <Text style={styles.heroSub}>Conoce a los jugadores</Text>
      </View>

      <TouchableOpacity style={styles.ctaBtn} onPress={() => navigation.navigate('Players')}>
        <Text style={styles.ctaBtnText}>Jugadores →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E9E9E9', padding: 16 },
  hero: { alignItems: 'center', paddingVertical: 40 },
  heroTitle: { fontSize: 32, fontWeight: '700', color: '#000000', marginBottom: 8 },
  heroSub: { fontSize: 14, color: '#888' },
  ctaBtn: { backgroundColor: '#FF4400', borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 24 },
  ctaBtnText: { color: '#ffffff', fontWeight: '700', fontSize: 16 },
});