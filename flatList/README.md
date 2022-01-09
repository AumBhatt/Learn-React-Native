# <div align="center">***FlatList & Touchable***</div>

List items without using ```map()``` method.

1. Import useState, FlatList and TouchableOpacity.
```JSX
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
```
2. Say the list is:
```JSX
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
```

3. Make a function which is called inside ```renderItem``` prop of ```<FlatList>``` component to render our list:
```JSX
  const renderItemFunction = ({ item }) => (
      <TouchableOpacity onPress={() => console.log(item.name)}>
        <Text style={styles.listItemText}>{item.name}</Text>
      </TouchableOpacity>
    );

```
Over here the ```TouchableOpacity``` component is used to make the items in list ***Touchable***.

4. The structure of the ```<FlatList>``` is given below:
```JSX
      <View style={styles.listContainer}>
        <FlatList
          data={people}
          renderItem={renderItemFunction}
        />
      </View>
```
Here the ***'data'*** prop should contain our list name and ***'renderItem'*** prop should contain our function to render list items as defined earlier.
