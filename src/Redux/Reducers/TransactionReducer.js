let initialState = {
    dataTransaction: null,
    expiredAt: null,
    allTransaction: null
}

const transactionReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_DATA_TRANSACTION_SUCCESS':
            return { ...state, dataTransaction: action.payload }
        case 'GET_DATA_EXPIREDAT':
            return { ...state, expiredAt: action.payload }
        case 'GET_ALL_DATA_TRANSACTION_SUCCESS':
            return { ...state, allTransaction: action.payload }
        default:
            return state
    }
}

export default transactionReducer