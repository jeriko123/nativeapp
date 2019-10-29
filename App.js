import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import * as R from 'ramda';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';



export default function App() {
  const [goals, setGoals] = useState([]);

  const onPressAdd = goalItem => {
    setGoals(R.append({key: Math.random().toString(), value: goalItem}, goals))
  }

  const onRemoveHandler = goalId => {
    setGoals(currGoal => 
      R.reject(R.propEq('key', goalId), goals)
      // R.filter(R.compose(R.not,R.propEq('key', goalId)), goals)
    )
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