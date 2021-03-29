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