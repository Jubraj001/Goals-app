import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text,setText]=useState("");
  const[goals,setGoals]=useState([]);
  function goalInputHandler(enteredText) {
      setText(enteredText);
  }
  function addGoalHandler() {
    setGoals(currentGoals=>[...currentGoals,text]); //Best practice way of updating state
    setText("");
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal!" onChangeText={goalInputHandler} value={text}/>
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
        {goals.map((goal)=><Text key={goal}>{goal}</Text>)}
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
