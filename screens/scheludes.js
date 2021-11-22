import React from 'react';
import { StyleSheet, Text, Keyboard, ScrollView, View, TextInput, Button } from 'react-native';
import ActionBar from '../components/ActionBar';

export default function Schedules ( { navigation } ) {
    return (
        <View style={styles.container}>
            <Text>haloo</Text>

            <ActionBar navigation ={ navigation } style={styles.actionbar}></ActionBar>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: "#0c154a",
      justifyContent: 'flex-end',
      alignItems: "center"
      
    },
    actionbar: {
        flex: 0.9,
        
        
      },
})