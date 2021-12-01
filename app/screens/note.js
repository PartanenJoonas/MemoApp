import React from 'react';
import { StyleSheet, Text, Keyboard, ScrollView, View, TextInput, TouchableOpacity } from 'react-native';
import ActionBar from '../../components/ActionBar';

export default function Note ( { navigation }) {
    
    {
        return ( 
            <View style={styles.container}>
                
                <View style={styles.centerview}>
                    <TextInput style={styles.header} placeholder='Otsikko'></TextInput>
                    <ScrollView>
                        <TextInput multiline style={styles.noteinput} placeholder='lisää asia'></TextInput>
                    </ScrollView>
                </View>

                <View style={styles.bottomTab}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>del</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>old</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>save</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0c154a",
        width: '100%',
        alignItems:'center',
        paddingTop: 15,
    },
    centerview: {
        flex: 16,
        backgroundColor: "#f7d023",
        alignItems: 'stretch',
        width: '80%'
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        flexDirection: 'column',
    },
    noteinput: {
        padding: 4,
        width: '100%'
    },
    bottomTab: {
        flex: 1,
        width: '70%',
        bottom: 10,
        position: 'relative',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        backgroundColor: "#5d5d66",
        borderRadius: 10,
      },
      button: {
        width: '15%',
        backgroundColor:"#fff",
        alignItems: 'center',
      },
      text: {
        fontWeight: 'bold',
        
        color: 'black'
      },

})

