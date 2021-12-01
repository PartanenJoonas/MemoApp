import React from 'react';
import { StyleSheet, Text, Keyboard, ScrollView, View, TextInput, Button } from 'react-native';
import ActionBar from '../../components/ActionBar';

export default function Schedules ( { navigation } ) {
    return (
        <View style={styles.container}>
            <View style={styles.test}>
                <View style={styles.test2}>
                    <Text>06-07</Text>
                    <TextInput></TextInput>
                </View>
            </View> 
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: "#0c154a",
      alignItems: 'center',
    
      
    },
    test:{
        marginTop: 10,
        margin: 15, 
        padding: 2,
        width: '80%',
        backgroundColor: "#f7d023",
        flex: 10,
        
       
    },
    test2: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    actionbar: {
        flex: 0.9,
        
        
      },
})