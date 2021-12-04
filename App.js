
import React from 'react';
import { StyleSheet, SafeAreaView, Text, Keyboard, ScrollView, View, StatusBar } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDumbbell, faStickyNote, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Note from './app/screens/note';
import Schedules from './app/screens/scheludes';
import Gym from './app/screens/gym';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

library.add(faDumbbell, faStickyNote, faClipboardList)

const statusbar = <StatusBar  barStyle = "light-content" hidden = {false} backgroundColor = "#0c154a" translucent = {false}/>;
export default function App() {
  
  const Tab = createBottomTabNavigator();

  return (
    
  <SafeAreaView style={styles.container}>
    {statusbar}
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Notes" screenOptions={{
            
            headerShown:false,
            tabBarHideOnKeyboard:true,
            tabBarStyle: {backgroundColor: '#060a21',
            borderTopColor: '#060a21',
            borderWidth: 1}}}>

          <Tab.Screen options={{
            tabBarIcon: (tabGym) => (
              <FontAwesomeIcon icon = { faDumbbell } color = { tabGym.focused ? '#0073de' : '#b8b8b8' }/>
            )}} 
            name="Gym" component={Gym} />

          <Tab.Screen options={{
            tabBarIcon: (tabNotes) => (
              <FontAwesomeIcon icon = { faStickyNote } color = { tabNotes.focused ? '#0073de' : '#b8b8b8' } />
            )
          }}name="Notes" component={Note} />
          <Tab.Screen options={{
            tabBarIcon: (tabSchedule) => (
              <FontAwesomeIcon icon = { faClipboardList } color = { tabSchedule.focused ? '#0073de' : '#b8b8b8' } />
            )}} 
            name="Schedules" component={Schedules}/>
        </Tab.Navigator>
      </NavigationContainer>
    
  </SafeAreaView>
    
        
    );
  }
    

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
});
