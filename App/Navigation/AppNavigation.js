import { StackNavigator } from 'react-navigation';
import LoginScreen from '../Containers/LoginScreen';
import NotesScreen from '../Containers/NotesScreen';
import NoteViewScreen from '../Containers/NoteViewScreen';
import NoteAddScreen from '../Containers/NoteAddScreen';
import SearchNoteScreen from '../Containers/SearchNoteScreen';
import styles from './Styles/NavigationStyles';

const PrimaryNav = StackNavigator({
    LoginScreen: { screen: LoginScreen },
    NotesScreen: {	screen: NotesScreen },
    NoteViewScreen: {	screen: NoteViewScreen },
    NoteAddScreen: { screen: NoteAddScreen },
    SearchNoteScreen: { screen: SearchNoteScreen },
}, {
    headerMode: 'screen',
    initialRouteName: 'LoginScreen',
    navigationOptions: {
        headerStyle: styles.header
    }
});

export default PrimaryNav;
