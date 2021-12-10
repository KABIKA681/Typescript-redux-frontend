import { LOGIN_START } from '../../../../constants/action-types/auth/login'
import IAuth from '../../../../types/initial-states/IAuth'

export function login(data: IAuth) {
    return {
        type: LOGIN_START,
        payload: data
    }

}