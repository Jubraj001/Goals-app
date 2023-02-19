import { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [modal, setModal]= useState(false);
  const[goals,setGoals]=useState([]);

  function startAddGoalHandler(){
    setModal(true);
  }
  function endAddGoalHandler(){
    setModal(false);
  }
  function addGoalHandler(text) {
    setGoals(currentGoals=>[...currentGoals,
      {text, key: Math.random().toString()}]); //Best practice way of updating state

      endAddGoalHandler(); //WIll close the modal as soon as the goal is added
  }

  function deleteGoalHandler(key){
    setGoals(currentGoals=>{
      return currentGoals.filter((goal)=>goal.key!==key); //filters all the goal and displays all goals leaving the one that needs to be deleted
    })
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button 
      title="Add New Goal" 
      color="#a065ec"
      onPress={startAddGoalHandler}/>
      {modal && <GoalInput visible={modal} onCancel={endAddGoalHandler} onAddGoal={addGoalHandler}/>}
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor:'#1e085a'
  },
  goalsContainer: {
    flex: 5,
  },
});
