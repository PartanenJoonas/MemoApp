import React from 'react';
import { StyleSheet, Text, Keyboard, ScrollView, View, TextInput, Button } from 'react-native';
import ActionBar from '../components/ActionBar';

export default function Note ( { navigation }) {
    
    {
        return ( 
            <View style={styles.centerview}>
                
                <View style={styles.container}>
                    <TextInput style={styles.header} placeholder='Otsikko'></TextInput>
                    <ScrollView>
                        <TextInput multiline style={styles.noteinput} placeholder='lisää asia'></TextInput>
                    </ScrollView>
                </View>
                <View style={styles.actionbar}>
                    <ActionBar navigation = { navigation } ></ActionBar>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: "#f7d023",
        width: '80%',
        height: '80%',
        justifyContent:'center',
        margin: 15,
    },
    centerview: {
        flex: 3,
        backgroundColor: "#0c154a",
        alignItems: 'center'
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        flexDirection: 'column',
    },
    noteinput: {
        padding: 2,
    },
    actionbar: {
        flex: 0.9,
        
        
      },

})

