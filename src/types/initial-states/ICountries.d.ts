import IState from './IState';


export interface Countries {
    countryList: IState,
    removeCountry: IState,
    visitedCountry: IState,
}

export default Countries;