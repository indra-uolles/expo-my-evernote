import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Container, Content, StyleProvider, Text, Fab, Icon, Spinner } from 'native-base';
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/variables';
import { beforeLoad, loadItems } from '../Redux/actions/notes.actions';
import HeaderTitle from '../Components/HeaderTitle';
import HeaderLeft from '../Components/HeaderLeft';
import NotesHeaderRight from '../Components/NotesHeaderRight';
import Note from '../Components/Note';
import NoAdded from '../Components/NoAdded';
import styles from './Styles/NotesScreenStyles';

class NotesScreen extends Component {
    static navigationOptions = (props) => {
        return {
            headerTitle: HeaderTitle,
            title: 'Заметки',
            headerLeft: <HeaderLeft navigation={props.navigation}/>,
            headerRight: <NotesHeaderRight onPress={() => props.navigation.navigate('SearchNoteScreen')}/>
        };
    };
    
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(beforeLoad());
        dispatch(loadItems());
    }

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => this._onPress(item.id)}>
                <Note note={item}/>
            </TouchableOpacity>
        );
    };

    _onPress = (id) => {
        this.props.navigation.navigate(
            'NoteViewScreen',
            { id },
        );
    }

    render () {
        const {
            fetching,
            notes, 
            navigation,
            filtered
        } = this.props;  

        const notesFiltered = filtered.length > 0 ? 
            notes.filter((note) => filtered.includes(note.id)) : 
            notes;

        return (
            <StyleProvider style={getTheme(variables)}>
                <Container style={styles.container}>
                    <Content>
                        {
                            fetching ?
                                <Spinner/>
                                :
                                null
                        }
                        {notesFiltered.length > 0 && <FlatList
                            data={notesFiltered}
                            renderItem={this._renderItem}
                            keyExtractor={(item) => item.id}
                        />}
                    </Content>
                    {notes.length == 0 && !fetching && <NoAdded/>}
                    <Fab
                        containerStyle={{ }}
                        style={{ backgroundColor: '#6cbf5d' }}
                        position="bottomRight"
                        onPress={() => navigation.navigate('NoteAddScreen', { title: 'Добавить заметку'})}>
                        <Icon name={'md-add'}/>
                    </Fab>
                </Container>
            </StyleProvider>
        );
    }
}

function mapStateToProps (state) {
    let keys = ['fetching', 'notes', 'filtered'],
        obj = {};
    keys.map((key) => obj[key] = state.notes[key]);
    return obj;
}

export default connect(mapStateToProps)(NotesScreen);