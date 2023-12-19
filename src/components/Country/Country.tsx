import React from "react";
import "./Country.scss";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCountryByName } from "../../redux/countriesSlice";
import BorderButton from "../BorderButton/BorderButton";
import { ICountryDetails, IState } from "../../redux/initialState";

const Country: React.FC = () => {
    const { countryName } = useParams();
    const country: ICountryDetails = useSelector((state: IState) =>
        getCountryByName(state, countryName)
    );

    const getCommaSeparatedString = (array: string[]) => {
        let str = "";
        for (let i = 0; i < array.length - 1; i++) {
            str += `${array[i]}, `;
        }

        return (str += array[array.length - 1]);
    };

    return (
        <div className="country">
            <Link to="/" className="tag tag_big country__backBtn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                >
                    {" "}
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
                        fill="#111517"
                    />{" "}
                </svg>
                Back
            </Link>
            <div className="country__content">
                <img
                    src={country.flagSrc}
                    alt={country.flagAlt}
                    className="country__flag"
                />
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
                        <p className="country__info__borders-title">
                            Border Countries:{" "}
                        </p>
                        <div className="country__info__borders-list">
                            {country.borders.map((code) => (
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
