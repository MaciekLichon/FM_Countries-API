import React from "react";
import "./Country.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCountryByName } from "../../redux/countriesRedux";

const Country: React.FC = () => {

    const { countryName } = useParams();
    const country = useSelector(state => getCountryByName(state, countryName));
    console.log(country);

    const getCommaSeparatedString = (array: []) => {
        let str = '';
        for (let i = 0; i < array.length - 1; i++) {
            str += `${array[i]}, `
        }

        return str += array[array.length - 1];
    }
    

    return (
        <div className="country">
            <img src={country.flagSrc} alt={country.flagAlt} className="country__flag" />
            <div className="country__info">
                <h2 className="country__info__name">{country.name}</h2>
                <div className="country__info__details">
                    <div className="details-list">
                        <p className="details-list__item">
                            <span>Native Name: </span>
                            {country.nativeName}
                        </p>
                        <p className="details-list__item">
                            <span>Population: </span>
                            {country.population}
                        </p>
                        <p className="details-list__item">
                            <span>Region: </span>
                            {country.region}
                        </p>
                        <p className="details-list__item">
                            <span>Sub Region: </span>
                            {country.subregion}
                        </p>
                        <p className="details-list__item">
                            <span>Capital: </span>
                            {country.capital}
                        </p>
                    </div>
                    <div className="details-list">
                        <p className="details-list__item">
                            <span>Top Level Domain: </span>
                            {country.tld}
                        </p>
                        <p className="details-list__item">
                            <span>Currencies: </span>
                            {getCommaSeparatedString(country.currencies)}
                        </p>
                        <p className="details-list__item">
                            <span>Languages: </span>
                            {getCommaSeparatedString(country.languages)}
                        </p>
                    </div>
                </div>
                <div className="country__info__borders">
                    <p>Border Countries: </p>
                </div>
            </div>
        </div>
    );
};

export default Country;