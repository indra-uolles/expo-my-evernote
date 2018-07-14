import {
    ITEMS_LOAD,
    ITEMS_LOAD_SUCCESS,
    ITEMS_LOAD_ERROR
} from '../constants/notes.constants';
import {
    FILTERED_UPDATE
} from '../constants/searchnote.constants';
import {
    CREATE_ITEM_ERROR,
    ITEM_CREATED
} from '../constants/noteadd.constants';

const initialState = {
    notes: [],
    filtered: [],
    fetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_LOAD:
            return { ...state, fetching: true };
        case ITEMS_LOAD_SUCCESS:    
            return {  
                ...state,
                notes: action.payload.notes,  
                fetching: false
            };
        case ITEMS_LOAD_ERROR:
            return {
                ...state,
                error: action.payload.err,
                fetching: false
            };
        case CREATE_ITEM_ERROR:
            return {
                ...state,
                error: action.payload.err
            };
        case ITEM_CREATED:
            return {
                ...state,
                notes: state.notes.concat(action.payload.item)
            }; 
        case FILTERED_UPDATE:
            return {
                ...state,
                filtered: action.payload.filtered
            };
        default:
            return state;
    }
};
