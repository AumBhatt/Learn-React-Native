import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState(
    [
      { name: 'Ron', key: 1 },
      { name: 'Leslie', key: 2 },
      { name: 'Ann', key: 3 },
      { name: 'Andy', key: 4 },
      { name: 'April', key: 5 },
    ]
  );

  const renderItemFunction = ({ item }) => (
      <TouchableOpacity onPress={() => console.log(item.name)}>
        <Text style={styles.listItemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FlatList in React-Native</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={people}
          renderItem={renderItemFunction}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',

    padding: 5,
    backgroundColor: '#11aa66'
  },
  headerText: {

    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  listContainer: {
    width: '100%',
  },
  listItemText: {
    width: '90%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    margin: 20,
    padding: 20,

    fontSize: 70,

    backgroundColor: 'orange'
  }
});
