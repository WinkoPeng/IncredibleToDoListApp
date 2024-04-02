import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Alert,
  Button
} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

export default function HomeScreen ({navigation }) {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  function handleAddTask(taskText) {
    if (!tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  }
  
    return (
           <MainLayout>
                    <ToDoList items={tasks} />
        <ToDoForm addTask={handleAddTask} />      
                 <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
      </MainLayout>
    );
}