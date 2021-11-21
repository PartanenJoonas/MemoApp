import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';


const ActionBar = (props) =>{

    function print(){
        console.log('asda')
    };
    const [modalMid, setModalMid] = useState(false)
    const [modalLeft, setModalLeft] = useState(false)
    const [modalRight, setModalRight] = useState(false)
    return(
        
        <View style={styles.container}> 
            
            

            <View style={styles.lowerpart}>

                <Pressable style = {({ pressed}) => [
                        pressed ? { opacity : 0.8 } : {},
                        styles.sidebuttons
                ]} onPress={() => setModalLeft(true)}>
                <Text style={styles.text}>+</Text>
            </Pressable>
            <Modal
            animationType='slide'
            transparent={true}
            visible={modalLeft}
            onRequestClose={() => {setModalLeft(false)}}
            > 
            {/* for closing the popupmenu */}
                <TouchableOpacity
                    style={styles.touchableopacityLeft}
                    activeOpacity={1}
                    onPressOut={() => setModalLeft(false) }>
                {/* for disabling it from the actual menu so its usable */}
                <TouchableWithoutFeedback>
                <View style={styles.centerview}>
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
                    </View>
                </View>
                </TouchableWithoutFeedback>   
                </TouchableOpacity>    
            </Modal>

            
                {/* fix the overlapping issue with middle button */}
                    <Pressable 
                        style={({ pressed }) => [
                            pressed ? { opacity: 0.8 } : {}, 
                            styles.middlebutton,                       
                        ]}
                        onPress={() => setModalMid(true)}>
                        <Text style={styles.midtext}>+</Text>
                    </Pressable>
                    <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalMid}
                    onRequestClose={() => {setModalMid(false)}}
                    > 
                    {/* for closing the popupmenu */}
                        <TouchableOpacity
                            style={styles.touchableopacity}
                            activeOpacity={1}
                            onPressOut={() => setModalMid(false) }>
                        {/* for disabling it from the actual menu so its usable */}
                        <TouchableWithoutFeedback>
                        <View style={styles.centerview}>
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
                            </View>
                        </View>
                        </TouchableWithoutFeedback>   
                        </TouchableOpacity>    
                    </Modal>
                    
                

                <Pressable style={({ pressed }) => [
                    pressed ? { opacity : 0.8 } : {},
                    styles.sidebuttons
                ]} onPress ={() => setModalRight(true)}>
                    <Text style={styles.text}>+</Text>
                </Pressable>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalRight}
                    onRequestClose={() => {setModalRight(false)}}
                    > 
                    {/* for closing the popupmenu */}
                        <TouchableOpacity
                            style={styles.touchableopacityRight}
                            activeOpacity={1}
                            onPressOut={() => setModalRight(false) }>
                        {/* for disabling it from the actual menu so its usable */}
                        <TouchableWithoutFeedback>
                        <View style={styles.centerview}>
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
                            </View>
                        </View>
                        </TouchableWithoutFeedback>   
                        </TouchableOpacity>    
                    </Modal>
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
        justifyContent: 'flex-end',
        
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
        marginHorizontal: 60,
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
        // for debuggin
        //backgroundColor: '#4a4a4a',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
    },
    touchableopacityLeft: {
        flex: 1,
        // for debuggin
        //backgroundColor: '#4a4a4a',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        width: '100%',
    },
    touchableopacityRight: {
        flex: 1,
        // for debuggin
        //backgroundColor: '#4a4a4a',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
    },
    centerview: {
        borderRadius: 10,  
        paddingBottom: 0,
        marginBottom: 45,
        // for debuggin
        //backgroundColor: '#ffffff'
        //backgroundColor: '#0c154a',
    },
    modalview: {
        margin: 0, 
        borderRadius: 10,
        padding: 20,
        opacity: 0.99,
        backgroundColor: '#0c154a',
        shadowColor: "#000",
        shadowOffset: {
        width: 1,
        height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3
        },
    modalbuttons: {
        backfaceVisibility: 'visible',
        borderColor: '#e0e0e0',
        borderWidth: 1.2,
        borderRadius: 10,
        marginVertical: 2,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalbuttonstext: {
        fontSize: 20,
        paddingHorizontal: 2,
        color: '#e0e0e0'
    }
    
    
})

export default ActionBar