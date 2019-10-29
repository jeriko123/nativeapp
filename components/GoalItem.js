import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity  activeOpacity={0.7} onPress={props.onDelete.bind(this, props.item.key)}>
            <View style={styles.lineStyle}>
                <Text>{props.item.value}</Text>
            </View>
        </TouchableOpacity>
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