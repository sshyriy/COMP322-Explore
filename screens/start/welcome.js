import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Explore</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/start.gif')}
      />
      <Button
        title="Next"
        backgroundColor="#000"
        onPress={() => navigation.navigate('Continents')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 75,
    fontWeight: '100',
    textAlign: 'right',
  },
  image: {
    marginTop: -50,
  },
});
