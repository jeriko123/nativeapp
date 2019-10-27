import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [goals, setGoals] = useState([]);

  const onPressAdd = goalItem => {
    setGoals(currentgoals => [...currentgoals, { key: Math.random().toString(), value: goalItem}])
  }

  return (
    <View style={styles.screen}>
      <GoalInput onPress={onPressAdd} />
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