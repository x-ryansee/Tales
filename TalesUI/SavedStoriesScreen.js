import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SavedStoriesScreen = () => {
  // Sample data for saved stories
  const savedStories = [
    { id: 1, title: 'Story 1', content: 'Once upon a time...' },
    { id: 2, title: 'Story 2', content: 'In a land far away...' },
    { id: 3, title: 'Story 3', content: 'Once there was a hero...' },
    // Add more saved stories as needed
  ];

  // Render item component for each saved story
  const renderStoryItem = ({ item }) => {
    return (
      <View style={styles.storyItem}>
        <Text style={styles.storyTitle}>{item.title}</Text>
        <Text style={styles.storyContent}>{item.content}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Saved Stories</Text>
      <FlatList
        data={savedStories}
        renderItem={renderStoryItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
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
  listContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  storyItem: {
    backgroundColor: '#FFC0CB', // Set your desired story item background color
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  storyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  storyContent: {
    fontSize: 16,
  },
});

export default SavedStoriesScreen;


// In this example, the SavedStoriesScreen component renders a FlatList to display the saved stories. Each item in the FlatList is rendered using the renderStoryItem function, which formats the title and content of each story item.

// You can replace the sample data with your actual saved stories data or fetch it from an API or storage mechanism of your choice. Customize the styles as per your design requirements.