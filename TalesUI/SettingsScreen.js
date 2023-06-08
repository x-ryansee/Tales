import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [avatar, setAvatar] = useState('');
  const [privacySettings, setPrivacySettings] = useState('');

  const handleSaveSettings = () => {
    // Perform save settings logic here
    // You can send the updated settings to an API or store them locally

    // For example, you can log the updated settings to the console
    console.log('Updated Settings:', {
      name,
      email,
      facebookLink,
      avatar,
      privacySettings,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Facebook Link"
        value={facebookLink}
        onChangeText={setFacebookLink}
      />
      <TextInput
        style={styles.input}
        placeholder="Avatar Photo"
        value={avatar}
        onChangeText={setAvatar}
      />
      <TextInput
        style={styles.input}
        placeholder="Privacy Settings"
        value={privacySettings}
        onChangeText={setPrivacySettings}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSaveSettings}>
        <Text style={styles.buttonText}>Save Settings</Text>
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
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCC', // Set your desired input border color
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FFC0CB', // Set your desired button color
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FFF', // Set your desired button text color
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SettingsScreen;

// In this example, the SettingsScreen component renders various input fields using TextInput to allow the user to update their settings. The state variables (name, email, facebookLink, avatar, privacySettings) are used to store the user's input.

// The handleSaveSettings function is called when the user taps the "Save Settings" button. You can customize this function to perform the logic to save the updated settings, such as sending them to an API or storing them locally.