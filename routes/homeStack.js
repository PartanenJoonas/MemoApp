import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Note from '../screens/note';
import Schedules from '../screens/scheludes';

const screens = {
    Note: {
        screen: Note,
        navigationOptions: {
            headerShown: false,
        },  
    },
    Schedules: {
        screen: Schedules,
        navigationOptions: {
            headerShown: false,
        },  
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);