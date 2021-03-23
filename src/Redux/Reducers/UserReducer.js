let initialState = {
    id: '',
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'REGISTER_SUCCESS':
            return {id: action.payload, error: ''}
        case 'REGISTER_FAILED':
            return {...state, error: action.payload}
        default: 
        return state
    }
}

export default userReducer