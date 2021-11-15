import React from 'react';
import { StyleSheet, Text, Keyboard, ScrollView, View, TextInput, Button } from 'react-native';

class Note extends React.Component {
    
    render(){
        return ( 
            <View style={styles.container}>
                <TextInput style={styles.header} placeholder='Otsikko'></TextInput>
                <ScrollView>
                    <TextInput multiline style={styles.noteinput} placeholder='lisää asia'></TextInput>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f7d023",
        width: '100%',
        height: '100%',
        justifyContent:'flex-start'
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        flexDirection: 'column',
    },
    noteinput: {
        padding: 2,
    }

})

export default Note