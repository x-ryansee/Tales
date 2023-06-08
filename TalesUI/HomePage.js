import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  const navigateToStartStory = () => {
    navigation.navigate('StartStory'); // Replace 'StartStory' with the name of the screen you want to navigate to
  };

  const navigateToSavedStories = () => {
    navigation.navigate('SavedStories'); // Replace 'SavedStories' with the name of the screen you want to navigate to
  };

  const navigateToSettings = () => {
    navigation.navigate('Settings'); // Replace 'Settings' with the name of the screen you want to navigate to
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to AI Storytelling!</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToStartStory}>
        <Text style={styles.buttonText}>Start a New Story</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToSavedStories}>
        <Text style={styles.buttonText}>Saved Stories</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToSettings}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF6E3', // Set your desired background color
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFC0CB', // Set your desired button color
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF', // Set your desired button text color
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomePage;
