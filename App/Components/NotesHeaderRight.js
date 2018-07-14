import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import styles from './Styles/NotesHeaderRightStyles';

class NotesHeaderRight extends Component {
    render() {
        const enabled = this.props.enabled;
        return (
            <TouchableOpacity 
                style={styles.container} 
                onPress={this.props.onPress}
            >
                <Icon name={'md-options'} style={[styles.search, enabled && styles.enabled ]}/>
            </TouchableOpacity>
        );
    }
}

function mapStateToProps (state) {
    return {
        enabled: state.notes.filtered.length > 0
    };
}

export default connect(mapStateToProps)(NotesHeaderRight);