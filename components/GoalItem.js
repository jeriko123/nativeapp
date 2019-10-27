import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = porps => {
    return (
        <View style={styles.lineStyle}>
            <Text>{porps.title}</Text>
          </View>
    )
};

const styles = StyleSheet.create({
    lineStyle: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#eee',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5
      }           
})

export default GoalItem;