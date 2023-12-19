import React from "react";
import "./CountryPreview.scss";

import { Link } from "react-router-dom";
import { ICountryDetails } from "../../redux/countriesSlice";

const CountryPreview: React.FC<ICountryDetails> = ({ flagSrc, flagAlt, name, region, population, capital }) => {
    
    return (
        <Link to={`/${name}`} className="country-preview">
            <img src={flagSrc} alt={flagAlt} className="country-preview__flag"/>
            <div className="country-preview__details">
                <h2 className="country-preview__name">{name}</h2>
                <div className="details-list">
                    <p className="details-list__item">
                        <span>Population: </span>{population}
                    </p>
                    <p className="details-list__item">
                        <span>Region: </span>{region}
                    </p>
                    <p className="details-list__item">
                        <span>Capital: </span>{capital}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CountryPreview;