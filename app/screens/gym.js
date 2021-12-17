import React, { Component, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, ScrollView, View, TextInput, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDumbbell, faPlusCircle, faTrashAlt, faFolder, faSave } from '@fortawesome/free-solid-svg-icons'
import Exercise from '../../components/Exercise';

export default class Gym extends Component {

    state = {
        title: '',
        newPage: true,
        modal: true,
        showNew: true,
        exerciseCount = 0,
        exerName: '',
        exerSets:'',
        exerReps: '',
        exerWeight:'',
    };

    

    showExercise = () => {
        
        
        

        
            /*this.setState({exerName : '' })
            this.setState({exerSets : '' })
            this.setState({exerReps : '' })
            this.setState({exerWeight : '' })*/


            

        

        this.setState({ showNew : true})
    }

    save = (event, index) => {
        //Modalthis.setState({ exercises : [...this.state.exercises, ]})
        console.log(this.state.exerSets + 'x' + this.state.exerReps);
        this.setState({showNew : true})
        
        
            
                this.setState({exercises : this.state.exerName}),
                /*this.state.exercises.object[0].exerSets=this.state.exerSets,
                this.state.exercises.object[0].exerReps=this.state.exerReps,
                this.state.exercises.object[0].exerWeight=this.state.exerWeight,*/
            
        
        
        console.log(this.state.exercises)
    }
    
    render(){
        let Exercisetest = <Exercise name={this.state.exerName}
        sets={this.state.exerSets}
        reps={this.state.exerReps}
        weight={this.state.exerWeight}></Exercise>
        const newPage = this.state.newPage
        let pageContent;
        if ( newPage == false ) 
        {
            pageContent =   <TouchableOpacity style={styles.newButton} onPress={() => this.setState({ newPage : true }) }>
                                <Text style={styles.text}>+ Lisää uusi ohjelma</Text>
                            </TouchableOpacity>
        } else 
        {
            pageContent =   <View>
                                <TextInput multiline maxLength={60} style={styles.header}
                                    placeholder="Otsikko"
                                ></TextInput>

                               
                                
                                {/*{this.state.showNew &&
                                <Exercise style={{opacity:'0'}}

                                    name={this.state.exerName}
                                    sets={this.state.exerSets}
                                    reps={this.state.exerReps}
                                    weight={this.state.exerWeight} />
                                
                                }
                                
                                    this.state.exercises.map((exercise) => {
                                        return <Exercise
                                            name={this.state.exerName}
                                            sets={this.state.exerSets}
                                            reps={this.state.exerReps}
                                            weight={this.state.exerWeight}
                                        ></Exercise>
                                    }) 
                                }*/}
                                <TouchableOpacity style={styles.addButton} onPress={() => this.setState({ modal : true })}>
                                    <FontAwesomeIcon icon ={ faPlusCircle } style={styles.icon}/>
                                    <Text>Lisää uusi liike</Text>
                                </TouchableOpacity>
                                <Modal
                                    animationType='slide'
                                    transparent={true}
                                    visible={this.state.modal}
                                    onRequestClose={() => this.setState({ modal : false })}
                                    > 
                                    {/* for closing the popupmenu */}
                                        <TouchableOpacity
                                            style={styles.modal}
                                            activeOpacity={1}
                                            onPressOut={() => this.setState({ modal : false }) } >
                                            
                                        {/* for disabling it from the actual menu so its usable */}
                                        <TouchableWithoutFeedback>
                                        <View style={styles.modalContaner}>
                                            <View style={styles.modalHeader}>
                                                <Text> Uusi liike </Text>
                                            </View>
                                            <View style={styles.modalContent}>
                                                <Text> Liike: </Text>
                                                <TextInput 
                                                placeholder = 'Liikkeen nimi'
                                                onChangeText = {value=> this.setState({ exerName : value })}
                                                ></TextInput>
                                            </View>
                                            <View style={styles.modalContent}>
                                                <Text> Sarjat: </Text>
                                                <TextInput 
                                                placeholder = 'Sarjat'
                                                onChangeText = {value=> this.setState({ exerSets : value })}
                                                ></TextInput>
                                                <Text> Toistot: </Text>
                                                <TextInput 
                                                placeholder = 'Toistot'
                                                onChangeText = {value=> this.setState({ exerReps : value })}
                                                ></TextInput>
                                            </View>
                                            <View style={styles.modalContent}>
                                                <Text> Vastus: </Text>
                                                <TextInput 
                                                placeholder = 'Vastus (kg)'
                                                onChangeText = {value=> this.setState({ exerWeight : value })}
                                                ></TextInput>
                                            </View>
                                            <View style={styles.modalButtons}>
                                                <TouchableOpacity 
                                                style={styles.modalSave}
                                                onPress = {this.showExercise}>
                                                    <Text>Lisää listalle</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                style={styles.modalCancel}
                                                onPress={() => this.setState({ modal : false })}>
                                                    <Text>peruuta</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        </TouchableWithoutFeedback>   
                                        </TouchableOpacity>    
                                    </Modal>
                            </View>
        }    
        return (
            <View style={ styles.container}>
                <View style={[this.state.newPage ? styles.newPage : styles.emptyPage]}>
                    
                    {pageContent}
                    
                </View> 
                <View style={styles.bottomTab}>
                        <TouchableOpacity style={styles.button} onPress={() => this.setState({ newPage : false }) }>
                            <FontAwesomeIcon icon = {faTrashAlt} style={styles.text} />
                            <Text style={styles.text}>del</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => console.log('mid')}>
                            <FontAwesomeIcon icon = {faFolder} style={styles.text} />
                            <Text style={styles.text}>old</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => console.log('save')}>
                            <FontAwesomeIcon icon = {faSave} style={styles.text} />
                            <Text style={styles.text}>save</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: "#0c154a",
        alignItems: 'center',
        paddingTop: 15,
    },
    emptyPage:{
        width: '80%',
        backgroundColor: "#f7d023",
        flex: 16,  
        alignItems: 'center',  
        justifyContent:'center' 
    },
    newPage: {
        width: '80%',
        backgroundColor: "#f7d023",
        flex: 16,  
        alignItems: 'center',  
        justifyContent:'flex-start' 
    },  
    newButton: {
        width: '80%',
        borderColor: '#000',
        borderWidth: 1,
        alignItems: 'center',

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
    header: {
        padding: 2,
        borderWidth: 1,
        borderColor: '#f7d023',
        fontWeight: 'bold',
        fontSize: 20,
        flexDirection: 'column',

    },
    addButton: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        

    },
    icon: {
        marginRight: 5,
    },
    //Modal
    modal: {
        flex: 1,
        justifyContent: 'center',
        //backgroundColor: '#fff',
    },
    modalContaner: {
        borderRadius: 10,
        backgroundColor: '#fff',
        marginHorizontal: '5%', 
        //marginBottom: '40%',
        
    },
    modalHeader: {
        alignItems: 'center',
        backgroundColor: '#0073de',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modalContent: {
        backgroundColor: '#a1a1a1',
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    //to round of the edges at the bottom
    modalContentBtmRow: {
        backgroundColor: '#a1a1a1',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    modalButtons: {
        backgroundColor: '#a1a1a1',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10,
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        
    },
    modalSave: {
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        width: '30%',
        backgroundColor: '#39f728',
    },
    modalCancel: {
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        width: '30%',
        backgroundColor: '#f72828'
    },
})