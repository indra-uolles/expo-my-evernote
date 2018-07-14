import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './Styles/OverlayStyles';

export default class Overlay extends Component {
    render() {
        return (
            <View style={[styles.container]}>
            </View>
        );
    }
}
