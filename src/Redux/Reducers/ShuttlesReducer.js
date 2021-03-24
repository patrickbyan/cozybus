let initialState = {
    shuttleList: null,
    errorList: null,
    shuttleDetail: null,
    errorShuttleDetail: null
}

const shuttlesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_DATA_LISTS_SUCCESS':
            return { shuttleList: action.payload, error: null }
        case 'GET_DATA_LISTS_FAILED':
            return {shuttleList: null, errorList: action.payload}
        default:
            return state
    }
}

export default shuttlesReducer