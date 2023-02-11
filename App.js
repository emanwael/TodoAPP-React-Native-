import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { InputFiled } from './components/InputFiled';
import { ItemTodo } from './components/ItemTodo';
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }
  const deleteItem = (i) => {
    setTasks(
      tasks.filter((item, index) => index != i)
    )
  }
  const [SelectAll, setSelectAll] = useState(false);

  return (
    <View style={styles.container}>
      <InputFiled addTask={addTask} />

      {
        tasks.map((task, index) => {
          return <ItemTodo task={task} index={index} deleteItem={deleteItem} SelectAll={SelectAll} />
        })
      }
      <View style={styles.containerRow}>
        <TouchableOpacity
          onPress={() => {
            setTasks([]);
          }}>
          <Text style={styles.txt}>clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectAll(!SelectAll);
          }}>
          <Text style={styles.txt}>select all</Text>
        </TouchableOpacity>
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
    marginTop: 50,
  },
  containerRow: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "flex-end"

  },
  txt: {
    fontSize: 20,
    backgroundColor: "orange",
    color: "white",
    width: 150,
    textAlign: "center",
    padding: 5,
    borderRadius: 20,
  }
});
