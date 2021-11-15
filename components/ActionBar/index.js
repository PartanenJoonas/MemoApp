import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

const ActionBar = (props) =>{
    
    return(
        <View style={styles.container}> 
            
            

            <View style={styles.lowerpart}>   
                <Pressable style={styles.sidebuttons} onPress ={() => console.log('left button clicked')}>
                    <Text style={styles.text}>+</Text>
                </Pressable>

                <Pressable style={styles.middlebutton} onPress ={() => console.log('left button clicked')}>
                    <Text style={styles.midtext}>+</Text>
                </Pressable>

                <Pressable style={styles.sidebuttons} onPress ={() => console.log('left button clicked')}>
                    <Text style={styles.text}>+</Text>
                </Pressable>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 65,
        backgroundColor: '#0c154a',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    lowerpart: {
        width: '100%',
        height: 45,
        backgroundColor: '#060a21',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    middlebutton: {
        height: 50,
        backgroundColor: '#0c154a',
        fontWeight: 'bold',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingBottom: 5,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
    },
    sidebuttons: {
        backgroundColor: '#0c154a',
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white'
    },
    midtext: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white'
    },
    
    
})

export default ActionBar