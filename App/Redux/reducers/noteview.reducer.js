import { LOAD_ITEMVIEW } from '../constants/noteview.constants';

const initialState = {
    itemView: {
        title: '',
        description: ''
    }
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ITEMVIEW:
            return {
                itemView: action.payload.note
            };
        default:
            return state;
    }
};