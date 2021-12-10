import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL } from '../../../../constants/action-types/auth/signup';

import IAuth from '../../../../types/initial-states/IAuth'


export default function login(state: IAuth, { type, payload }: any) {

    switch (type) {

        // fetch country, loading true
        case SIGNUP_START:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: true,
                }

            }
        //if fetching is successful 
        case SIGNUP_SUCCESS:
            return {
                ...state,
                login: {
                    ...state.login,
                    data: payload,
                    loading: false,
                    error: null,
                }

            }
        case SIGNUP_FAIL:
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