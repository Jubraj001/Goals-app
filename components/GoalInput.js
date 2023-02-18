import {useState} from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
export default function GoalInput(props) {
  const [text,setText]=useState("");

  function goalInputHandler(enteredText) {
    setText(enteredText);
    }

  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal!" onChangeText={goalInputHandler} value={text}/>
        <Button title="Add Goal" onPress={()=>{props.onAddGoal(text); setText("");}} />
      </View>
  )
}
const styles = StyleSheet.create({
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
})