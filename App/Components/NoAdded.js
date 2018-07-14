import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/NoAddedStyles';

export default class NoAdded extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.msg}>
                    Вы пока ничего не добавили
                </Text>
            </View>
        );
    }
}
