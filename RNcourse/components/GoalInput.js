import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoaltext, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredtext) {
    setEnteredGoalText(enteredtext);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoaltext);
    setEnteredGoalText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoaltext}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    // height: "5%",
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
  },
});
