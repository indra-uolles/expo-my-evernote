import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import styles from './Styles/HeaderRightBtnStyles';

export default class HeaderRightBtn extends Component {
    static defaultProps = { disabled: false }

    render () {
    	const {
            text,
            onPress,
            disabled
        } = this.props;

    	return (
            <Button 
                disabled={disabled} 
                transparent 
                onPress={onPress} 
                style={styles.btn}>
                    <Text 
                        style={!disabled ? styles.enabledText : styles.btnText} 
                        uppercase={false}>
                        {text}
                    </Text>
            </Button>            
	    );
    }
}