import { Dispatch } from 'redux'
import axios from 'axios'
import { LOGIN_START, LOGIN_SUCCESS } from '../../../../constants/action-types/auth/login'
import IAuth from '../../../../types/initial-states/IAuth'

export function loginStart() {
    return {
        type: LOGIN_START,
        // payload: data
    }

}

export function loginSuccess(data: []) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }

}

export function loginAction(data: IAuth) {

    return (dispatch: Dispatch) => {

        dispatch(loginStart())
        //axios call 
        axios.get('http://localhost:4000/graphql')
            .then((res) => {
                const loginData = res.data
                dispatch(loginSuccess(data as any))
            }).catch((err) => {
                throw err

            })
    }

}