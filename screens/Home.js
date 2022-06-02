// import * as React from "react";
import React, { useEffect, useState } from 'react';
// import react from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import TodoList from '../components/TodoList';
import { todoData } from "../data/todos";
import { useNavigation } from "@react-navigation/native";
// import reactNativeConfig from "../react-native.config";
import { useFonts } from "expo-font";
import { DatabaseConnection } from '../database/database-connection';

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



    const db = DatabaseConnection.getConnection();

    useEffect(() => {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='tbl_task'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS tbl_task', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS tbl_task(task_id INTEGER PRIMARY KEY AUTOINCREMENT, task_name VARCHAR(255), task_date VARCHAR(10), task_time VARCHAR(8), task_status BOOLEAN(0))',
                            []
                        );
                    }
                }
            );
        });
    }, []);

    const [loaded] = useFonts({
        RubikRegular: require('../assets/fonts/rubik_regular.ttf'),
        RubikLight: require('../assets/fonts/rubik_light.ttf'),
        RubikBold: require('../assets/fonts/rubik_bold.ttf'),
        MuseoModernoLight: require('../assets/fonts/MuseoModerno-Light.ttf'),
    });

    if (!loaded) {
        return null;
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', }}>
                <Text style={styles.username}>Hola</Text>
                <Image
                    source={require('../images/stas11161200172.webp')}
                    style={styles.pic}
                />
            </View>
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

            <TouchableOpacity onPress={() => navigation.navigate('Add')} style={styles.button}><Text style={styles.plus}>+</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        // paddingTop: 70,
        paddingTop: 10,
        paddingHorizontal: 15,
        backgroundColor: '#171941'

    },
    pic: {
        width: 42,
        height: 42,
        borderRadius: 12,
        // alignSelf: 'flex-end'
    },
    username: {
        color: '#fff',
        // alignSelf: 'flex-end'
    },
    title: {
        // fontFamily: 'RubikRegular',
        color: '#fff',
        fontSize: 34,
        // fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10,
        fontFamily: 'MuseoModernoLight'
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
