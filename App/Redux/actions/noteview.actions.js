import { LOAD_ITEMVIEW } from '../constants/noteview.constants';

export function loadItemViewAsync(id) {
    return (dispatch, getState) => {
        const notes = getState().notes.notes;
        const note = notes.filter((note) => note.id === id)[0];
        dispatch(loadItemView(note));
    };
}

export function loadItemView(note) {
    return {
        type: LOAD_ITEMVIEW,
        payload: { note }
    };
}  