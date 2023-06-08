import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChooseLocationScreen = () => {
  const navigation = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState('');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/locations');
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const handleLocationSelection = (location) => {
    setSelectedLocation(location);
  };

  const handleGenerateStory = () => {
    // Perform any logic with the selected location
    navigation.navigate('Story', { location: selectedLocation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose a Map:</Text>
      <View style={styles.locationContainer}>
        {locations.map((location) => (
          <TouchableOpacity
            key={location}
            style={[
              styles.locationButton,
              location === selectedLocation && styles.selectedLocationButton,
            ]}
            onPress={() => handleLocationSelection(location)}
          >
            <Text style={styles.buttonText}>{location}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.generateButton} onPress={handleGenerateStory}>
        <Text style={styles.buttonText}>Generate Story</Text>
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
  locationContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  locationButton: {
    backgroundColor: '#FFC0CB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginRight: 10,
  },
  selectedLocationButton: {
    borderWidth: 2,
    borderColor: '#000',
  },
  generateButton: {
    backgroundColor: '#FFC0CB',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: '100%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChooseLocationScreen;
