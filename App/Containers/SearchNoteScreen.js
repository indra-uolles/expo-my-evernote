import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/variables';
import HeaderLeft from '../Components/HeaderLeft';
import SearchNoteHeaderRight from '../Components/SearchNoteHeaderRight';
import NoteSearch from '../Components/NoteSearch';
import HeaderTitle from '../Components/HeaderTitle';
import styles from './Styles/SearchNoteScreenStyles';
import { setSearchTitle, setSearchDescription } from '../Redux/actions/searchnote.actions';


class SearchNoteScreen extends Component {

    static navigationOptions = (props) => {

        return {
            headerTitle: HeaderTitle,
            title: 'Поиск заметок',
            headerLeft: <HeaderLeft navigation={props.navigation}/>,
            headerRight: <SearchNoteHeaderRight navigation={props.navigation}/>
        };
    };

    _onTitleStrChange = (text) => {
        const { dispatch } = this.props;
        dispatch(setSearchTitle(text));
    }

    _onDescrStrChange = (text) => {
        const { dispatch } = this.props;
        dispatch(setSearchDescription(text));
    }

    render () {
        const {
            title,
            description
        } = this.props; 
        
        return (
            <StyleProvider style={getTheme(variables)}>
                <Container style={styles.container}>
                    <Content>
                        <NoteSearch
                            titleStr={title}
                            titlePlh={'Название'}
                            onTitleStrChange={this._onTitleStrChange}
                            descrStr={description}
                            descrPlh={'Описание'}
                            onDescrStrChange={this._onDescrStrChange}
                        /> 
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

function mapStateToProps (state) {
    let keys = ['title', 'description'],
        obj = {};
    keys.map((key) => obj[key] = state.searchnote[key]);

    return obj;
}

export default connect(mapStateToProps)(SearchNoteScreen);