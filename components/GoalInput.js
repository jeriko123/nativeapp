import  React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const onChangeInput = enteredText => {
        setEnteredGoal(enteredText);
      };

    return (
        <View style={styles.viewInputArea}>
            <TextInput
            placeholder="Course goal"
            style={styles.textInput}
            onChangeText={onChangeInput}
            value={enteredGoal}
            />
            <Button title="add" onPress={props.onPress.bind(this, enteredGoal)}/>
        </View>
    )
};

const styles = StyleSheet.create({
    viewInputArea: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      textInput: {
        width: "70%",
        borderColor: "black", 
        borderWidth: 1, 
        borderRadius: 5,
        padding: 5
      }
})

export default GoalInput;