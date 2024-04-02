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


export default function AboutScreen ({navigation}) {
    return(
        <MainLayout>
            <Text style={styles.text}>App Name: Incredible To Do List App</Text>
            <Text style={styles.text}>My Name: Congyan Winko Peng</Text>
            <Text style={styles.text}>Current Date: April 1st, 2024 </Text>
            <Button
            title="Go to About"
            onPress={() => navigation.navigate('Home')}
        />
        </MainLayout>
    )

}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
})