import { EXTRACT_POST_FORM_REQUEST, EXTRACT_POST_FORM_SUCCESS, EXTRACT_POST_FORM_ERROR } from "../actions/adActions";

// import { TOGGLE_LOADING } from '../actions/adActions'

const initialState = {
    loading: false,
    error: null,
    ads: []
}

export function adReducer(state = initialState, action) {
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
            ads: action.data

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