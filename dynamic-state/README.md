## Learning Dynamic State in React-Native using ```<TextInput>``` component.
#### 1. Import ```React``` & ```useState``` hook from ***'react'*** library.
```JSX
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
.
.
.
```

#### 2. Using ```useState``` hook to change state of a person variable with name and age prop.
```JSX
const [person, setPerson] = useState({ name: 'Aum', age: 20 });
const changeName = (newName) => {
  setPerson({ name: newName, age:person.age });
};
const changeAge = (newAge) => {
  setPerson({ name: person.name, age: newAge });
};
```

#### 3. Import ```<TextInput>``` component from ***'react-native'**** to change state of 'person' dynamically from the component.
```JSX
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
```
