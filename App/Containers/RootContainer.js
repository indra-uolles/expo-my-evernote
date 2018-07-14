import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Config/ReduxPersist';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import styles from './Styles/RootContainerStyles';
import Overlay from '../Components/Overlay';


class RootContainer extends Component {
    componentDidMount () {
    // if redux persist is not active fire startup action
        if (!ReduxPersist.active) {
            this.props.startup();
        }
    }

    render () {
        const {
            isOverlayVisible
        } = this.props;
        return (
            <View style={styles.applicationView}>
                <StatusBar barStyle='light-content' />
                <ReduxNavigation />
                {isOverlayVisible ? <Overlay/> : null}
            </View>
        );
    }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
    startup: () => dispatch(StartupActions.startup())
});

function mapStateToProps(state) {
    return {
        isOverlayVisible: state.root.isOverlayVisible
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
