export const EXTRACT_POST_FORM_REQUEST = 'EXTRACT_POST_FORM_REQUEST';
export const EXTRACT_POST_FORM_SUCCESS = 'EXTRACT_POST_FORM_SUCCESS';
export const EXTRACT_POST_FORM_ERROR = 'EXTRACT_POST_FORM_ERROR';


const formData = {
    condition: "asdfasdfasdfasdf",
    description: "asdfasdfasdfasdf",
    image: "asdfasdfasdfasdf",
    instrumentName: "asdfasdfasdfasdf",
    instrumentType: "asdfasdfasdfasdf",
    price: "asdfasdfasdfasdf",
    title: "asdfasdfasdfasdf"
}

export const extractPostForm = (formData) => dispatch => {
    dispatch(extractPostFormRequest());
    return fetch('http://localhost:8080/api/ads', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(data =>
            dispatch(extractPostFormSuccess(data))
        ).catch(err =>
            dispatch(extractPostFormError(err))
        );
}

export const extractPostFormSuccess = (data) => {
    return {
        type: EXTRACT_POST_FORM_SUCCESS,
        data
    }
}

export const extractPostFormRequest = () => {
    return {
        type: EXTRACT_POST_FORM_REQUEST,
    }
}

export const extractPostFormError = (error) => {
    return {
        type: EXTRACT_POST_FORM_ERROR,
        error
    }
}