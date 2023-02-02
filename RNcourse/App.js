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

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  function addGoalHandler(enteredGoaltext) { 
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoaltext, id: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(id) {
    setCourseGoal(currentCourseGoal=>{
      return currentCourseGoal.filter((goal)=> goal.id != id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>;
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
  goalContainer: {
    flex: 5,
  },
});
