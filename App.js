import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
export default function App() {
  const [text,setText]=useState("");
  const[goals,setGoals]=useState([]);
  function goalInputHandler(enteredText) {
      setText(enteredText);
  }
  function addGoalHandler() {
    setGoals(currentGoals=>[...currentGoals,
      {text, key: Math.random().toString()}]); //Best practice way of updating state
    setText("");
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal!" onChangeText={goalInputHandler} value={text}/>
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
        data={goals}
        renderItem={(itemData)=>{
          return <GoalItem text={itemData.item.text}/>        
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#6D7B8D",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "pink",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
