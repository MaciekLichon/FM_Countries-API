import React from "react";
import "./Country.scss";
import { Link, useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCountryByName } from "../../redux/countriesSlice";
import BorderButton from "../BorderButton/BorderButton";
import { RootState } from "../../redux/store";
import { useDarkModeContext } from "../../context/darkModeContext";

const Country: React.FC = () => {
    const { countryName } = useParams();

    let country;
    if (countryName) {
        country = useSelector((state: RootState) => getCountryByName(state, countryName));
    }

    const getCommaSeparatedString = (array: string[]) => {
        let str = "";
        for (let i = 0; i < array.length - 1; i++) {
            str += `${array[i]}, `;
        }

        return (str += array[array.length - 1]);
    };

    const isDarkMode = useDarkModeContext();

    if (!country) return <Navigate to="/FM_Countries-API/" />
    return (
        <div className="country">
            <Link to="/" className="tag tag_big country__backBtn">
                {isDarkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <path fillRule="evenodd" clipRule="evenodd" d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z" fill="white" /> </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"> <path fillRule="evenodd" clipRule="evenodd" d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z" fill="#111517" /> </svg>
                )}
                Back
            </Link>
            <div className="country__content">
                <img src={country?.flagSrc} alt={country?.flagAlt} className="country__flag" />
                <div className="country__info">
                    <h2 className="country__info__name">{country?.name}</h2>
                    <div className="country__info__details">
                        <div className="details-list">
                            <p className="details-list__item">
                                <span>Native Name: </span>
                                {country?.nativeName}
                            </p>
                            <p className="details-list__item">
                                <span>Population: </span>
                                {country?.population}
                            </p>
                            <p className="details-list__item">
                                <span>Region: </span>
                                {country?.region}
                            </p>
                            <p className="details-list__item">
                                <span>Sub Region: </span>
                                {country?.subregion}
                            </p>
                            <p className="details-list__item">
                                <span>Capital: </span>
                                {country?.capital}
                            </p>
                        </div>
                        <div className="details-list">
                            <p className="details-list__item">
                                <span>Top Level Domain: </span>
                                {country?.tld}
                            </p>
                            <p className="details-list__item">
                                <span>Currencies: </span>
                                {country?.currencies && getCommaSeparatedString(country.currencies)}
                            </p>
                            <p className="details-list__item">
                                <span>Languages: </span>
                                {country?.languages && getCommaSeparatedString(country.languages)}
                            </p>
                        </div>
                    </div>
                    <div className="country__info__borders">
                        <p className="country__info__borders-title">Border Countries: </p>
                        <div className="country__info__borders-list">
                            {country?.borders.map((code) => (
                                <BorderButton key={code} code={code} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;
