import { SIGNUP_START } from '../../../../constants/action-types/auth/signup'
import IAuth from '../../../../types/initial-states/IAuth'

export function signup(data: IAuth) {
    return {
        type: SIGNUP_START,
        payload: data
    }

}