import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Item, Input } from 'native-base';
import api from '../Services/Api';
import styles from './Styles/LoginScreenStyles';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    };

    state = {
        login: 'root',
        password: 'root'
    };

    onLoginChange = (val) => {
        this.setState({
            login: val
        });
    };

    onPasswordChange = (val) => {
        this.setState({
            password: val
        });
    };

    onPress = async() => {
        const {login, password} = this.state;
        try {
            await api.init(login, password);
            this.props.navigation.navigate('NotesScreen');
        } catch (err) {
            alert(err);
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View>
                    <Item>
                        <Input 
                            placeholder = '' 
                            value = {this.state.login}
                            onChangeText = {this.onLoginChange}
                        />
                    </Item>
                    <Item>
                        <Input 
                            placeholder = '' 
                            value = {this.state.password}
                            onChangeText = {this.onPasswordChange}
                        />
                    </Item>
                    <Button onPress={this.onPress} title="Войти"/>  
                </View>
            </View>
        );
    }
}
