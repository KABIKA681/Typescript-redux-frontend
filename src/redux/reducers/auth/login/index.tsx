import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../../../../constants/action-types/auth/login';

import IAuth from '../../../../types/initial-states/IAuth'


export default function login(state: IAuth, { type, payload }: any) {

    switch (type) {

        // fetch country, loading true
        case LOGIN_START:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: true,
                }

            }
        //if fetching is successful 
        case LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    ...state.login,
                    data: payload,
                    loading: false,
                    error: null,
                }

            }
        case LOGIN_FAIL:
            return {
                ...state,
                login: {
                    ...state.login,
                    data: payload,
                    loading: false,
                    error: null,
                }

            }

        default:
            return state

    }



}