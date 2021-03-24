import Axios from 'axios'
import {urlAPI} from './../../Supports/Constants/urlAPI'

export const getShuttleLists = (departure, arrival) =>{
    return(dispatch) => {

        Axios.get(urlAPI + `/shuttles?from=${departure}&to=${arrival}`)
        .then((res) => {
            dispatch(
                {
                    type: 'GET_DATA_LISTS_SUCCESS',
                    payload: res.data
                }
            )
        })
        .catch((err) => {
            dispatch(
                {
                    type: 'GET_DATA_LISTS_FAILED',
                    payload: err
                }
            )
        })

    }
}