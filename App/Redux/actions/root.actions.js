import {
    SET_OVERLAY
} from '../constants/root.constants';

export function showOverlay() {
    return {
        type: SET_OVERLAY,
        payload: { visible: true }
    };
}

export function hideOverlay() {
    return {
        type: SET_OVERLAY,
        payload: { visible: false }
    };
}