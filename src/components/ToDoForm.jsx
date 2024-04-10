import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
} from 'react-native';
import tasks from '../data/tasks.json';

function ToDoForm({ addTask }) {
    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      const data = require('../data/tasks.json');
      setTasks(data.tasks);
  }, []);
  

    const handlePress = () => {
        addTask(taskText);
        setTaskText('');
    }

    const handleAddTask = () => {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        const randomTask = tasks[randomIndex];
        setTaskText(randomTask);
    }

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
            />
            <Button title="Add Task" onPress={handlePress} />
            <Button title="Generate Random Task" onPress={handleAddTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
});

export default ToDoForm;
