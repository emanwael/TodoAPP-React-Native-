import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export function InputFiled(props) {
  const [task, setTask] = useState("");
  const { addTask } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(task) => {
          setTask(task);
        }}
        value={task}
      />
      <TouchableOpacity
        onPress={() => {
          task != "" ? addTask(task) : alert("Please Enter Todo Item ");
          setTask("");
        }}
      >
        <View style={styles.btn}>
          <MaterialIcons name="add" color="white" size={22} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#eea",
    width: "75%",
    height: 50,
    color: "#000",
    fontSize: 20,
    padding: 10,
  },
  btn: {
    backgroundColor: "orange",
    height: 50,
    width: 50,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
