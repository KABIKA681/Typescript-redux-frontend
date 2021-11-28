
const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    dateOfBirth: '',
    loginDate: '' 
}

console.log(initialState)

export default function rootReducer(state = initialState, action: any) {
    switch (action.type) {
        default: 
            return state 
    }
}