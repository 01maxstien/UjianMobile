import {
    EDIT_POST,
    SAVE_POST,
    CAPTION_CHANGE,
    EDIT_POST_SUCCESS,
    EDIT_POST_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    captionEdit: '',
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EDIT_POST :
            return { 
                ...INITIAL_STATE, 
                captionEdit: action.payload
            }
        case CAPTION_CHANGE :
            return { ...state, captionEdit: action.payload }
        case SAVE_POST :
            return { ...state, loading: true, error: '' }
        case EDIT_POST_FAIL :
            return { ...state, loading: false, error: action.payload }
        case EDIT_POST_SUCCESS :
            return INITIAL_STATE;
        default :
            return state;
    }
};