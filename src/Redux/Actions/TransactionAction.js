import axios from "axios"
import { urlAPI } from "../../Supports/Constants/urlAPI"

export const getDataTransaction = (idTransaction) => {
    return (dispatch) => {

        axios.get(urlAPI + `/transactions/${idTransaction}`)
        .then((res) => {
            dispatch(
                {
                    type: 'GET_DATA_TRANSACTION_SUCCESS',
                    payload: res.data
                }
            )
        })
        .catch((err) => {
            console.log(err)
        })

    }
}

export const getExpiredAt = (expiredAt) => {
    console.log('Action Expired At:' + expiredAt)
    return{
        type: 'GET_DATA_EXPIREDAT',
        payload: expiredAt
    }
}

export const getAllDataTransaction = (idUser) => {
    console.log(idUser)
    return (dispatch) => {

        axios.get(urlAPI + `/transactions?idUser=${idUser}`)
        .then((res) => {
            console.log('Get All Data Transaction')
            console.log(res.data)
            dispatch(
                {
                    type: 'GET_ALL_DATA_TRANSACTION_SUCCESS',
                    payload: res.data
                }
            )
        })
        .catch((err) => {
            console.log(err)
        })

    }
}