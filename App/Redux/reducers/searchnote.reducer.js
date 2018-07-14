import {
    SET_SEARCH_TITLE,
    SET_SEARCH_DESCRIPTION
} from '../constants/searchnote.constants';

const initialState = {
    title: '',
    description: '',
    fetching: false
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH_TITLE:
            return {
                ...state,
                title: action.payload.title
            };
        case SET_SEARCH_DESCRIPTION:
            return {
                ...state,
                description: action.payload.description
            };
        default:
            return state;
    }
};