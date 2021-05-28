import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {urlAPI} from './../../Supports/Constants/urlAPI'

export const onUserRegister = (inputEmail, inputPassword) => {
    return(dispatch) => {

        dispatch(
            {
                type: 'LOADING'
            }
        )
        
        Axios.get(urlAPI + `/users?email=${inputEmail}`)
        .then((res) => {
            if(res.data.length === 1){
                dispatch(
                    {
                        type: 'AUTH_FAILED',
                        payload: 'Email Sudah Terdaftar'
                    }
                )
            }else{
                Axios.post(urlAPI + '/users', {email: inputEmail, password: inputPassword, image: ''})
                .then((response) => {
                    AsyncStorage.setItem('@id', (response.data.id).toString())
                    .then((resAsyncStorage) => {
                        // console.log(response.data)

                        // let dataToSend = {
                        //     id: response.data.id,
                        //     email: response.data.email
                        // }
                        console.log('useraction jalan')
                        console.log(response.data)
                        dispatch(
                            {
                                type: 'AUTH_SUCCESS',
                                payload: response.data.id,
                                data: response.data.email
                            }
                        )
                    })
                    .catch((errAsyncStorage) => {
                        console.log(errAsyncStorage)
                    })
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

export const onSaveAsyncStroage = (id) => {
    return(dispatch) => {

        // Get Data User Berdasarkan Id
        dispatch(
            {
                type: 'AUTH_SUCCESS',
                payload: id
            }
        )
    }
}

export const onUserLogout = () => {
    return(dispatch) => {
        AsyncStorage.removeItem('@id')
        .then((res) => {
            dispatch(
                {
                    type: 'LOGOUT_SUCCESS',
                }
            )
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const onUserLogin = (inputEmail, inputPassword) => {
    return (dispatch) => {
        Axios.get(urlAPI + `/users?email=${inputEmail}&password=${inputPassword}`)
        .then((res) => {
            if(res.data.length === 1){
                AsyncStorage.setItem('@id', (res.data[0].id).toString())
                .then((responseAsync) => {
                    dispatch(
                        {
                            type: 'AUTH_SUCCESS',
                            payload: res.data[0].id,
                            email: res.data[0].email
                        }
                    )
                })
                .catch((errorAsync) => {
                    dispatch(
                        {
                            type: 'AUTH_FAILED',
                            payload: 'Error Async'
                        }
                    )
                })
            }else{
                dispatch(
                    {
                        type: 'AUTH_FAILED',
                        payload: 'Akun Tidak Ditemukan'
                    }
                )
            }
        })
        .catch((err) => {
            dispatch(
                {
                    type: 'AUTH_FAILED',
                    payload: err
                }
            )
        })
    }
} 

export const onPatchImage = (imageURL) => {
    return (dispatch) => {
        AsyncStorage.getItem('@id')
        .then((res) => {
            // Axios.get(urlAPI + `/users/${res}`)
            // .then((res) => {
            //     if(res.data.image === ""){
            Axios.patch(urlAPI + `/users/${res}`, {image: imageURL})
            .then((res) => {
                if(res.status === 200){
                    dispatch(
                        {
                            type: 'REPLACE_IMAGE_SUCCESS',
                            payload: res.data.image
                        }
                    )
                }else{
                    console.log('error')
                }
            })
            .catch((err) => {
                console.log(err)
            })
                // }else{

                // }

            })
        .catch((err) => {
            console.log(err)
        })
    }
}