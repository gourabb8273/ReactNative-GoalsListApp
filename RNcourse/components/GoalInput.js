import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoaltext}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "col",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
