import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {urlAPI} from './../../Supports/Constants/urlAPI'

export const onUserRegister = (inputEmail, inputPassword) => {
    return(dispatch) => {
        
        Axios.get(urlAPI + `/users?email=${inputEmail}`)
        .then((res) => {
            if(res.data.length === 1){
                dispatch(
                    {
                        type: 'REGISTER_FAILED',
                        payload: 'Email Sudah Terdaftar'
                    }
                )
            }else{
                Axios.post(urlAPI + '/users', {email: inputEmail, password: inputPassword})
                .then((response) => {
                    dispatch(
                        {
                            type: 'REGISTER_SUCCESS',
                            payload: response.data.id
                        }
                    )
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}