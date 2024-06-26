import { StyleSheet } from "react-native"
import { View, Text, Pressable } from "react-native";
export default function GoalItem(props) {
  return (
      <View style={styles.goalItem}>
        <Pressable 
            android_ripple={{color:'#210644'}}
            style={({pressed})=>pressed && styles.pressedItem} //Use Object destructuring to get pressed property for ios
            onPress={props.onDeleteItem.bind(this,props.id)}>
            <Text style={styles.goalText} >{props.text}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:"#5e0acc",
        color:'white'
      },
      pressedItem:{
        opacity:0.5
      },
      goalText:{
        padding:8,
        color:"white"
      }
});
