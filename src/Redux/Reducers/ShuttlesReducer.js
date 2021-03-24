let initialState = {
    data: null,
    error: null
}

const shuttlesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_DATA_SUCCESS':
            return { data: action.payload, error: null }
        case 'GET_DATA_FAILED':
            return {...state, error: action.payload}
        default:
            return state
    }
}

export default shuttlesReducer