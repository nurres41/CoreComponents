import { View, Text, StyleSheet } from 'react-native'

export default function Greet({ name }){
    return(
        <View style={styles.borderRadiusView}>
            <Text style={[styles.box,styles.lightBlueBg,styles.boxShadow]}>Hello {name}</Text>
            <Text style={[styles.lightGreenBg,styles.box,styles.androidShadow]}>Hello {name} dasda</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        padding: 10,
        backgroundColor: 'pink',
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 20,
        borderWidth: 2,
        borderColor: 'red'
    },
    lightBlueBg:{
        backgroundColor: 'lightblue'
    },
    lightGreenBg:{
        backgroundColor: 'lightgreen'
    },
    borderRadiusView: {
        borderRadius: 20,
        borderWidth: 5,
    },
    boxShadow: {
        shadowColor: '#333333',
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    androidShadow: {
        elevation: 10
    }
})