import React, { Component, Fragment } from 'react';
import { Item, Input, Textarea } from 'native-base';
import PropTypes from 'prop-types';
import styles from './Styles/NoteAddStyles';

export default class NoteAdd extends Component {
    static propTypes = {
        titleStr: PropTypes.string,
        onTitleStrChange: PropTypes.func,
        descrStr: PropTypes.string,
        onDescrStrChange: PropTypes.func,
    }

    render () {
        const {
            titleStr,
            titlePlh,
            onTitleStrChange,
            descrStr,
            descrPlh,
            onDescrStrChange
        } = this.props;

        return (
            <Fragment>
                <Item>
                    <Input 
                        placeholder = {titlePlh} 
                        value = {titleStr}
                        onChangeText = {onTitleStrChange}
                        style={styles.input}
                        placeholderTextColor={'#ccc'}
                    />
                </Item>
                <Textarea 
                    placeholder = {descrPlh} 
                    value = {descrStr}
                    onChangeText = {onDescrStrChange}
                    style={styles.textArea}
                    placeholderTextColor={'#ccc'}
                />
            </Fragment>
        );
    }
}