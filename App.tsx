import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={{ color: "#03b1fc", fontSize: 20, textAlign: 'center', padding: 5 }}>
          To Do List App
        </Text>
        <Text style={{ color: "black", fontSize: 16, borderColor: "#ccc", backgroundColor: "#fccf03", padding: 5 }}>
          Items:
        </Text>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
