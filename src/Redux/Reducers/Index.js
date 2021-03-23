import {combineReducers} from 'redux'

// Reducers
import userReducer from './UserReducer'

const allReducer = combineReducers(
    {
        user: userReducer
    }
)

export default allReducer