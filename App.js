
import React from 'react';
import { StyleSheet, Text, Keyboard, ScrollView, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import ActionBar from './components/ActionBar';
import Note from './components/note';
import Navigator from './routes/homeStack';


export default function App() {
  


  return (
    
  <View style={styles.container}>
    <StatusBar style="auto" />

    <View style={styles.container}>
        <Navigator style={styles.navigator}/>  
    </View>
  </View>
    
        
    );
  }
    {/*
<View style={styles.container}>
      <StatusBar style="auto" />
      
      
  
        
        
        <View style={styles.actionbar}>
        <ActionBar>styles={styles.actionbar}</ActionBar>

  </View>
        

      
     
</View>*/}
    
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safearea:{
    flex: 1,
  },
  navigator:{
    flex : 1,
    width: '80%',
  },
  actionbar: {
    flex: 1,
    
    
  },  
});
