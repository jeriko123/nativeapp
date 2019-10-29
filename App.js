import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';



export default function App() {
  const [goals, setGoals] = useState([]);

  const onPressAdd = goalItem => {
    setGoals(currentgoals => [...currentgoals, { key: Math.random().toString(), value: goalItem}])
  }

  const onRemoveHandler = goalId => {
    setGoals(currGoal => {
      return goals.filter((goal) => goal.key !== goalId);
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput onPress={onPressAdd} />
      <FlatList data={goals}
        renderItem={itemData =><GoalItem onDelete={onRemoveHandler} item={itemData.item} />} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70
  }
})