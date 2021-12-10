import ICountries from './ICountries'
import IAuth from './IAuth'


interface InitialState {
    countries: ICountries
    login: IAuth
}

export default InitialState;