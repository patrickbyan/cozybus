let initialState = {
    id: '',
    error: '',
    loading: null,
    imageURL: '',
    email: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            return {...state, loading: true}
        case 'AUTH_SUCCESS':
            return { ...state, id: action.payload, error: '', loading: null, email: action.email}
        case 'AUTH_FAILED':
            return {...state, error: action.payload, loading: null}
        case 'LOGOUT_SUCCESS':
            return { ...state, id: '', error: '', loading: null, email: ''}
        case 'REPLACE_IMAGE_SUCCESS':
            return {...state, imageURL: action.payload, loading: null, error: null}
        default: 
            return state
    }
}

export default userReducer