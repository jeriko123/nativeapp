import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  return (
    <View style={styles.screen}>
      <View style={styles.viewInputArea}>
        <TextInput
          placeholder="Course goal"
          style={styles.textInput}
        />
        <Button title="add" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
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