import React, { Component } from 'react';
import { Text } from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import VIcon from 'react-native-vector-icons/Entypo';
import styles from './Styles/HeaderRightMenuStyles';

export default class HeaderRightMenu extends Component {

    render () {
    	const {
            onSelect,
            options
        } = this.props;

    	return (
            <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                <MenuTrigger>
                    <VIcon name='dots-three-vertical' size={24} color={'#ccc'}/>
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption value={1}>
                        <Text style={styles.menuOption}>Выбрать вещи</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
	    );
    }
}