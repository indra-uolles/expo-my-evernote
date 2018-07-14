import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import VIcon from 'react-native-vector-icons/Entypo';
import styles from './Styles/HeaderLeftStyles';

export default class HeaderLeft extends Component {

    render () {
    	return (
	        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
		        <View style={styles.headerLeft}>
		            <VIcon name='chevron-thin-left' size={24} color={'#ccc'} style={styles.icHeaderLeft}/>
		            <Text style={styles.headerLeftText}>Назад</Text>
		        </View>
		    </TouchableOpacity>
	    );
    }
}