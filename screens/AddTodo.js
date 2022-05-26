import * as React from 'react';
import { StyleSheet, Switch, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
// import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function AddTodo() {
    // const [name, setName] = React.useState('');
    // const [date, setDate] = React.useState(new Date());
    const [isToday, setIsToday] = React.useState(false);

    // const [mode, setMode] = React.useState('time');
    // const [show, setShow] = React.useState(false);
    const [text, setText] = React.useState('');

    // const [isPickerShow, setIsPickerShow] = React.useState(false);

    // const onChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setDate(currentDate);

    //     // setShow(Platform.OS === 'android');
    //     if (Platform.OS === 'android') {
    //         setIsPickerShow(false);
    //     }

    //     let tempDate = new Date(currentDate);
    //     let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    //     let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();

    //     setText(fDate + '\n' + fTime);

    //     console.log(fDate + ' (' + fTime + ')');

    //     // setShow(null);
    // };

    // const showPicker = () => {
    //     setIsPickerShow(true);
    // };

    // const showMode = (currentMode) => {
    //     setShow(true);
    //     setMode(currentMode);
    // };

    const [isPickerShow, setIsPickerShow] = React.useState(false);
    const [date, setDate] = React.useState(new Date(Date.now()));

    const showPicker = () => {
        setIsPickerShow(true);
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(selectedDate);//value
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();

        // setText(fDate + '\n' + fTime);
        setText(fTime);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add To do</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Task"
                    placeholderTextColor={'#00000030'}
                    onChangeText={(text) => { setName(text) }}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Hour</Text>
                <Text style={styles.inputTitle}>{text}</Text>
            </View>

            {/* Display the selected date */}
            <View style={styles.pickedDateContainer}>
                <Text style={styles.pickedDate}>{date.toUTCString()}</Text>
            </View>
            {/* The button that used to trigger the date picker */}
            {!isPickerShow && (
                <View style={styles.btnContainer}>
                    <Button title="Show Picker" color="purple" onPress={showPicker} />
                </View>
            )}
            {/* The date picker */}
            {isPickerShow && (
                <DateTimePicker
                    value={date}
                    mode={'time'}//date
                    display={'default'}
                    // display={Platform.OS === 'android' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onChange}
                // style={styles.datePicker}
                />
            )}
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Today</Text>
                <Switch
                    value={isToday}
                    onValueChange={(value) => { setIsToday(value) }}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{ color: 'white' }}>Done</Text>
            </TouchableOpacity>
            <Text style={{ color: '#00000060' }}> If you disable today, the task will be considered as tomorrow</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10
    },
    inputTitle: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24
    },
    textInput: {
        borderBottomColor: '#00000030',
        borderBottomWidth: 1,
        width: '80%',
    },
    inputContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 30
    },
    button: {
        marginTop: 30,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        height: 46,
        borderRadius: 11,

        // width: 42,
        // height: 42,
        // borderRadius: 21,
        // backgroundColor: '#000',
        // position: 'absolute',
        // bottom: 50,
        // right: 28,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: .5,
        // shadowRadius: 5,
        // elevation: 5,
    },
    pickedDateContainer: {
        padding: 20,
        backgroundColor: '#eee',
        borderRadius: 10,
    },
    pickedDate: {
        fontSize: 18,
        color: 'black',
    },
    btnContainer: {
        padding: 30,
    },
    // This only works on iOS
    datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

})