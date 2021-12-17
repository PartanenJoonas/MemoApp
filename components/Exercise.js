import React from 'react';
import { StyleSheet, Text, View, Pressable, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const Exercise = ( props ) => {

 
    

    if (props.exercise !== undefined)
    {   return(
        
            
            <View style={styles.container}>
                <Text>{props.exercise[0]}</Text>
                <Text>{props.exercise[1] + ' x ' + props.exercise[2]}</Text>
                <Text>{props.exercise[3]}</Text>
                
                
            </View>
        
            
        )   
    }
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
})

export default Exercise;