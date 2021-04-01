import Axios from 'axios'
import {urlAPI} from './../../Supports/Constants/urlAPI'

export const getData = (parameter1, parameter2, parameter3) =>{
    return(dispatch) => {

        Axios.get(urlAPI + `/shuttles?from=${departure}&to=${arrival}`)
        .then((res) => {
            dispatch(
                {
                    type: 'GET_DATA_SUCCESS',
                    payload: res.data
                }
            )
        })
        .catch((err) => {
            dispatch(
                {
                    type: 'GET_DATA_FAILED',
                    payload: err
                }
            )
        })

    }
}

export const sendData = (parameter1) => {
    return{
        type: 'SEND_DATA',
        paylaod: parameter1
    }
}