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
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isModalVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoaltext) { 
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoaltext, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  function deleteGoalHandler(id) {
    setCourseGoal(currentCourseGoal=>{
      return currentCourseGoal.filter((goal)=> goal.id != id)
    })
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color={'#a065ec'} onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={addGoalHandler} visible={isModalVisible} onCancel={endAddGoalHandler}/>
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    // backgroundColor: '#1e085a'
  },
  goalContainer: {
    flex: 5,
  },
});
