import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoaltext, setEmteredGoalText] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);
  function goalInputHandler(enteredtext) {
    setEmteredGoalText(enteredtext);
  }
  function addGoalHandler() {
    // setCourseGoal([])
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoaltext, id: Math.random().toString() },
    ]);
    setEmteredGoalText("");
  }
  function clearGoalHandler() {
    setCourseGoal([]);
    setEmteredGoalText("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <Button title="Clear All" onPress={clearGoalHandler} />
        {/* <ScrollView alwaysBounceVertical={true}>
        {courseGoal &&
          courseGoal.map((goal) => (
            <Text style={styles.goalItem} key={goal}>
              {goal}
            </Text>
          ))}
      </ScrollView> */}
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            //will give u key if we renameded as id not key
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
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
  goalContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 12,
  },
  goalText: {
    color: "white",
  },
});
