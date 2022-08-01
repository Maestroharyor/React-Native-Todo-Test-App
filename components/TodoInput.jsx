import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";

const TodoInput = ({ addTodos }) => {
  const [todoText, setTodoText] = useState("");
  const changeHandler = (val) => {
    setTodoText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="New todo..."
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button
        title="Add Todo"
        color={"#1e2350"}
        onPress={() => {
          if (todoText.length > 3) {
            const newTodo = {
              text: todoText,
              key: Math.random().toString(),
            };

            addTodos(newTodo);
          } else {
            Alert.alert("OOPS!", "Todos must be over 3 characters long", [
              { text: "Understood" },
            ]);
          }
        }}
      />
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
