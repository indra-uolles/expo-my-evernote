import React, { Component } from 'react';
import { Container, Content, StyleProvider } from 'native-base';
import { connect } from 'react-redux';
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/variables';
import { loadItemViewAsync } from '../Redux/actions/noteview.actions';
import HeaderLeft from '../Components/HeaderLeft';
import HeaderRightBtn from '../Components/HeaderRightBtn';
import NoteView from '../Components/NoteView';
import HeaderTitle from '../Components/HeaderTitle';
import styles from './Styles/NoteViewScreenStyles';

class NoteViewScreen extends Component {

    static navigationOptions = (props) => {

        return {
            headerTitle: HeaderTitle,
            title: '',
            headerLeft: <HeaderLeft navigation={props.navigation}/>,
            headerRight: null
        };
    };

    componentDidMount = () => {
        this.requestItem();
    }

    async requestItem() {
        const id = this.props.navigation.state.params.id;
        const dispatch = this.props.dispatch;
        dispatch(loadItemViewAsync(id));
    }

    render () {
        const {
            note
        } = this.props;

        return (
            <StyleProvider style={getTheme(variables)}>
                <Container style={styles.container}>
                    <Content>
                        {note && <NoteView note={note} />}  
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

function mapStateToProps (state) {
    return {
        note: 'noteview' in state ? state.noteview.itemView : null
    };
}

export default connect(mapStateToProps)(NoteViewScreen);