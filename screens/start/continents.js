import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ContinentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Where would you like to go?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 35,
    marginTop: 30,
    fontWeight: '100',
    textAlign: 'center',
  },
});
