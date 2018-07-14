import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/HeaderTitleStyles';

export default class HeaderTitle extends Component {

    render () {
        const {
            allowFontScaling,
            style,
            children
        } = this.props;

        return (
            <View style={styles.headerBody}><Text style={styles.title}>{children}</Text></View>
        );
    }
}
