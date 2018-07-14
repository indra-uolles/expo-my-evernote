import {
    ITEMS_LOAD,
    ITEMS_LOAD_SUCCESS,
    ITEMS_LOAD_ERROR
} from '../constants/notes.constants';
import api from '../../Services/Api';
import { hideOverlay } from './root.actions';

export const beforeLoad = () => ({
    type: ITEMS_LOAD,
    payload: {}
});

export function loadItems() {
    return (dispatch, getState) => {
        api.getItems()
            .then((data) => {
                dispatch(setItems(data));
                dispatch(hideOverlay());
            })
            .catch((err) => dispatch(setItemsLoadError(err)));
    };
}

export function setItemsLoadError(err) {
    return {
        type: ITEMS_LOAD_ERROR,
        payload: err
    };    
}

export function setItems(notes) {
    return {
        type: ITEMS_LOAD_SUCCESS,
        payload: { notes }
    };
}