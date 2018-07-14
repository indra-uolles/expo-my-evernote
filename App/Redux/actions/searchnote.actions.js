import api from '../../Services/Api';
import {
    SET_SEARCH_TITLE,
    SET_SEARCH_DESCRIPTION,
    SEARCH_ITEMS_ERROR,
    FILTERED_UPDATE
} from '../constants/searchnote.constants';
import { hideOverlay } from './root.actions';

const getResponse = async(title, description) => {
    if (title.length && description.length) {
        return api.findByTitleDescription(title, description);
    } else if (title.length) {
        return api.findByTitle(title);
    } else {
        return api.findByDescription(description);
    }
};

export function searchItems() {
    return (dispatch, getState) => {
        const {searchnote} = getState();
        const { title, description } = searchnote;
        if (!title.length && !description.length) {
            dispatch(hideOverlay());
            dispatch(setFiltered([]));
        } else {
            try {
                getResponse(title, description).then((data) => {
                    dispatch(setFiltered(data));
                    dispatch(hideOverlay());
                });
            } catch (err) {
                dispatch(searchItemsLoadError(err));
            }
        }
    };
}

export function setFiltered(arr) {
    const newArr = arr.length > 0 ? arr.map((item) => item.id) : [];
    return {
        type: FILTERED_UPDATE,
        payload: { filtered: newArr }
    };
}

export function searchItemsLoadError(err) {
    return {
        type: SEARCH_ITEMS_ERROR,
        payload: { err }
    };  
}

export function setSearchTitle(title) {
    return {
        type: SET_SEARCH_TITLE,
        payload: { title }
    };
}

export function setSearchDescription(description) {
    return {
        type: SET_SEARCH_DESCRIPTION,
        payload: { description }
    };
}