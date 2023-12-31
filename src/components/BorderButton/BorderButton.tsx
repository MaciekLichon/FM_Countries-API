import React from "react";
import "./BorderButton.scss";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCountryByCode } from "../../redux/countriesSlice";
import { RootState } from "../../redux/store";

interface IProps {
    code: string;
}

const BorderButton: React.FC<IProps> = ({ code }) => {
    const countryName = useSelector((state: RootState) => getCountryByCode(state, code))?.name;

    return (
        <Link to={`/${countryName}`} className="tag tag_small">
            {countryName}
        </Link>
    );
};

export default BorderButton;
