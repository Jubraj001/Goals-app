import {useState} from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
export default function GoalInput(props) {
  const [text,setText]=useState("");

  function goalInputHandler(enteredText) {
    setText(enteredText);
    }

  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput style={styles.textInput} placeholder="Your Course Goal!" onChangeText={goalInputHandler} value={text}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={()=>{props.onAddGoal(text); setText("");}} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:16,
        backgroundColor:'#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: "pink",
        width: "100%",
        padding: 10,
        backgroundColor:'#e4d0ff',
        color: '#120438',
        borderRadius:6
      },
      buttonContainer:{
        marginTop:16,
        flexDirection:"row"
      },
      button:{
        width:100,
        marginHorizontal:8
      },
      image:{
        width:100,
        height:100,
        margin:20
      }
})