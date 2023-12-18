export interface ICountryDetails {
    flagSrc: string,
    flagAlt: string,
    name: string,
    nativeName: string,
    region: string,
    subregion: string,
    population: string,
    capital: string,
    currencies: string[],
    languages: string[],
    borders: string[],
    tld: string,
    cca3: string
}

export interface ICountriesRequest {
    pending: boolean,
    error: boolean | null,
    success: boolean | null
}

export interface ICountriesState {
    data: ICountryDetails[],
    request: ICountriesRequest
}

export interface IFiltersState {
    name: string;
    region: string;
}

export interface IState {
    countries: ICountriesState;
    filters: IFiltersState;
}



const initialState: IState = {
    countries: {
        data: [],
        request: {
            pending: false,
            error: null,
            success: null,
        }
    },
    filters: {
        name: '',
        region: ''
    }
};

export default initialState;