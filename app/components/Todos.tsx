import { SafeAreaView} from "react-native-safe-area-context";
import {Text, StyleSheet} from "react-native";
import Todo from "./Todo";
const todos = ["Todo 1", "Todo 2", "Todo 3"];

export function Todos(){
    return(
        <SafeAreaView style={styles.todoContainer}>
            {todos.map(todo => {
                return <Todo title={todo} />
            })}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    todoContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'green',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        gap: 18
    }
})