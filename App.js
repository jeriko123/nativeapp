import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import * as R from 'ramda';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';



export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const onPressAdd = goalItem => {
    setGoals(R.append({ key: Math.random().toString(), value: goalItem }, goals));
    setIsAddMode(false);
  }

  const onRemoveHandler = goalId => {
    setGoals(currGoal =>
      R.reject(R.propEq('key', goalId), goals)
      // R.filter(R.compose(R.not,R.propEq('key', goalId)), goals)
    )
  }

  const onCancelHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onPress={onPressAdd} visible={isAddMode} onCancel={onCancelHandler} />
      <FlatList data={goals}
        renderItem={itemData => <GoalItem onDelete={onRemoveHandler} item={itemData.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70
  }
})