import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderRightBtn from '../Components/HeaderRightBtn';
import { createItem } from '../Redux/actions/noteadd.actions'; 
import { showOverlay } from '../Redux/actions/root.actions';

class AddNoteHeaderRight extends Component {

    _onPress = () => {
        const { 
            dispatch, 
            navigation
        } = this.props; 
        
        dispatch(showOverlay());
        dispatch(createItem());
        navigation.goBack();
    }

    render() {

        return (
            <HeaderRightBtn text='Сохранить' onPress={this._onPress} disabled={this.props.disabled}/>
        );
    }
}

function mapStateToProps (state) {
    return {
        disabled: !state.noteadd.itemCreate.title.length
    };
}

export default connect(mapStateToProps)(AddNoteHeaderRight);
