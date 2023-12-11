import React from "react";
import "./Home.scss";
import { useSelector } from "react-redux";
import { getFilteredCountries } from "../../redux/countriesRedux";

import CountryPreview from "../CountryPreview/CountryPreview";
import CountriesList from "../CountriesList/CountriesList";
import Filters from "../Filters/Filters";

const Home: React.FC = () => {

    const countries = useSelector(getFilteredCountries);

    return (
        <>
            <Filters />
            <CountriesList>
                {countries.map((country, index) => (
                    <CountryPreview key={index} {...country} />
                ))}
            </CountriesList>
        </>
    );
};

export default Home;
