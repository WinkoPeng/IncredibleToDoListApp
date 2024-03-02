/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import ToDOList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import { SafeAreaView } from 'react-native';
import { useState } from 'react';


function App() {
  const [items, setItems] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView>
    <ToDOList items={items} />
    <ToDoForm />
    </SafeAreaView>
  );
}


export default App;
