import { SET_OVERLAY } from '../constants/root.constants';

const initialState = {
    isOverlayVisible: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OVERLAY:
            return { ...state, isOverlayVisible: action.payload.visible };
        default:
            return state;
    }
};
