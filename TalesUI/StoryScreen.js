import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const StoryScreen = () => {
  const route = useRoute();
  const theme = route.params.theme;
  const characters = route.params.characters;
  const location = route.params.location;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Generated Story</Text>
      <Text style={styles.text}>Theme: {theme}</Text>
      <Text style={styles.text}>
        Characters: {characters ? characters.join(', ') : 'No characters selected'}
      </Text>
      <Text style={styles.text}>Location: {location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF6E3',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default StoryScreen;
