import React from 'react';
import { StyleSheet, Text, View, Pressable, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const Exercise = ( props ) => {

    const exercises = []

    if ( props.name != "" ) {

    } else {
        
    const exercise = {
        name: props.name, 
        sets: props.sets,
        reps: props.reps,
        weights: props.weight,
    }   

    exercises.push(exercise)
    console.log(exercises.length)

}
    for (let i = 0; i < exercises.length; i++) {
        console.log(exercises[i]);
        return(
        
            <View style={styles.container}>
                <Text>{exercises[i].name}</Text>
                <Text>{exercises[i].sets + 'x' + exercises[i].reps}</Text>
                <Text>{exercises[i].weights}</Text>
            </View>
        
        
        )   
    
    }
}

const styles = StyleSheet.create({
    container: {

    },
})

export default Exercise;