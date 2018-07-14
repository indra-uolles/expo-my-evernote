import {
    CREATE_ITEM,
    CREATE_ITEM_ERROR,
    ITEM_CREATED,
    SET_ITEM_TITLE,
    SET_ITEM_DESCRIPTION,
    RESET_ITEM
} from '../constants/noteadd.constants';

const initialState = {
    itemCreate: {
        title: '',
        description: ''
    },
    fetching: false
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ITEM_TITLE:
            return {
                ...state,
                itemCreate: {
                    ...state.itemCreate,
                    title: action.payload.title
                }
            };
        case SET_ITEM_DESCRIPTION:
            return {
                ...state,
                itemCreate: {
                    ...state.itemCreate,
                    description: action.payload.description
                }
            };
        case CREATE_ITEM_ERROR:
            return {
                ...state,
                fetching: false
            };
        case ITEM_CREATED:
            return {
                ...state,
                fetching: false
            };
        case RESET_ITEM:
            return {
                ...state,
                itemCreate: {...initialState.itemCreate}
            };
        default:
            return state;
    }
};