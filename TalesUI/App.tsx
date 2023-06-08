import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './HomePage';
import StartStoryScreen from './StartStoryScreen';
import SavedStoriesScreen from './SavedStoriesScreen';
import SettingsScreen from './SettingsScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <React.Fragment>
          <Stack.Screen name="StartStory" component={StartStoryScreen} />
          <Stack.Screen name="SavedStories" component={SavedStoriesScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </React.Fragment>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

