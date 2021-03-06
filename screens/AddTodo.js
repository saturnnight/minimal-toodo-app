import * as React from 'react';
import { KeyboardAvoidingView, StyleSheet, Switch, View, Text, TouchableOpacity, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from '../components/CustomButton';
import { TextInput } from 'react-native-paper';
import { Entypo } from "@expo/vector-icons";
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
// import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function AddTodo() {
    // const [name, setName] = React.useState('');
    // const [date, setDate] = React.useState(new Date());


    // const [mode, setMode] = React.useState('time');
    // const [show, setShow] = React.useState(false);

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
    const [isToday, setIsToday] = React.useState(false);
    const [text, setText] = React.useState('');

    const [isPickerShow, setIsPickerShow] = React.useState(false);
    const [date, setDate] = React.useState(new Date(Date.now()));

    //textInputs
    const [txtTaskName, setTaskName] = React.useState("");
    const [txtTaskTime, setTaskTime] = React.useState("");

    const showPicker = () => {
        setIsPickerShow(true);
    };

    const onChange = (event, selectedDate) => {
        // if (Platform.OS === 'android') {   setIsPickerShow(false); }
        setIsPickerShow(false);

        const currentDate = selectedDate || date;
        setDate(selectedDate);//value

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        // let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
        let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
        let am_pm = 'AM';
        let hour = tempDate.getHours();
        let minute = tempDate.getMinutes();
        if (hour > 11) {
            am_pm = 'PM';
            if (hour > 12) {
                hour = hour - 12;
            }
        }
        if (hour == 0) {
            hour = 12;
        }

        const selectedTime = `${hour}:${minute} ${am_pm}`;
        setTaskTime(selectedTime);
    };

    // const onChangeDate = (event, selectedDate) => {
    //     // if (Platform.OS === 'android') {   setIsPickerShow(false); }
    //     setIsPickerShow(false);

    //     const currentDate = selectedDate || date;
    //     setDate(selectedDate);//value

    //     let tempDate = new Date(currentDate);
    //     let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    //     // let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    //     let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    //     let am_pm = 'AM';
    //     let hour = tempDate.getHours();
    //     let minute = tempDate.getMinutes();
    //     if (hour > 11) {
    //         am_pm = 'PM';
    //         if (hour > 12) {
    //             hour = hour - 12;
    //         }
    //     }
    //     if (hour == 0) {
    //         hour = 12;
    //     }

    //     const selectedTime = `${hour}:${minute} ${am_pm}` ;
    //     setTaskTime(selectedTime);
    // };
    const theme = {
        // ...DefaultTheme,
        colors: {
        //   ...DefaultTheme.colors,
          text: "#f5f5f5",
          accent: "#ffffff", 
          primary: "#a3d1ff", 
          placeholder: "#f5f5f5", 
          background: "transparent",
        },
      };
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Add To do</Text> */}
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Hola</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    label="Name Task"
                    value={txtTaskName}
                    style={styles.textInput}
                    onChangeText={txtTaskName => setText(setTaskName)}
                    theme={theme}
                    // activeUnderlineColor="#ba54f5"
                    // underlineColor="#838283"
                    // theme={{
                    //     colors:
                    //         { text: "#f5f5f5", accent: "#ffffff", primary: "#a3d1ff", placeholder: "#f5f5f5", background: "transparent" }
                    // }}
                    underlineColor="#f5f5f5"
                    underlineColorAndroid="#f5f5f5"
                // color="#fff"
                // placeholderTextColor='green'
                // underlineColorAndroid='green'
                />
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={{ width: '100%' }}>
                    <TextInput
                        label="Time"
                        // editable={false}
                        onFocus={showPicker}
                        value={txtTaskTime}
                        onChangeText={txtTaskTime => setText(setTaskTime)}
                        // style={{ width: '80%', backgroundColor:'#fff' }}
                        style={styles.textInput}
                        right={<TextInput.Icon name="clock" color={"#ba54f5"} />}

                    // maxLength={4}
                    // onChangeText={text => setText(text)}
                    />
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.timePicker}>
                    <Entypo name="clock" size={24} color="#FAFAFA"  onPress={() => console.log('hello')} />
                </TouchableOpacity> */}
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    label="Date"
                    // editable={false}
                    onFocus={() => { console.log('Hola soy ') }}
                    // value={text}
                    // style={{ width: '80%', backgroundColor:'#fff' }}
                    style={styles.textInput}
                    right={<TextInput.Icon name="calendar" color={"#ba54f5"} />}
                // mask="+[00] [000] [000] [000]"
                // maxLength={4}
                // onChangeText={text => setText(text)}
                />
                {/* <TouchableOpacity style={styles.timePicker}>
                    <Entypo name="clock" size={24} color="#FAFAFA"  onPress={() => console.log('hello')} />
                </TouchableOpacity> */}
            </View>
            {/* Display the selected date */}
            <View style={styles.pickedDateContainer}>
                {/* <Text style={styles.pickedDate}>{date.toUTCString()}</Text> */}
            </View>
            {/* The button that used to trigger the date picker */}

            {/* The date picker */}
            {isPickerShow && (
                <DateTimePicker
                    value={date}
                    mode={'time'}//date
                    // display={'default'}
                    // display={Platform.OS === 'android' ? 'spinner' : 'default'}
                    // is24Hour={false}
                    onChange={onChange}
                // style={styles.datePicker}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F7F8FA',
        paddingHorizontal: 30,
        // backgroundColor: '#171941'
        backgroundColor: '#040404',
    },
    title: {
        color: '#fff',
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
    customInputText: {
        text: "#f5f5f5",
        accent: "#ffffff", 
        primary: "#a3d1ff", 
        placeholder: "#f5f5f5", 
        background: "transparent"
    },
    // textInput: {
    //     borderBottomColor: '#00000030',
    //     borderBottomWidth: 1,
    //     width: '80%',
    // },
    textInput: {
        // borderBottomColor: '#00000030',
        // borderBottomWidth: 1,
        color: '#ffffff',
        // backgroundColor: "transparent",
        width: '100%',
        borderRadius: 4,
        // marginBottom: 25,
    },
    inputContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // paddingBottom: 30
        marginBottom: 25,
    },
    timePicker: {
        // marginTop: 30,
        // marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ba54f5',
        width: '18%',
        // height: 46,
        borderRadius: 4,
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
    //new
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},

})