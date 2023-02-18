import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const[goals,setGoals]=useState([]);
  function addGoalHandler(text) {
    setGoals(currentGoals=>[...currentGoals,
      {text, key: Math.random().toString()}]); //Best practice way of updating state
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
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
  goalsContainer: {
    flex: 5,
  },
});
