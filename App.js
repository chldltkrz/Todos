import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = (goal) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goal }]);
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals(currentGoals => [...currentGoals.filter((goal) => goal.id !== id)])
  }
  const [modalState, setModalState] = useState(false);
  const setModalStateHandler = () => {
    setModalState(currentModalState => !currentModalState);
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>THis is Todo App</Text>

      <Button style={styles.button} title="Add new todo" onPress={setModalStateHandler} />
      <GoalInput onAddGoal={addGoalHandler} modalState={modalState} setModalState={setModalStateHandler} />
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={goal => <GoalItem title={goal.item.value} id={goal.item.id} onDelete={deleteGoalHandler} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    margin: 10,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  }
});
