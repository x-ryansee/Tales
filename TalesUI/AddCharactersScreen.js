import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const AddCharactersScreen = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Add this line to access the route object
  const [characterName, setCharacterName] = useState('');
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/characters');
      const data = await response.json();
      setCharacters(data);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleGenerateStory = () => {
    navigation.navigate('ChooseLocation', {
      theme: route.params.theme,
      characters: selectedCharacters,
      location: '', // Set an empty location for now
    });
  };

  const handleAddCharacter = () => {
    if (characterName.trim() !== '') {
      setCharacters((prevCharacters) => [...prevCharacters, characterName]);
      setCharacterName('');
    }
  };

  const handleDeleteCharacter = (character) => {
    setCharacters((prevCharacters) => prevCharacters.filter((c) => c !== character));
  };

  const handleCharacterSelection = (character) => {
    if (selectedCharacters.includes(character)) {
      setSelectedCharacters((prevSelectedCharacters) =>
        prevSelectedCharacters.filter((c) => c !== character)
      );
    } else {
      setSelectedCharacters((prevSelectedCharacters) => [...prevSelectedCharacters, character]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Characters:</Text>
      <View style={styles.characterButtons}>
        {characters.map((character) => (
          <TouchableOpacity
            key={character}
            style={[
              styles.button,
              selectedCharacters.includes(character) && styles.selectedButton,
            ]}
            onPress={() => handleCharacterSelection(character)}
          >
            <Text style={styles.buttonText}>{character}</Text>
            {selectedCharacters.includes(character) && (
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteCharacter(character)}
              >
                <Text style={styles.deleteButtonText}>x</Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter character name"
          value={characterName}
          onChangeText={setCharacterName}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddCharacter}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.generateButton} onPress={handleGenerateStory}>
        <Text style={styles.generateButtonText}>Next: Location</Text>
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
  characterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFC0CB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
    marginRight: 10,
    position: 'relative',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedButton: {
    borderColor: '#FF69B4',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  deleteButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#FFC0CB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  generateButton: {
    backgroundColor: '#FFC0CB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  generateButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddCharactersScreen;
