import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


const GoalInput = props => {
    return (
        <View style={styles.viewInputArea}>
            <TextInput
            placeholder="Course goal"
            style={styles.textInput}
            onChangeText={props.onChange}
            />
            <Button title="add" onPress={props.onPress}/>
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