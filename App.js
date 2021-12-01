
import React from 'react';
import { StyleSheet, SafeAreaView, Text, Keyboard, ScrollView, View, StatusBar } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Note from './app/screens/note';
import Schedules from './app/screens/scheludes';
import Gym from './app/screens/gym';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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
            tabBarStyle: {backgroundColor: '#060a21' }}}>
          <Tab.Screen name="Gym" component={Gym} />
          <Tab.Screen name="Notes" component={Note} />
          <Tab.Screen name="Schedules" component={Schedules}/>
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
  actionbar: {
    flex: 1,
  },  
});
