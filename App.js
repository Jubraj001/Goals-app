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

  function deleteGoalHandler(key){
    setGoals(currentGoals=>{
      return currentGoals.filter((goal)=>goal.key!==key);
    })
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
        data={goals}
        renderItem={(itemData)=>{
          return <GoalItem 
          text={itemData.item.text} 
          id={itemData.item.key}
          onDeleteItem={deleteGoalHandler}/>        
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
