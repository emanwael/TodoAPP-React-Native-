import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export function ItemTodo(props) {
  const { task, index, deleteItem, SelectAll } = props;
  const [selectTask, setSelectTask] = useState(false);

  return (
    <View
      style={
        selectTask | SelectAll ? styles.containerSelected : styles.container
      }
    >
      <Text style={styles.txt}>
        {index + 1}){task}
      </Text>

      {/* <MaterialIcons name="add-a-photo"></MaterialIcons> */}
      <TouchableOpacity
        onPress={() => {
          deleteItem(index);
        }}
      >
        <Ionicons name="trash" size={30} color="red" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectTask(!selectTask);
        }}
      >
        <Ionicons
          name="md-checkmark-circle"
          size={30}
          color={selectTask | SelectAll ? "green" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  containerSelected: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#eea",
    paddingHorizontal: 10,
  },
  txt: {
    width: "80%",
    fontSize: 20,
  },
});
