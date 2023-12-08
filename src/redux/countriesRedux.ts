// selectors
export const getAllCountries = state => state.countries;
export const getCountryByName = ({countries}, name) => countries.find(country => country.name === name);

// actions
const createActionName = actionName => `app/countries/${actionName}`;
const UPDATE_COUNTRIES = createActionName('UPDATE_COUNTRIES');

// action creators
export const updateCountries = payload => ({ type: UPDATE_COUNTRIES, payload });

export const fetchAllCountries = () => {
    return (dispatch) => {
        fetch('https://restcountries.com/v3.1/all?fields=flags,name,region,subregion,population,capital,currencies,languages,borders,tld')
            .then(res => res.json())
            .then(countries => {                
                const countriesData = [];
                for (let country of countries) {
                    console.log(country);
                    
                    
                    const population = new Intl.NumberFormat().format(country.population);
                    const currencies = [];
                    for (const i in country.currencies) {
                        currencies.push(country.currencies[i].name)
                    }
                    const languages = [];
                    for (const i in country.languages) {
                        languages.push(country.languages[i])
                    }

                    // I tired doing it based on language, but sometimes the native name is in a completely different language than languages
                    const nativeNames = country.name.nativeName;
                    const nativeNamesCodes = Object.keys(nativeNames);
                    let nativeName = ''
                    if (nativeNamesCodes.length > 0) {
                        let selectedCode = nativeNamesCodes[0];

                        if (nativeNamesCodes.length > 1) { // 'eng' tends to be [0] so I'm checking if there's anything else than 'eng'
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
                        tld: country.tld[0]
                    }
                    
                    countriesData.push(details);   
                }
                // dispatch(updateCountries(countries))
                dispatch(updateCountries(countriesData))
            })
    }
};

// reducer
const countriesReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_COUNTRIES:
            return [...action.payload];
        default: 
            return statePart;
    }
};

export default countriesReducer;