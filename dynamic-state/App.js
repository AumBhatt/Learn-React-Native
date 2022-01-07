// Dynamic State Learning
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [person, setPerson] = useState({ name: 'Aum', age: 20 });
  const changeName = (newName) => {
    setPerson({ name: newName, age:person.age });
  };
  const changeAge = (newAge) => {
    setPerson({ name: person.name, age: newAge });
  };
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text>My Name is {person.name}</Text>
        <Text>My Age is {person.age}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text>Enter Name:</Text>
        <TextInput
            style={styles.TextBoxStyle}
            placeholder='New Name'
            onChangeText={(val) => changeName(val)}
        />
        <Text>Enter Age:</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.TextBoxStyle}
          placeholder='New Age'
          onChangeText={(val) => changeAge(val)}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
    marginBottom: 0
  },
  TextBoxStyle: {
    width: '50%',
    margin: 2,
    padding: 5,
    borderWidth: 2,
    borderColor: '#000'
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'

  }
});