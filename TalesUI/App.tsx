import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomePage from './HomePage';
import StartStoryScreen from './StartStoryScreen';
import AddCharactersScreen from './AddCharactersScreen';
import ChooseLocationScreen from './ChooseLocationScreen';
import StoryScreen from './StoryScreen';
import SavedStoriesScreen from './SavedStoriesScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StartStory"
            component={StartStoryScreen}
          />
          <Stack.Screen
            name="AddCharacters"
            component={AddCharactersScreen}
          />
          <Stack.Screen
            name="ChooseLocation"
            component={ChooseLocationScreen}
          />
          <Stack.Screen
            name="Story"
            component={StoryScreen}
          />
          <Stack.Screen
            name="SavedStories"
            component={SavedStoriesScreen}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
