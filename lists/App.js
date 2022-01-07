import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Lists in React-Native
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.listContainer}>
          {
            people.map( (item) => (
                <View key={item.key}>
                  <Text style={styles.listItem}>{item.name}</Text>
                </View>
            ))
          }
        </View>
      </ScrollView>
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
    backgroundColor: '#ff5555',
    padding: 5
  },
  headerText: {
    width: '100%',

    color: 'black',

    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25
  },
  scrollView: {
    width: '100%',
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  listItem: {
    width: 300,
    padding: 20,
    margin: 10,

    fontSize: 70,

    backgroundColor: '#aaaaff'
  }
});
