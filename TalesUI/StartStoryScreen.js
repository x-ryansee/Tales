import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartStoryScreen = () => {
  const navigation = useNavigation();
  const [themes, setThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    fetchThemes();
  }, []);

  const fetchThemes = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/themes');
      const data = await response.json();
      setThemes(data);
    } catch (error) {
      console.error('Error fetching themes:', error);
    }
  };

  const handleThemeSelection = (theme) => {
    setSelectedTheme(theme);
  };

  const handleNext = async () => {
    try {
      const story = {
        theme: selectedTheme,
        characters: selectedCharacters,
        location: selectedLocation,
      };
  
      const response = await fetch('http://127.0.0.1:5000/stories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(story),
      });
  
      if (response.ok) {
        navigation.navigate('AddCharacters', {
          theme: selectedTheme,
          characters: selectedCharacters,
          location: selectedLocation,
        });
      } else {
        console.error('Failed to create story:', response.status);
      }
    } catch (error) {
      console.error('Error creating story:', error);
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select a Theme:</Text>
      {themes.map((theme) => (
        <TouchableOpacity
          key={theme}
          style={[
            styles.button,
            theme === selectedTheme && styles.selectedButton,
          ]}
          onPress={() => handleThemeSelection(theme)}
        >
          <Text style={styles.buttonText}>{theme}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next: Characters</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#FFC0CB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: '#FF69B4',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#FFC0CB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StartStoryScreen;
