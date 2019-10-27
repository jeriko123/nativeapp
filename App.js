import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);


  const onChangeInput = enteredText => {
    setEnteredGoal(enteredText);
  };

  const onPressAdd = () => {
    setGoals(currentgoals => [...currentgoals, { key: Math.random().toString(), value: enteredGoal}])
  }

  return (
    <View style={styles.screen}>
      <GoalInput onPress={onPressAdd} onChange={onChangeInput} />
      <FlatList data={goals}
        renderItem={itemData =><GoalItem title={itemData.item.value} />} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70
  }
})