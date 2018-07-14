import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import styles from './Styles/NoteStyles';

export default class Note extends Component {
    static propTypes = {
        note: PropTypes.object,
    }

    render () {
        const { note } = this.props;
        
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.date}>
                    {moment(note.createdAt).format('DD/MM/YYYY')} ({moment(note.createdAt).fromNow()})
                </Text>
                <Text style={styles.description}>{note.description}</Text>
            </View>
        );
    }
}