import React, { useState } from 'react';
import { StyleSheet, Text, Button,  Platform, View, TouchableOpacity, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Schedules ( ) {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [selectedDate, setTaskDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [showPage, setPage] = useState(false);
    const [showStartPage, setStart] = useState(true);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
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
      const debug = () => {
          console.log(date)
          setPage(true)
      }
      const handleConfirm = () => {
          console.log('confirmed')
      }

      const formatDateAndTime = () => {
          let datetime = date.toString()
          let selectedDate;
          let dateArray = []
          dateArray = datetime.split( ' ' )
          
          //dateArray = dateArray.slice(0, 4)
          selectedDate = dateArray[0] + ' ' + dateArray [2] + ' ' + dateArray [1] + ' ' + dateArray [3]
          setTaskDate(selectedDate)
          console.log(selectedDate)
          console.log(datetime)
      }

      const pickDate = 
        <View style={styles.datePage}>
            <Text>{ selectedDate.toString() }</Text>

            
            <TouchableOpacity 
            style={styles.dateButtons}
            onPress={showDatepicker} >
                <Text>Set date</Text>
            </TouchableOpacity>
              
            <TouchableOpacity 
            style={styles.dateButtons}
            onPress={showTimepicker}>
                <Text>Set time</Text>
            </TouchableOpacity>

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
    </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: "#0c154a",
      alignItems: 'center',
    
      
    },
    datePage: {
        flex: 1,
        backgroundColor: '#f7d023',
        width: '80%'
    },
    dateButtons: {
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
    actionbar: {
        flex: 0.9,
        
        
      },
})