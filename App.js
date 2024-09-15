/* this import should always be at the top of the entry file (index.js or App.js).
 There should be nothing else before it */
import './gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{ title: 'Blogs' }}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          // options={{ title: 'Show' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppWithProvider = () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};

export default AppWithProvider;
