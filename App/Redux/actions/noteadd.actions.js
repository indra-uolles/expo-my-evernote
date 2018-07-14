import api from '../../Services/Api';
import {
    RESET_ITEM,
    CREATE_ITEM_ERROR,
    ITEM_CREATED,
    SET_ITEM_TITLE,
    SET_ITEM_DESCRIPTION,
} from '../constants/noteadd.constants';
import { hideOverlay } from './root.actions';

export function createItem() {
    return (dispatch, getState) => {
        const {noteadd} = getState();
        const item = noteadd.itemCreate;
        const data = {
            title: item.title,
            description: item.description
        };
        try {
            api.createItem(noteadd.itemCreate).then((item) => {
                dispatch(createItemSuccess(item));
                dispatch(hideOverlay());
            });
        } catch (err) {
            dispatch(createItemLoadError(err));
        }
    };
}

export function createItemSuccess(item) {
    return {
        type: ITEM_CREATED,
        payload: { item }
    };
}

export function createItemLoadError(err) {
    return {
        type: CREATE_ITEM_ERROR,
        payload: { err }
    };  
}

export function setItemTitle(title) {
    return {
        type: SET_ITEM_TITLE,
        payload: { title }
    };
}

export function setItemDescription(description) {
    return {
        type: SET_ITEM_DESCRIPTION,
        payload: { description }
    };
}

export function resetItem() {
    return {
        type: RESET_ITEM,
        payload: {}
    };
}