import React from 'react';
import { StyleSheet, Text, Keyboard, ScrollView, View, TextInput, Button } from 'react-native';
import ActionBar from '../components/ActionBar';

export default function Note ({ navigation }) {
    
    {
        return ( 
            <View style={styles.actionbar}>
                <View style={styles.container}>
                    <TextInput style={styles.header} placeholder='Otsikko'></TextInput>
                    <ScrollView>
                        <TextInput multiline style={styles.noteinput} placeholder='lisää asia'></TextInput>
                    </ScrollView>
                </View >
                {/*<ActionBar navigation={ navigation } style={styles.actionbar}></ActionBar>*/}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    actionbar: {
        flex: 1,
        
        
      },

})

