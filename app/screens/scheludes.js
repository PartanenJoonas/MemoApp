import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button,  Platform, View, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDumbbell, faPlusCircle, faTrashAlt, faFolder, faSave } from '@fortawesome/free-solid-svg-icons'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Schedules ( ) {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [start, setStart] = useState(2);
    const [selectedDate, setTaskDate] = useState('Select date -->')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [showPage, setPage] = useState(false);
    const [showStartPage, setStartPage] = useState(true);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        
        
        
      };
    
      useEffect(() => {
        formatDateAndTime();
    });
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };
      

      const formatDateAndTime = () => {
          let datetime = date.toString()
          let selectedDate;
          let time;
          let dateArray = []
          dateArray = datetime.split( ' ' )
          console.log(startTime)
          selectedDate = dateArray[0] + ' ' + dateArray [2] + ' ' + dateArray [1] + ' ' + dateArray [3]
          time = dateArray[4].slice(0, 5).toString()

          setTaskDate(selectedDate)

          if(start === 1) {
              setStartTime(time)
              console.log('starttime')
          } else if (start === 0){
              setEndTime(time)
              console.log('endtime')
          }
          
          
      }

      const pickDate = 
        <View style={styles.datePage}>
            

            <View style={styles.date}>
                <Text style={styles.dateplaceholder}>{ selectedDate.toString() }</Text>
                <TouchableOpacity 
                style={styles.dateButtons}
                onPress = {showDatepicker} >
                    <Text>Set date</Text>
                </TouchableOpacity>
            </View>
              
            <View style={styles.time}>
                <Text style={styles.timeplaceholder}>{ startTime.toString() } </Text>
                <TouchableOpacity 
                style={styles.dateButtons}
                onPress = {() => {showTimepicker(); 
                                setStart(1);}}>
                    <Text>Start time</Text>
                </TouchableOpacity>
            
                <Text style={styles.timeplaceholder}>{ endTime.toString() } </Text>
                <TouchableOpacity 
                style={styles.dateButtons}
                onPress = {() => {showTimepicker();
                                setStart(0);}}>
                    <Text>End time</Text>
                </TouchableOpacity>
            </View>

            <TextInput
            placeholder="Caption"></TextInput>
            <TextInput
            placeholder="Additional info"></TextInput>
            <View>
            <Button 
            onPress={formatDateAndTime} title="debug"
            ></Button>
            </View>
        </View>
        
        

      const pageContent = 
        <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
        </View>

    
    return (

        
        <View style={styles.container}>
            {showStartPage && (
            pickDate
            )}
            {show && (
            <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            minuteInterval={5}
            is24Hour={true}
            display="default"
            onChange={onChange}
            
            />
        )}
            {/*
            <View>
                <Button onPress={showDatepicker} title="Show date picker!" />
            </View>
            <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            <View>
                <Button onPress={debug} title="debug" />
            </View>
            */}
            
            {showPage && (
                pageContent
                
            )}
            <View style={styles.bottomTab}>
                <TouchableOpacity style={styles.button} >
                    <FontAwesomeIcon icon = {faTrashAlt} style={styles.text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <FontAwesomeIcon icon = {faFolder} style={styles.text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <FontAwesomeIcon icon = {faSave} style={styles.text} />
                </TouchableOpacity>
            </View>
    </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: "#0c154a",
      alignItems: 'center',
      paddingTop: 15,
    
      
    },
    datePage: {
        flex: 16,
        backgroundColor: '#f7d023',
        width: '80%'
    },
    date: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '40%',
        padding: 10,
    },
    time : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    dateButtons: {
        borderRadius: 10,
        padding: 4,
        backgroundColor: '#fff'
    },
    test:{
        marginTop: 10,
        margin: 15, 
        padding: 2,
        width: '80%',
        backgroundColor: "#f7d023",
        flex: 10,
        
       
    },
    test2: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    dateplaceholder: { 
        width: '40%'
    },
    timeplaceholder: {
        width : '15%'
    },
    actionbar: {
        flex: 0.9,
        
        
      },
    bottomTab: {
        flex: 1,
        width: '70%',
        bottom: 10,
        position: 'relative',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        backgroundColor: "#0c154a",
        borderWidth: 1.5,
        borderColor: '#152684',
        borderRadius: 10,
    },
    button: {
        width: '15%',
        backgroundColor:"#fff",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#0c154a',
    },
    text: {
        fontWeight: 'bold',
        color: '#b8b8b8'
    },
})