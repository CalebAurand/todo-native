import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
type TodoProps = {
    title: string;
}

export default function Todo(props: TodoProps){
    return (
        <View style={styles.todoContainer}>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 4
    }
})