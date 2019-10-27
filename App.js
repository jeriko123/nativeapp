import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const onChangeInput = enteredText => {
    setEnteredGoal(enteredText);
  };

  const onPressAdd = () => {
    setGoals(currentgoals => [...currentgoals, enteredGoal])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.viewInputArea}>
        <TextInput
          placeholder="Course goal"
          style={styles.textInput}
          onChangeText={onChangeInput}
        />
        <Button title="add" onPress={onPressAdd}/>
      </View>
      <View>
        {goals.map((goal) => <Text>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70
  },
  viewInputArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    width: "70%",
    borderColor: "black", 
    borderWidth: 1, 
    padding: 5
  }

})