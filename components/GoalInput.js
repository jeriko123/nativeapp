import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const onChangeInput = enteredText => {
        setEnteredGoal(enteredText);
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.viewInputArea}>
                <TextInput
                    placeholder="Course goal"
                    style={styles.textInput}
                    onChangeText={onChangeInput}
                    value={enteredGoal}
                />
                <Button title="add" onPress={props.onPress.bind(this, enteredGoal)} />
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    viewInputArea: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    textInput: {
        width: "70%",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginBottom: 10
    }
})

export default GoalInput;