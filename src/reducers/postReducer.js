import { EXTRACT_POST_FORM_REQUEST, EXTRACT_POST_FORM_SUCCESS, EXTRACT_POST_FORM_ERROR } from "../actions/postActions";

const initialState = {
    loading: false,
    error: null,
    posts: []
}

export function postReducer(state = initialState, action) {
    if (action.type === EXTRACT_POST_FORM_REQUEST) {
        return {
            ...state,
            loading: true
        }
    } else if (action.type === EXTRACT_POST_FORM_SUCCESS) {
        return {
            ...state,
            loading: false,
            error: null,
            posts: action.data

        }
    } else if (action.type === EXTRACT_POST_FORM_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }
    return state;
}