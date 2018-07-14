import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { H1, Text, List, ListItem } from 'native-base';
import styles from './Styles/NoteViewStyles';

export default class NoteView extends Component {

    render () {
        const { note } = this.props;

        return (
            <Fragment>
                <H1 style={styles.title}>{note.title}</H1>
                <Text style={styles.description}>{note.description || '' }</Text>
            </Fragment>
        );
    }
}