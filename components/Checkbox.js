import react from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

// export default function Checkbox({
//     id,
//     text,
//     isCompleted,
//     isToday,
//     hour
// }){
//     return isToday ?(
//         <TouchableOpacity style={isCompleted ? styles.checked:styles.unChecked}>
//             {isCompleted && <Entypo name="check" size={16} color="#FAFAFA"/>}
//         </TouchableOpacity>
//     ):(
//         <View style={styles.isToday}>

//         </View>
//     )
// }
const Checkbox = (props) => {
    return props.isToday ? (
        <View style={styles.container}>
            <TouchableOpacity style={props.isCompleted ? styles.checked : styles.unChecked}>
                {props.isCompleted && <Entypo name="check" size={16} color="#FAFAFA" />}
            </TouchableOpacity>
            <View>
                <Text style={props.isCompleted ? [styles.text, { textDecorationLine: 'line-through', color: '#73737330' }] : styles.text}>{props.text}</Text>
                <Text style={props.isCompleted ? [styles.text, { textDecorationLine: 'line-through', color: '#73737330' }] : styles.text}>{props.hour}</Text>
            </View>
        </View>
    ) : (
        <View style={styles.container}>
            <TouchableOpacity style={styles.isToday}>
                {/* {props.isCompleted && <Entypo name="check" size={16} color="#FAFAFA" />} */}
            </TouchableOpacity>
            <View>
                <Text style={props.isCompleted ? [styles.text, { textDecorationLine: 'line-through', color: '#73737330' }] : styles.text}>{props.text}</Text>
                <Text style={props.isCompleted ? [styles.text, { textDecorationLine: 'line-through', color: '#73737330' }] : styles.text}>{props.hour}</Text>
            </View>
        </View>
    )
};

export default Checkbox;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: "row",
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#737373'
    },
    time: {
        fontSize: 13,
        fontWeight: '500',
        color: '#a3a3a3'
    },
    checked: {
        width: 20,
        height: 20,
        marginRight: 13,
        borderRadius: 6,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .3,
        shadowRadius: 5,
        elevation: 5,
    },

    unChecked: {
        width: 20,
        height: 20,
        marginRight: 13,
        borderRadius: 6,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        shadowColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .3,
        shadowRadius: 5,
        elevation: 5,
    },
    isToday: {
        width: 10,
        height: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#fff',//'#262626',
        marginRight: 13,
        marginLeft: 15,
    }


})