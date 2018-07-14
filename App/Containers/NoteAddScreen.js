import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/variables';
import HeaderLeft from '../Components/HeaderLeft';
import AddNoteHeaderRight from '../Components/AddNoteHeaderRight';
import NoteAdd from '../Components/NoteAdd';
import HeaderTitle from '../Components/HeaderTitle';
import styles from './Styles/NoteAddScreenStyles';
import { setItemTitle, setItemDescription, resetItem, getItemDetails } from '../Redux/actions/noteadd.actions';


class NoteAddScreen extends Component {

    static navigationOptions = (props) => {

        return {
            headerTitle: HeaderTitle,
            title: '',
            headerLeft: <HeaderLeft navigation={props.navigation}/>,
            headerRight: <AddNoteHeaderRight navigation={props.navigation}/>
        };
    };

    componentDidMount() {
        const { dispatch } = this.props;
        const id = this.props.navigation.state.params.id;
        dispatch(resetItem());
    }

    _onTitleStrChange = (text) => {
        const { dispatch } = this.props;
        dispatch(setItemTitle(text));
    }

    _onDescrStrChange = (text) => {
        const { dispatch } = this.props;
        dispatch(setItemDescription(text));
    }

    render () {
        const {
            itemCreate
        } = this.props; 
        
        return (
            <StyleProvider style={getTheme(variables)}>
                <Container style={styles.container}>
                    <Content>
                        <NoteAdd
                            titleStr={itemCreate.title}
                            titlePlh={'Название заметки'}
                            onTitleStrChange={this._onTitleStrChange}
                            descrStr={itemCreate.description}
                            descrPlh={'Есть идея?'}
                            onDescrStrChange={this._onDescrStrChange}
                        /> 
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

function mapStateToProps (state) {
    let keys = ['itemCreate'],
        obj = {};
    keys.map((key) => obj[key] = state.noteadd[key]);

    return obj;
}

export default connect(mapStateToProps)(NoteAddScreen);
