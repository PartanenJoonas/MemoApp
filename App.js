
import React from 'react';
import { StyleSheet, Text, Keyboard, ScrollView, View, StatusBar } from 'react-native';
import ActionBar from './components/ActionBar'
import Note from './components/note'

export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      
      
      <View style={styles.note}>
        <Note></Note>
      </View>
        
      <View style={styles.actionbar}>  
        <ActionBar></ActionBar>
      </View>
      
     
    </View>
  );
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
    flex: 0,
    
  },
  note: {
    paddingTop: 10,
    flex: 14,
    width: '80%',
    height: 'auto',
    paddingBottom: 20,
    alignItems: 'center'
  }

  
});
