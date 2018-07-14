import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import createStore from '../Redux';
import '../Config';
import DebugConfig from '../Config/DebugConfig';
import RootContainer from './RootContainer';

const store = createStore();

class App extends Component {
    componentDidMount() {
        Font.loadAsync({
            'Roboto': require('../Assets/Fonts/Roboto-Regular.ttf'),
            'Roboto_medium': require('../Assets/Fonts/Roboto-Medium.ttf'),
          });
    }

    render () {
        return (
            <Provider store={store}>
                <RootContainer/>
            </Provider>
        );
    }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
    ? console.tron.overlay(App)
    : App;
