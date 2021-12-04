import React from 'react';
import { StyleSheet, Text, View, Pressable, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const Exercise = ( props ) => {
    return(
        <View style={styles.container}>
            <Text>{props.name}</Text>
            <Text>{props.sets + 'x' + props.reps}</Text>
            <Text>{props.weight}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
})

export default Exercise;