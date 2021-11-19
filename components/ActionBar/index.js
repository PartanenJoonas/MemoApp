import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu';

const ActionBar = (props) =>{

    function print(){
        console.log('asda')
    };
   const [modal,setModal] = useState(false)

    return(
        
        <View style={styles.container}> 
            
            

            <View style={styles.lowerpart}>   
                <Pressable style={styles.sidebuttons} onPress ={() => console.log('left button clicked')}>
                    <Text style={styles.text}>+</Text>
                </Pressable>

            
                
                    <Pressable 
                        style={({ pressed }) => [
                            pressed ? { opacity: 0.8 } : {}, 
                            styles.middlebutton,                       
                        ]}
                        onPress={() => setModal(true)}>
                        <Text style={styles.midtext}>+</Text>
                    </Pressable>
                    <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modal}
                    onRequestClose={() => {setModal(false)}}
                    >
                        <TouchableOpacity
                            style={styles.centerview}
                            activeOpacity={1}
                            onPressOut={() => setModal(false) }>
                        {/*  title= "<-" onPress ={() => setModal(false)} */}
                        <TouchableWithoutFeedback>
                        <View style={styles.touchableopacity}>
                            <View style={styles.modalview}>
                                <Pressable style={styles.modalbuttons}>
                                    <Text style={styles.modalbuttonstext}>Notes</Text>
                                </Pressable>
                                <Pressable style={styles.modalbuttons}>
                                    <Text style={styles.modalbuttonstext}>Schedule</Text>
                                </Pressable>
                                <Pressable style={styles.modalbuttons}>
                                    <Text style={styles.modalbuttonstext}>Gym</Text>
                                </Pressable>
                                <Pressable style={styles.modalbuttons} onPress ={() => setModal(false)}>
                                    <Text style={styles.modalbuttonstext}>Back</Text>
                                </Pressable>
                            </View>
                        </View>
                        </TouchableWithoutFeedback>   
                        </TouchableOpacity>    
                    </Modal>
                    
                

                <Pressable style={styles.sidebuttons} onPress ={() => console.log('left button clicked')}>
                    <Text style={styles.text}>+</Text>
                </Pressable>
        </View> 
            </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 65,
        backgroundColor: '#0c154a',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    lowerpart: {
        width: '100%',
        height: 55,
        backgroundColor: '#060a21',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
    },
    middlebutton: {
        height: 50,
        position: 'absolute',
        bottom:20,
        right: '50%',
        transform: [{translateX: 25}],
        flexDirection: 'row',
        backgroundColor: '#0c154a',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
    },
    sidebuttons: {
        backgroundColor: '#0c154a',
        height: 38,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        
    },
    text: {
        position:'relative',
        bottom: 5,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white'
    },
    midtext: {
        position: 'relative',
        fontWeight: 'bold',
        bottom: 5,
        fontSize: 40,
        color: 'white'
    },
    /* ModalView styles */
    touchableopacity: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    centerview: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 30,
    },
    modalview: {
        margin: 20, 
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 3
        },
    modalbuttons: {
        backfaceVisibility: 'visible',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalbuttonstext: {
        fontSize: 25,
        paddingHorizontal: 2
    }
    
    
})

export default ActionBar