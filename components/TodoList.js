import * as react from "react";
// import { todoData } from "../data/todos";
import { FlatList, Text, View } from "react-native";
import Todo from "./Todo";


export default function TodoList({todoData}) {
    return (
        <FlatList
            data={todoData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Todo{...item}/>}            
            // renderItem={({ item }) => <Text> {item.text}  </Text>}
        />
    )
}