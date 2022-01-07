import React, { useState } from 'react';      // [1] useState: Hook required for Dynamic state => The whole point of using React/React-Native.
import { StatusBar } from 'expo-status-bar';
import
  { StyleSheet, Text, View, Button }          // [2] Import Native components from react-native library like Button.
from 'react-native';

export default function App() {
  const [name, setName] = useState('Aum');    // [1] Don't forget to import React and 'useState' hook for this.
                                              // [5] setName => function to set name.
  const [person, setPerson] = useState({ name: 'Mario', age: 40 });
  
  const clickHandler = () => {
    setName('Hello!');                        // [5] setName used inside custom function called inside 'onPress' prop.
    setPerson({ name: 'Luigi', age: 45 });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>
          My Name is {name}.
        </Text>
        <Text>
          Person is {person.name} & Age is {person.age}.
        </Text>
      </View>
      <View style={styles.body}>
        <Text>Some Lorem ipsum</Text>
        <Text style={styles.boldText}>
          Some Lorem ipsum
          <Text>Text inside Text inherits styles of parent.</Text>
        </Text>
      </View>
      <View styles={styles.buttonContainer}>
        {/*
          [2] Import <Button> component from react-native library.
          [3] <Button /> is self-closing tag => use 'title' property to add name to button.
          [4] 'onPress' prop used for giving on-click functionality to <Button>.
        */}
        <Button title='Update Name' onPress={clickHandler}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

/*
  Note:
    Styles of parent <View> component are not inherited directly by its children.
    But inheritance of parent <Text> to child <Text> works!!!
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'cyan',
  },
  boldText: {
    fontWeight: 'bold',
    color: 'blue'
  },
  body: {
    backgroundColor: 'yellow',
    margin: 50 // in px
  },
  buttonContainer: {
  }
});
