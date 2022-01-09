import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const [tasks, setTasks] = useState(
    [
      { key: 1, task: "ABC", status: false},
      { key: 2, task: "XYZ", status: false},
      { key: 3, task: "LALALL", status: true},
      { key: 4, task: "SomeThing.....", status: false},
    ]
  );

  const [temp, setTemp] = useState(
    { key: 0, task: '', status: false }
  );

  const changeTaskStatus = (itemKey) => {
    setTasks(
      tasks.map( (item) => (
          item = { key: item.key, task: item.task, status: (item.key === itemKey) ? !item.status : item.status}
        )
      )
    )
  };

  const displayList = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => changeTaskStatus(item.key)}>
        <Icon style={styles.icons} name="check-box-outline-blank" size={30} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.listItem}>{item.task} : {`${item.status}`}</Text>
      <TouchableOpacity onPress={() => changeTaskStatus(item.key)}>
        <Icon style={styles.icons} name="close" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='black' translucent={false} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Tasker</Text>
      </View>

      <View style={styles.body}>
        
        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            renderItem={displayList}
          ></FlatList>
        </View>
        
        <View style={styles.inputContainer}>
          
          <TextInput
            keyboardType='ascii-capable'
            placeholder='Enter Todo....'
            defaultValue=''
            style={styles.textBox}
            onChangeText={(val) => {
              setTemp({ key: tasks.length+1, task: val, status: false });
            }}
          />
          
          <View style={styles.addBtnContainer}>
            <TouchableOpacity
              onPress={() => {
              setTasks(tasks.concat(temp));
            }}>
              <Icon style={styles.icons} name="add-box" size={40} color="#aaa" />
            </TouchableOpacity>
          </View>
        
        </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#000'
  },
  headerContainer: {
    width: '100%',
    top: 0,
  },
  headerText: {

    margin: 2,
    marginTop: 20,

    color: 'white',
    
    fontFamily: '',
    fontWeight: '100',
    fontSize: 40,
  },
  body: {
    flex: 1,
    width: '100%',
  },
  icons: {
    marginHorizontal: 3
  },
  itemContainer:{
    width: '95%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    margin: 10,
    padding: 15,

    borderRadius: 5,

    textAlign: 'center',
    backgroundColor: 'yellow'
  },
  listItem: {
    width: '70%',
    
    marginHorizontal: 5,

    fontSize: 22.5,
    textAlign: 'left',
    textAlignVertical: 'center',
    
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flex: 1,
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

  },
  textBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',

    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    margin: 2,
    padding: 10,

    color: 'white'
  },
  addBtnContainer: {
    width: '10%',

    marginHorizontal: 5
  },
});
