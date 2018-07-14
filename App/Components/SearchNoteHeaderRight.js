import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderRightBtn from '../Components/HeaderRightBtn';
import { searchItems } from '../Redux/actions/searchnote.actions'; 
import { showOverlay } from '../Redux/actions/root.actions';

class SearchNoteHeaderRight extends Component {

    _onPress = () => {
        const { 
            dispatch, 
            navigation
        } = this.props; 
        
        dispatch(showOverlay());
        dispatch(searchItems());
        navigation.goBack();
    }

    render() {

        return (
            <HeaderRightBtn text='Искать' onPress={this._onPress} disabled={false}/>
        );
    }
}

export default connect()(SearchNoteHeaderRight);