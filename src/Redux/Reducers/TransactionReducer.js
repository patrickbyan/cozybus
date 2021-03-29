let initialState = {
    dataTransaction: null
}

const transactionReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_DATA_TRANSACTION_SUCCESS':
            return { dataTransaction: action.payload }
        default:
            return state
    }
}

export default transactionReducer