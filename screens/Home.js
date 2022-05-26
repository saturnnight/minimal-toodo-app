import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import TodoList from '../components/TodoList';
import { todoData } from "../data/todos";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    // this action require import * as React from "react";
    const [localData, setLocalData] = React.useState(
        todoData.sort((a, b) => { return a.isCompleted - b.isCompleted })
    );
    //esto es un hook
    const navigation = useNavigation();

    const [isHidden, setHidden] = React.useState(false);

    const handleHidePress = () => {
        if (isHidden) {
            setHidden(false)
            setLocalData(todoData.sort((a, b) => { return a.isCompleted - b.isCompleted }))
            return;
        }
        setHidden(!isHidden)
        setLocalData(localData.filter(todo => !todo.isCompleted))
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../images/stas11161200172.webp')}
                style={styles.pic}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.title}>Today</Text>
                <TouchableOpacity onPress={handleHidePress}>
                    <Text style={{ color: '#3478f6' }}>{isHidden ? "Show Completed" : "Hide Completed"}</Text>
                </TouchableOpacity>
            </View>
            {/*Filtrar json*/}
            <TodoList todoData={localData.filter(todo => todo.isToday)} />
            {/* <TodoList todoData={todoData.filter(todo => todo.isToday)}/> */}
            <Text style={styles.title}>Tomorrow</Text>
            {/*Filtrar json*/}
            <TodoList todoData={todoData.filter(todo => !todo.isToday)} />

            <TouchableOpacity onPress={()=>navigation.navigate('Add')} style={styles.button}><Text style={styles.plus}>+</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        // paddingTop: 70,
        paddingTop: 10,
        paddingHorizontal: 15
    },
    pic: {
        width: 42,
        height: 42,
        borderRadius: 12,
        alignSelf: 'flex-end'
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10,
    },
    button: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 50,
        right: 28,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .5,
        shadowRadius: 5,
        elevation: 5,
    },
    plus: {
        fontSize: 40,
        color: '#fff',
        position: 'absolute',
        top: -10,
        left: 8,
    }
});
