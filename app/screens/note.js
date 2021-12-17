import React, { useState, Component } from 'react';
import { StyleSheet, Text, Keyboard, ScrollView, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionBar from '../../components/ActionBar';
import { render } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDumbbell, faPlusCircle, faTrashAlt, faFolder, faSave } from '@fortawesome/free-solid-svg-icons'

export default class Note extends Component {
    
    state = {
        title: '',
        content:''
    }
    constructor(props) {
        super(props);
        this.getDataFromAsync();
    }

    //DEBUG FUNCTION
    debug = () => {
        console.log(this.state.content.split('\\n'))
    }
    
    saveButton = async () => {

        //TITLE 
        const newTitle = JSON.stringify(this.state.title)
        const formattedTitle = newTitle.slice(1, newTitle.length-1) 
        //CONTENT
        const newContent = JSON.stringify(this.state.content)
        const formattedContent = newContent.slice(1, newContent.length-1)

        console.log(formattedTitle)
        console.log(formattedContent)
        try {
            await AsyncStorage.setItem('title', formattedTitle)
            await AsyncStorage.setItem('content', formattedContent)
        } catch (error) {
            console.log(error)
        }
        
    }
    getDataFromAsync = async () => {
        try {
            const titleFromStorage = await AsyncStorage.getItem('title')
            const contentFromStorage = await AsyncStorage.getItem('content')
            if (titleFromStorage !== null) {
                this.setState({ title: titleFromStorage})
            }
            if (contentFromStorage !== null) {
            
                this.setState({ content: contentFromStorage.replace(/\\n/g, '\n') })
            }
        } catch (err) {
            
        }
    }

    
    render() {
        return ( 
            <View style={styles.container}>
                
                <View style={styles.centerview}>
                    <TextInput 
                    value={this.state.title} 
                    style={styles.header} 
                    placeholder='Otsikko'
                    onChangeText={value=> this.setState({ title: value })}
                    ></TextInput>
                    <ScrollView>
                        <TextInput 
                        multiline
                        value={this.state.content} 
                        style={styles.noteinput} 
                        placeholder='lisää asia'
                        onChangeText={value=> this.setState({ content: value })}
                        ></TextInput>
                    </ScrollView>
                </View>

                <View style={styles.bottomTab}>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesomeIcon icon = {faTrashAlt} style={styles.text} />
                        <Text style={styles.text}>del</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.debug}>
                        <FontAwesomeIcon icon = {faFolder} style={styles.text} />
                        <Text style={styles.text}>old</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.saveButton}>
                        <FontAwesomeIcon icon = {faSave} style={styles.text} />
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
        backgroundColor: "#0c154a",
        borderWidth: 1.5,
        borderColor: '#152684',
        borderRadius: 10,
    },
    button: {
        width: '15%',
        backgroundColor:"#fff",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#0c154a',
    },
    text: {
        fontWeight: 'bold',
        color: '#b8b8b8'
    },

})

/*this.state = {
    title: 'header',
    content: 'content',
}

*/