import firestore from '@react-native-firebase/firestore';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

export default function PlayersScreen({ navigation }) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firestore()
      .collection('players')
      .get()
      .then(snapshot => {
        const llista = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log('Jugadors trobats:', llista.length);
        console.log('Primer jugador:', llista[0]);
        setPlayers(llista);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error Firebase:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} color="#e8b84b" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jugadors ({players.length})</Text>
      <FlatList
        data={players}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Detail', { player: item })}>
            <Text style={styles.btnText}>
              {item.nombre} {item.apellidos} →
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E9E9E9', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '700', color: '#000000', marginBottom: 24 },
  btn: { backgroundColor: '#FF4400', borderRadius: 12, padding: 14 },
  btnText: { color: '#ffffff', fontWeight: '700' },
});