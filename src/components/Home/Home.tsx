import React from "react";
import "./Home.scss";
import { useSelector } from "react-redux";
import { getAllCountries } from "../../redux/countriesRedux";

import CountryPreview from "../CountryPreview/CountryPreview";
import CountriesList from "../CountriesList/CountriesList";

const Home: React.FC = () => {

    const countries = useSelector(getAllCountries);

    return (
        <CountriesList>
            {countries.map((country, index) => (
                <CountryPreview key={index} {...country} />
            ))}
        </CountriesList>
    );
};

export default Home;
