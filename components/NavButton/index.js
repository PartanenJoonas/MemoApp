import React from 'react';
import { Button, StyleSheet, Pressable, Text} from 'react-native';
import { withNavigation } from 'react-navigation';

function GoToButton({ screenName }) {
    
  return (
    <Pressable
        style={({ pressed }) => [
            pressed ? { opacity: 0.8 } : {},
            
        ]} onPress ={() => this.props.navigation.navigate(screenName)}>
        <Text> {`Go to ${screenName}`} </Text>
    </Pressable>
  );
}

export default withNavigation(GoToButton);

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 65,
        backgroundColor: '#0c154a',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        
    },
})
