
import React from 'react';
import { StyleSheet, Text, Keyboard, ScrollView, View, StatusBar } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import ActionBar from './components/ActionBar'
import Note from './components/note'

export default function App() {
  
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      
  
        <View style={styles.note}>
      
        <Note ></Note>
        </View>
        
        <View style={styles.actionbar}>
        <ActionBar>styles={styles.actionbar}</ActionBar>

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
    flex: 1,
    
    
  },
  note: {
    paddingTop: 10,
    flex: 12,
    width: '80%',
    height: 'auto',
    paddingBottom: 10,
    alignItems: 'center',
  }, 
  middlebutton: {
    height: 50,
    position: 'absolute',
    bottom:20,
    right: '50%',
    transform: [{translateX: 25}],
    flexDirection: 'row',

    backgroundColor: '#0c154a',
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingHorizontal: 15,
    
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 1,

},
midtext: {
    position: 'relative',
    fontWeight: 'bold',
    bottom: 5,
    fontSize: 40,
    color: 'white'
},

  
});
