/**
 * My To Do List Form
 */

import React from "react";
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

function ToDOList({ items }){
  
  return(

        <ScrollView>
          
          {items.map((value, index) => {
            return(
            <Pressable key={index}>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>{value}</Text>
            </View>
          </Pressable>
            )
            
          })}

        </ScrollView>

    );
}

const styles = StyleSheet.create({
  task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
})

export default ToDOList;