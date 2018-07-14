import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import configureStore from './CreateStore';
import ReduxPersist from '../Config/ReduxPersist';
import {reducer as notes} from './reducers/notes.reducer';
import {reducer as nav} from './reducers/nav.reducer';
import {reducer as noteadd} from './reducers/noteadd.reducer';
import {reducer as root} from './reducers/root.reducer';
import {reducer as noteview} from './reducers/noteview.reducer';
import {reducer as searchnote} from './reducers/searchnote.reducer';


/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
    nav,
    root,
    notes,
    noteadd,
    noteview,
    searchnote
});

export default () => {
    let finalReducers = reducers;
    // If rehydration is on use persistReducer otherwise default combineReducers
    if (ReduxPersist.active) {
        const persistConfig = ReduxPersist.storeConfig;
        finalReducers = persistReducer(persistConfig, reducers);
    }

    let { store } = configureStore(finalReducers);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./').reducers;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};
