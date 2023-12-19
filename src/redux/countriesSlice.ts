import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// selectors
export const getAllCountries = (state: RootState) => state.countries.data;
export const getCountryByName = ({ countries }: RootState, name: string) =>
    countries.data.find((country) => country.name === name);
export const getCountryByCode = ({ countries }: RootState, code: string) =>
    countries.data.find((country) => country.cca3 === code);
export const getFilteredCountries = ({ countries, filters }: RootState) =>
    countries.data.filter((country) => {
        const noRegionFilter = filters.region === "";
        const noNameFilter = filters.name === "";
        const matchesRegionFilter = filters.region === country.region;
        const matchesNameFilter = country.name.toLowerCase().includes(filters.name);

        return (
            (noRegionFilter && noNameFilter) ||
            (noRegionFilter && matchesNameFilter) ||
            (matchesRegionFilter && noNameFilter) ||
            (matchesRegionFilter && matchesNameFilter)
        );
    });

export interface ICountryDetails {
    flagSrc: string;
    flagAlt: string;
    name: string;
    nativeName: string;
    region: string;
    subregion: string;
    population: string;
    capital: string;
    currencies: string[];
    languages: string[];
    borders: string[];
    tld: string;
    cca3: string;
}

export interface ICountriesRequest {
    pending: boolean;
    error: boolean | null;
    success: boolean | null;
}

export interface ICountriesState {
    data: ICountryDetails[];
    request: ICountriesRequest;
}

const initialState: ICountriesState = {
    data: [],
    request: {
        pending: false,
        error: null,
        success: null,
    },
};

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.fulfilled, (state, action: PayloadAction<ICountryDetails[]>) => {
                state.data = action.payload;
                state.request = { pending: false, error: false, success: true };
            })
            .addCase(fetchCountries.pending, (state) => {
                state.request = { pending: true, error: null, success: false };
            })
            .addCase(fetchCountries.rejected, (state) => {
                state.request = { pending: false, error: true, success: false };
            });
    },
});

export const fetchCountries = createAsyncThunk("countries/fetchCountries", async () => {
    const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=flags,name,region,subregion,population,capital,currencies,languages,borders,tld,cca3"
    );
    const countries = await res.json();

    const countriesData = [];
    for (let country of countries) {
        const population = new Intl.NumberFormat().format(country.population);
        const currencies = [];
        for (const i in country.currencies) {
            currencies.push(country.currencies[i].name);
        }
        const languages = [];
        for (const i in country.languages) {
            languages.push(country.languages[i]);
        }

        // I tired doing it based on language, but sometimes the native name is in a completely different language than languages
        const nativeNames = country.name.nativeName;
        const nativeNamesCodes = Object.keys(nativeNames);
        let nativeName = "";
        if (nativeNamesCodes.length > 0) {
            let selectedCode = nativeNamesCodes[0];

            if (nativeNamesCodes.length > 1) {
                // 'eng' tends to be [0] so I'm checking if there's anything else than 'eng'
                selectedCode = nativeNamesCodes[1];
            }
            nativeName = nativeNames[selectedCode].common;
        }

        const details = {
            flagSrc: country.flags.png,
            flagAlt: country.flags.alt,
            name: country.name.common,
            nativeName: nativeName,
            region: country.region,
            subregion: country.subregion,
            population: population,
            capital: country.capital[0],
            currencies: currencies,
            languages: languages,
            borders: country.borders,
            tld: country.tld[0],
            cca3: country.cca3,
        };

        countriesData.push(details);
    }

    return countriesData;
});

export default countriesSlice.reducer;

// import initialState, { IState } from "./initialState";

// actions
// const createActionName = (actionName: string) => `app/countries/${actionName}`;
// const UPDATE_COUNTRIES = createActionName("UPDATE_COUNTRIES");

// const START_REQUEST = createActionName("START_REQUEST");
// const END_REQUEST = createActionName("END_REQUEST");
// const ERROR_REQUEST = createActionName("ERROR_REQUEST");

// // action creators
// export const updateCountries = (payload) => ({
//     type: UPDATE_COUNTRIES,
//     payload,
// });

// export const startRequest = () => ({ type: START_REQUEST });
// export const endRequest = () => ({ type: END_REQUEST });
// export const errorRequest = (error: Error) => ({ error, type: ERROR_REQUEST });

// export const fetchAllCountries = () => {
//     return (dispatch) => {
//         dispatch(startRequest());
//         fetch(
//             "https://restcountries.com/v3.1/all?fields=flags,name,region,subregion,population,capital,currencies,languages,borders,tld,cca3"
//         )
//             .then((res) => {
//                 dispatch(endRequest());
//                 return res.json();
//             })
//             .then((countries) => {
//                 const countriesData = [];
//                 for (let country of countries) {
//                     const population = new Intl.NumberFormat().format(
//                         country.population
//                     );
//                     const currencies = [];
//                     for (const i in country.currencies) {
//                         currencies.push(country.currencies[i].name);
//                     }
//                     const languages = [];
//                     for (const i in country.languages) {
//                         languages.push(country.languages[i]);
//                     }

//                     // I tired doing it based on language, but sometimes the native name is in a completely different language than languages
//                     const nativeNames = country.name.nativeName;
//                     const nativeNamesCodes = Object.keys(nativeNames);
//                     let nativeName = "";
//                     if (nativeNamesCodes.length > 0) {
//                         let selectedCode = nativeNamesCodes[0];

//                         if (nativeNamesCodes.length > 1) {
//                             // 'eng' tends to be [0] so I'm checking if there's anything else than 'eng'
//                             selectedCode = nativeNamesCodes[1];
//                         }
//                         nativeName = nativeNames[selectedCode].common;
//                     }

//                     const details = {
//                         flagSrc: country.flags.png,
//                         flagAlt: country.flags.alt,
//                         name: country.name.common,
//                         nativeName: nativeName,
//                         region: country.region,
//                         subregion: country.subregion,
//                         population: population,
//                         capital: country.capital[0],
//                         currencies: currencies,
//                         languages: languages,
//                         borders: country.borders,
//                         tld: country.tld[0],
//                         cca3: country.cca3,
//                     };

//                     countriesData.push(details);
//                 }
//                 // dispatch(updateCountries(countries))
//                 dispatch(updateCountries(countriesData));
//             });
//     };
// };

// reducer
// const countriesReducer = (statePart = initialState.countries, action) => {
//     switch (action.type) {
//         case UPDATE_COUNTRIES:
//             return { ...statePart, data: [...action.payload] };
//         case START_REQUEST:
//             return {
//                 ...statePart,
//                 request: { pending: true, error: null, success: false },
//             };
//         case END_REQUEST:
//             return {
//                 ...statePart,
//                 request: { pending: false, error: false, success: true },
//             };
//         case ERROR_REQUEST:
//             return {
//                 ...statePart,
//                 request: { pending: false, error: true, success: false },
//             };
//         default:
//             return statePart;
//     }
// };

// export default countriesReducer;
