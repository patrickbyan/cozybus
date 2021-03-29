import {combineReducers} from 'redux'

// Reducers
import userReducer from './UserReducer'
import filterReducer from './FilterReducer'
import shuttlesReducer from './ShuttlesReducer'
import transactionReducer from './TransactionReducer'

const allReducer = combineReducers(
    {
        user: userReducer,
        filter: filterReducer,
        shuttles: shuttlesReducer,
        transactions: transactionReducer
    }
)

export default allReducer