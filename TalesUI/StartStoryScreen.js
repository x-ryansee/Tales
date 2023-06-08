import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StartStoryScreen = ({ navigation }) => {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedAdventureOption, setSelectedAdventureOption] = useState('');
  const [characterName, setCharacterName] = useState('');

  const handleThemeSelection = (theme) => {
    setSelectedTheme(theme);
    if (theme === 'Adventure') {
      // If Adventure theme is selected, navigate to AdventureOptionsScreen
      navigation.navigate('AdventureOptions');
    } else {
      // For other themes, you can handle the logic as per your requirement
      // You can navigate to the next screen or perform any other action
    }
  };

  const handleAdventureOptionSelection = (option) => {
    setSelectedAdventureOption(option);
    // Navigate to the screen where the user can add characters
    navigation.navigate('AddCharacters');
  };

  const handleCharacterNameInput = (name) => {
    setCharacterName(name);
    // Once the character name is selected, you can proceed to generate the story
    // You can navigate to the next screen or perform any other action
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select a Theme:</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleThemeSelection('Sci-Fi')}
      >
        <Text style={styles.buttonText}>Sci-Fi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleThemeSelection('Fairy Tale')}
      >
        <Text style={styles.buttonText}>Fairy Tale</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleThemeSelection('Poetry')}
      >
        <Text style={styles.buttonText}>Poetry</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleThemeSelection('Fable')}
      >
        <Text style={styles.buttonText}>Fable</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleThemeSelection('Adventure')}
      >
        <Text style={styles.buttonText}>Adventure</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleThemeSelection('Mystery')}
      >
        <Text style={styles.buttonText}>Mystery</Text>
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

export default StartStoryScreen;


// You can add additional screens like AdventureOptionsScreen and AddCharactersScreen to handle the further options and character selection. Remember to update the navigation.navigate calls 