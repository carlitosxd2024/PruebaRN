import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';

type User = {
  id: number;
  email: string;
  username: string;
  name: { firstname: string; lastname: string };
  address: { city: string; street: string; number: number; zipcode: string };
  phone: string;
};

export default function ProfileScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users/1')
      .then(res => res.json())
      .then(json => setUser(json))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );

  if (!user)
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error cargando usuario</Text>
      </View>
    );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          {user.name.firstname} {user.name.lastname}
        </Text>
        <Text style={styles.label}>Usuario:</Text>
        <Text style={styles.value}>{user.username}</Text>

        <Text style={styles.label}>Correo electrónico:</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Teléfono:</Text>
        <Text style={styles.value}>{user.phone}</Text>

        <Text style={styles.label}>Dirección:</Text>
        <Text style={styles.value}>
          {user.address.street} {user.address.number}, {user.address.city},{' '}
          {user.address.zipcode}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f4f7',
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 4, // Android
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowOpacity: 0.1, // iOS
    shadowRadius: 6, // iOS
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#333',
  },
  label: {
    fontWeight: '600',
    color: '#555',
    marginTop: 10,
  },
  value: {
    color: '#222',
    fontSize: 16,
    marginBottom: 4,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
